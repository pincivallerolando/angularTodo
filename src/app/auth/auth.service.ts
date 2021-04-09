import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "../shared/token-storage.service";


   
@Injectable()
export class AuthService{
   


    constructor(private router: Router,private http: HttpClient, private token: TokenStorageService){}


    //metodo per la registrazione di un utente
    signupUser(firstname: string, lastname: string, email: string, password: string): Observable<any>{
        
        return this.http.post('http://localhost:3080/api/users', {firstname,lastname,email,password});
    }

    //metodo per il login di un utente
    loginUser(email: string, password: string): Observable<any>{
       return this.http.post('http://localhost:3080/api/auth', {email,password}, {responseType: 'json'});
    }

    //metodo per il logout di un utente
    logout() {
        return this.token.signOut();
      }
      
    //metodo per la verifica di accesso che richiamo nel header component
    isAuthenticated(){
        return this.token.getToken() != null;
    }
}