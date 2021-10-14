import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvide, TextInput} from 'react-native-paper';
import { Theme } from './app.style';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AnimalProvider } from './context/animals';
import { AuthProvider } from './context/auth';


export default function App() {

  return (
  <NavigationContainer>
  <PaperProvide theme = {Theme}>
  <AuthProvider>
  <AnimalProvider> 
      <Routes></Routes>
      </AnimalProvider> 
  </AuthProvider>
  
  </PaperProvide>  
  </NavigationContainer>

  );
}


