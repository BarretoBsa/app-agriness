import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
display: flex;
flex: 1;
flex-direction: row;
background-color: #e0e0e0;

`;

export const Content = styled.View`
width: 100%;
height: 100%;
background-color: #fff;

`;
export const Header = styled.View`
width: 100%;
height: 10%;
justify-content: center;
align-items: center;
`;

export const Logo = styled.Image`
width: 40%;
height: 35%;
`;

export const Main = styled.View`
    width: 80%`;

export const ViewSearch = styled.View`
margin-bottom: 5%;
`;

export const Card = styled.View`
flex-direction: row;
height: 40px;
margin-bottom: 2px;
border: solid; 
border-width: .5px; 
border-color: #e0e0e0;

`;

export const ViewNome = styled.View`
width: 60%;
justify-content: center;
align-items: center;
background-color: #eeeeee;

`;

export const TextNome = styled.Text`
font-size: 18px;

`;


export const ViewLocalizacao = styled.View`
width: 40%;
justify-content: center;
align-items: flex-start;
background-color: #eeeeee;

`;

export const TextLocalizacao = styled.Text`
font-size: 18px;

`;


