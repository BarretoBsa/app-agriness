
import api from './api'

export async function Login(object) {
  try {
    const response = await api.post('/auth', object);
    return response.data;
  } catch (error) {
    console.log('ERROR AQUI', JSON.stringify(error));
    console.log('ERRO:', JSON.stringify(error));
    console.log('data', error.response.data);
    console.log('status', error.response.status);
    console.log('headers', error.response.headers);
  }
}