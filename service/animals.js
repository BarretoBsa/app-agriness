import api from './api';


export async function ListAnimals() {
  try {
    const response = await api.get('/animals',
    {
      headers: {
        'Content-Type': 'application/json',
      },

    });
    return response.data;
  } catch (error) {

    console.log('nao tem ERROR', JSON.stringify(error));

  }
}

export async function SaveAnimal(animal) {
    try {
      const response = await api.post('/animals', animal);
      return response.data;
    } catch (error) {

      console.log('ERROR', JSON.stringify(error));
    }
  }


export async function UpdateAnimal(animal) {
  try {
    const response = await api.put('/animals', animal);
    return response.data;
  } catch (error) {
    console.log('ERROR', JSON.stringify(error));
  }
}

  export async function  GetAnimal(id) {
    try {
      const response = await api.get('/animals?=', id);
      return response.data;
    } catch (error) {
      console.log('ERROR', JSON.stringify(error));
    }
  }

  export async function  DeleteAnimal(id) {
    try {
      const response = await api.delete('/animals/'+id);
      return response.data;
    } catch (error) {
      console.log('ERROR', JSON.stringify(error));
    }
  }

  