import React, { useState,useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, BackHandler, Alert } from 'react-native';
import { Content, Container, Logo } from '../home/style'
import { Card, TextInput, Button, Title, RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAnimal} from '../../../context/animals';
import TitleHeader from '../../../components/TitleHeader'
import {Header,ContainerImage} from '../home/style'
import Entypo from 'react-native-vector-icons/Entypo';
import { useAuth } from '../../../context/auth';
import { ViewInfor, ViewSelect,TextInfo, MenuButton,TextInfoSelect } from './style'

const Perfil = ({ navigation, route }) => {
    const [value, setValue] = useState(0);

    const { signOut} =useAuth();

    const placeholder = {
        label: 'Selecionar um status',
        color: '#0288d1',
      };
      
    const {
        Delete,
        Update,
        } = useAnimal();

    const [animal, setAnimal] = useState({
        id: 0,
        nome: '',
        localizacao: '',
        status_animal: 0
    });

    useEffect(()=>{
        setAnimal({
            id: route.params.animal.id,
            nome: route.params.animal.nome,
            localizacao: route.params.animal.localizacao,
            status_animal: route.params.animal.status_animal
        })
    }, []);

    function handle(value, key){
        setAnimal({
            ...animal,
            [key]: value,
  
        });
    }
  

      async function deleteAnimal(id){

        const response = await Delete(id);
        if(response === 1 )
        navigation.goBack();
      }

      function ValidFields(){
          let message = '';
            if(animal.nome === '')
            message +='O nome do animal deve ser preenchido. '
            if(animal.status_animal === undefined)
            message += 'O status do animal deve ser preenchido. '
            if(animal.localizacao === '')
            message +='A localização do animal deve ser preenchido. '
            if(message !== ''){
                Alert.alert(message);
                return false;
            }
            else
                return true;
           
      }
        

      async function updateAnimal(){
        const valid = ValidFields();
        let response = '';
        if(valid)
           response = await Update(animal);
      }
      
    return (
        <Container>
          
              
            <Header>
                <TitleHeader title={'Perfil'} goBack={navigation.goBack} icon={true} left={'home'}></TitleHeader>
                <TouchableOpacity onPress={()=>signOut()}>
                <Entypo name="log-out"  color='#fff' size={25} style={{marginRight:'4%'}} />
                </TouchableOpacity>

            </Header>
            <Content>
                <ContainerImage>
                    <Logo source={require('../../../assets/logo.png')}></Logo>
                </ContainerImage>
                <ViewInfor>
                    <TextInfo>
                        Perfil do animal
                    </TextInfo>
                </ViewInfor>
                <Card>
                    <Card.Content>
                        <TextInput key = 'name' label='Nome' onChangeText={(value)=>handle(value, 'nome')} value={animal.nome}></TextInput>
                        <ViewSelect>
                        <TextInfoSelect>Status</TextInfoSelect>
                        <RNPickerSelect
                        useNativeAndroidPickerStyle={false}
                        placeholder= {placeholder}
                        style={{  inputIOS: {
                            fontSize: 18,
                            paddingVertical: 10,
                            paddingHorizontal: 12,
                            paddingRight: 30, // to ensure the text is never behind the icon
                          },
                        }}
                        value= {animal.status_animal}
                        onValueChange={(value)=>handle(value, 'status_animal')}
                            items={[
                            { label: 'Ativo', value: 0 },
                            { label: 'Inativo', value: 1 },
                            { label: 'Vendido', value: 2 },
                            { label: 'Desativado', value: 3 },

                            ]}
                            Icon={() => {
                                return (
                                  <Icon
                                    style={{
                                      marginLeft: -15,
                                      marginTop: 0,
                                    }}
                                    name="sort-down"
                                    size={15}></Icon>
                                );
                              }}
                            />
                        </ViewSelect>
                      
                        <TextInput label='Localização' onChangeText={(value)=>handle(value, 'localizacao')}
                            value={animal.localizacao}
                        ></TextInput>

                       <MenuButton>
                            <Button onPress={()=>updateAnimal(animal)} mode='contained'>salvar</Button>
                            <Button onPress={navigation.goBack} uppercase={false}>cancelar</Button>
                            <Button uppercase={true} onPress={()=>deleteAnimal(animal.id)}>deletar</Button>

                        </MenuButton>

                    </Card.Content>
                            </Card>
            </Content>
        </Container>

    );

}

export default Perfil;