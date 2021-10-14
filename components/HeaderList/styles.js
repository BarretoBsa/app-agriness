import styled from 'styled-components/native';



export const TextHeader = styled.Text`
color: white;
font-size: 20px;
margin-left: ${(props)=>(props.left === 'home' ? '43%' : '15%')};
`;


export const ViewHeader = styled.View`
flex-direction: row;
height: 40px;
margin-bottom: 2px;
border: solid; border-width: .5px; border-color: #e0e0e0;                                     
background-color: #eeeeee;
width: 100%;
`;

export const ViewNome = styled.View`
width: 55%; justify-content:center; align-items: center;
`;
export const ViewLocalizacao = styled.View`
width: 45%;
justify-content:center; align-items: flex-start`;

export const ViewInfo = styled.View`
width: 100%; align-items: center;
`;

export const TextNome = styled.Text`

font-size: 18px; font-weight: bold;
`;


export const TextLocalizacao= styled.Text`

font-size: 18px; font-weight: bold;
`;


export const TextInfo= styled.Text`

font-size: 16px;
`;