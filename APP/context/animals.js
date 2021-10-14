import React, {
    createContext,
    useState,
    useContext,
    

} from 'react';
import { Alert } from 'react-native';

import {  ListAnimals, GetAnimal, SaveAnimal, UpdateAnimal, DeleteAnimal } from '../service/animals'

const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {

    const [listAnimals, setListAnimals] = useState([]);
    const [animal, setAnimal] = useState({});


    async function Lists() {
        const response = await ListAnimals();
        setListAnimals(response)

    }
    async function Get(id) {
        const response = await GetAnimal(id);
        setContact(response)
        return response;
    }

    async function Save(animal) {
        const response = await SaveAnimal(animal);
        setAnimal(response)
        return response;
    }

    async function Update(animal) {
        const response = await UpdateAnimal(animal);
        console.log('response.status: ', response)
        if(response)
         Alert.alert('Alteração feita com sucesso!')
        return response.status;
    }

    async function Delete(id) {
        const response = await DeleteAnimal(id);
        if(response.status === 1){
            const response = await ListAnimals();
            setListAnimals(response)
            Alert.alert('Deletado com sucesso!')

        }
        return response.status;
    }

    return (
        <AnimalContext.Provider
            value={{
                Lists,
                Get,
                listAnimals,
                Delete,
                Update,
                animal
            }}
        >
            {children}
        </AnimalContext.Provider>
    );
};

export function useAnimal() {
    const context = useContext(AnimalContext);

    const {
        Lists,
        Get,
        listAnimals,
        Delete,
        Update,
        animal
    } = context;
    return {
        Lists,
        Get,
        listAnimals,
        Delete,
        Update,
        animal
    };
}


