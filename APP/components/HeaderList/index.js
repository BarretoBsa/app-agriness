import React from 'react';

import {
    TextHeader,
    ViewHeader,
    ViewLocalizacao,
    ViewNome,
    ViewInfo,
    TextNome,
    TextLocalizacao,
    TextInfo
}
    from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text } from 'react-native';


export default function HeaderList({ show}) {

    return (
        
            <ViewHeader>
                {
                    show ?
                    <>
                    <ViewNome> 
                    <TextNome>Nome</TextNome>
    
                    </ViewNome>
                    <ViewLocalizacao> 
                       <TextLocalizacao> Localização</TextLocalizacao>
    
                    </ViewLocalizacao>
                    </>
                    : <ViewInfo><TextInfo >Não tem nenhum animal</TextInfo></ViewInfo>
                }
   
            </ViewHeader> 
        
    );
}


