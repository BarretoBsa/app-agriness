import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screen/home';
import Perfil from '../src/screen/perfil';
import List from '../src/screen/list';




const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator 
 
    screenOptions={{
      headerShown:false,
      headerStyle: {
        backgroundColor: '#4F8EF7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen  
      name="Home" component={Home} 
      
      />

      <Stack.Screen 
      name="List"         
      component={List} 
      />
      
     <Stack.Screen 
     name="Perfil"         
     component={Perfil}
      />
    </Stack.Navigator>
  );
}
