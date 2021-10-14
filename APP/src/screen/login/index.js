import React, { useState } from 'react';
import {View,Text,Image, Alert} from 'react-native';
import { Card, TextInput , Button, Title} from 'react-native-paper';
import { useAuth } from '../../../context/auth';
import {Content, Main} from './style';



const Login = () => {

    const { signIn , loading} = useAuth();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    async function Logar(){
       if(!validateEmail(login.email))
       Alert.alert("Email não é valido")
        else if (!validatePassword(login.password))
        Alert.alert("A senha tem que ter no mínimo 4 digitos") ;
        else{
           const user = await signIn(login);

        }
        

    }

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email) 
      }

      function validatePassword(password) {

        return password.length > 3 ? true: false;
      }

    function handle(value, key){

        setLogin({
            ...login,
            [key]:value
        })


    }

    return (
            <Content> 
                <Main>
               
              
            <Card>
            <View style = {{ alignItems: 'center', marginTop: '5%'}} >
              <Image  source = {require('../../../assets/logo.png')}/>
            </View>
                 
                <Card.Content>
                    <TextInput onChangeText = {(text)=>handle(text, 'email')} label = 'Email'></TextInput>
                    <TextInput  onChangeText = {(text)=>handle(text, 'password')} label = 'Senha' secureTextEntry = {true}></TextInput> 
                    <Button uppercase={false}>{}</Button>
                    <Button onPress={()=>Logar()} mode='contained'>Login</Button>
                </Card.Content>
    
            </Card>
            </Main>
            </Content>
    );

}

export default Login; 