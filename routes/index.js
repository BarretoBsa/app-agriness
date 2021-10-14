import React, { useContext } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useAuth} from '../context/auth'


export default function Routes(){

    const {signed} = useAuth();

    return  signed ? <AppRoutes /> : <AuthRoutes/>
  };
