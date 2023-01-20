import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getUser(){
    var user:any ;
    user = localStorage.getItem('user');
    if(user){
      user = JSON.parse(user);//parse convert token data string into json formt
    }
    return user ;
  }

  getToken() {
    var token: any = "";
    token = localStorage.getItem('authToken');
    if (token) {
      return token
    }
    return token;
  }
}