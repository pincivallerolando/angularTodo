import { Injectable } from '@angular/core';


const TOKEN_KEY = 'x-auth-token';
const USER_KEY = 'auth-user';



//service per la gestione del token con signout, savetoken, gettoken, saveuser, getuser

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  
  
  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

  }

  public saveToken(token: string): void {

    localStorage.setItem(TOKEN_KEY, token);
   
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
 
   localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
   return JSON.parse(localStorage.getItem(USER_KEY));
  } 
}
