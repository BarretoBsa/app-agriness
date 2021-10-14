import styled from 'styled-components/native';

export const ViewHeader = styled.View`
flex-grow: 1;
`;

export const TextHeader = styled.Text`
color: white;
font-size: 20px;
margin-left: ${(props)=>(props.left === 'home' ? '43%' : '15%')};
`;


