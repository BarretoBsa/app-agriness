import axios from 'axios';

import { Alert } from 'react-native';

import { getUser, deleteUser } from './utils';
const api = axios.create({
  // local
   baseURL: 'http://localhost:3000',
    // local ip: desenvolvimento no mac, só funcionou com o IP
    //baseURL: 'http://192.168.0.3:3000',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

});
api.interceptors.response.use(
  response => {
    return response
  },
  error => {

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      Alert.alert(
        'Aviso',
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        [ { text: 'OK' } ],
        { cancelable: false },
      )
    }


    return Promise.reject(error)
  },
)

api.interceptors.request.use(
  config => {
    return getUser()
      .then(user => {
        user = JSON.parse(user)
        if (user && user.token)
          config.headers.Authorization = `Bearer ${user.token}`
        return Promise.resolve(config)
      })
      .catch(error => {
        console.log(error)
        return Promise.resolve(config)
      })
  },
  error => {
    return Promise.reject(error)
  },
)


 export default api;
