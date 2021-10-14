import api from './api';


export async function List() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.log('ERROR', JSON.stringify(error));
  }
}