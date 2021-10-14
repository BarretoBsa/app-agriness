import React , {useEffect}from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Content, ContainerImage,Header, Container, Logo , ViewInfor, TextInfor} from './style';
import List from '../list';
import Entypo from 'react-native-vector-icons/Entypo';

import {useAnimal} from '../../../context/animals';
import TitleHeader from '../../../components/TitleHeader'
import { useAuth } from '../../../context/auth';

export default function Home({ navigation }) {

 const {
    Lists,
    Get,
    listAnimals
  } = useAnimal();

  const {signOut} = useAuth();

useEffect(()=>{
    async function list(){
        const response = await Lists();
    }
    list();
}, []);





  return (
    <Container>
         <Header>
                <TitleHeader title={'Home'} goBack={navigation.goBack} icon={false} left={'home'}></TitleHeader>
                <TouchableOpacity onPress={()=>signOut()}>
                <Entypo name="log-out"  color='#fff' size={25} style={{marginRight:'4%'}} />
                </TouchableOpacity>

            </Header>

      <Content>

      <ContainerImage>
          <Logo source={require('../../../assets/logo.png')}></Logo>
        </ContainerImage>
        <ViewInfor>
          <TextInfor >
            Listagem dos animais que a granja possui. 
          </TextInfor>
        </ViewInfor>
        <List navigation={navigation} ></List>
        
      </Content>
    </Container>

  );

}