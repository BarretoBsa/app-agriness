import React from 'react';

import {
    TextHeader,
    ViewHeader
}
    from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text } from 'react-native';


export default function TitleHeader({ title, goBack, icon, left }) {

    return (
        <ViewHeader style={{flexDirection:'row'}}>
            {
                icon ? 
                <TouchableOpacity onPress={goBack}>
                <MaterialCommunityIcons name="chevron-left" color="#fff" size={32} />
            </TouchableOpacity> : <></>
            }
            
            <TextHeader left={left}>
                {title}
            </TextHeader>
        </ViewHeader>
    );
}


