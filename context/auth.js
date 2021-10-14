import React, { createContext, useState, useEffect, useContext } from 'react';
import { Login } from '../service/auth'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({ signed: false, user: {}, loading: true });

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  async function signIn(object) {
    setLoading(true)
    const response = await Login(object)
    await saveUser(response)
    console.log('response login: ', response)
    if (response) {
      //await AsyncStorage.setItem("userLogged", 'true');

      setSigned(true);
      setUser(response);
    }
    else {

      Alert.alert('Dados invalidos')


    }
    setLoading(false)
  }

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }

  function signOut() {
    setSigned(false);
    setUser(null);
    AsyncStorage.removeItem('@ListApp:userToken');

  }
  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        signOut,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const {
    signed,
    user,
    signIn,
    signOut,
    loading

  } = context;
  return {
    signed,
    user,
    signIn,
    signOut,
    loading

  };
}
