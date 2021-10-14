import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Content, Container, ViewSearch ,Card, ViewNome,ViewLocalizacao, TextNome,TextLocalizacao} from './style';
import {useAnimal} from '../../../context/animals';
import { SearchBar } from 'react-native-elements';
import HeaderList from '../../../components/HeaderList';



export default function List ({ navigation }){

    const {listAnimals, Lists} = useAnimal();
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(()=>{
        setFilteredDataSource(listAnimals);
        setMasterDataSource(listAnimals)
    }, [listAnimals]);

    useEffect( ()=>{
        navigation.addListener('focus', async () =>{
            async function list(){
                const response = await Lists();
            }
            list();
        })
     },[listAnimals, navigation])

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.nome
              ? item.nome.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            if(itemData.indexOf(textData) > -1)
                return itemData.indexOf(textData) > -1;
            
            const itemLoc = item.localizacao
              ? item.localizacao.toUpperCase()
              : ''.toUpperCase();
            const textLoc = text.toUpperCase();
            return itemLoc.indexOf(textLoc) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };


    return (
        <Container>
            <Content>


            <ViewSearch>
                  

                   <SearchBar
                    platform = 'ios'
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Nome/Localização"
                    value={search}
                />
             </ViewSearch>


                <HeaderList show={filteredDataSource}></HeaderList>

                {
                    filteredDataSource ? 

                    <FlatList
                    data={filteredDataSource}
                    keyExtractor={() =>
                        Math.random(1, 100)
                            .toString(36)
                            .substr(2, 9)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Perfil', {
                                animal: item
                            })}>
                            <Card>
                                <ViewNome>
                                   <TextNome>{item.nome}</TextNome>
                                </ViewNome>

                                <ViewLocalizacao>
                                    <TextLocalizacao>{item.localizacao}</TextLocalizacao>
                                </ViewLocalizacao>
                            </Card>

                        </TouchableOpacity>

                    )
                    }
                    style={{ flex: 1, width: '100%' }}
                />     : <View></View>
                }
                

            </Content>
        </Container>

    );

}
