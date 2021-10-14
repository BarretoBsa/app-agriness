import React from 'react'
import styled from 'styled-components/native'
import {DefaultTheme} from 'react-native-paper';


export const Container = styled.SafeAreaView`
display: flex;
flex: 1;
flexDirection: column;
backgroundColor: #e0e0e0;

`;

export const Content = styled.View`
flex: 12;
height: 100%;
backgroundColor: #fff;

`;
export const ContainerImage = styled.View`
width: 100%;
height: 12%;
justifyContent: center;
alignItems: center;
`;

export const Logo = styled.Image`
width: 45%;
height: 40%;
`;

export const Main = styled.View`
    width: 80%`;

    export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    background: #0288d1;
    align-items: center;
    justify-content: flex-start;
  `;

  export const ViewInfor = styled.View`
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextInfor = styled.Text`
font-size: 16px;
`;
