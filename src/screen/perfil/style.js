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
height: 12%;
justify-content: center;
align-items: center;
`;

export const Logo = styled.Image`
width: 40%;
height: 35%;
`;

export const Main = styled.View`
    width: 80%;
    `;

    export const ViewInfor = styled.View`
    height: 50px;
    justify-content: center;
    align-items: center;
  `;
  

    export const ViewSelect = styled.View`
    width: 100%; 
    height: 22%; 
    border-bottom-color: #0f0f0f;
    border-bottom-width: 1px;
    justify-content: center;
    `;


    export const TextInfo = styled.Text`
    font-size: 16px;
    `;
    
    export const TextInfoSelect = styled.Text`
    font-size: 12px;
    margin-left: 3%;
    margin-top:2%;
    color: #757575;

    `;
    

    export const MenuButton = styled.View`
    margin-top: 5%;
    flex-direction: row;
    justify-content: center;
    `;

 
