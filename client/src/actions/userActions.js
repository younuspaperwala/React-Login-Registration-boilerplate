import axios from 'axios';
// import { response } from 'express';

import { LOGIN_USER } from './types';
import { REGISTER_USER } from './types';


export function loginUser(dataToSubmit){
    const request = axios.post('/api/users/login',dataToSubmit)
    .then(response=> response.data)
    // .catch(error=>"Not Reachable")

  return {
        type:LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/users/register',dataToSubmit)
    .then(response => response.data)
    console.log(request+"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return {
        type:REGISTER_USER,
        payload: request
    }
}
  