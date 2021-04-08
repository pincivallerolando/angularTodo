import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "../shared/token-storage.service";


   
@Injectable()
export class AuthService{
   


    constructor(private router: Router,private http: HttpClient, private token: TokenStorageService){}


    signupUser(firstname: string, lastname: string, email: string, password: string): Observable<any>{
        
        //metodo per la creazione di un utente
        return this.http.post('http://localhost:3080/api/users', {firstname,lastname,email,password});
    }

    loginUser(email: string, password: string): Observable<any>{
       return this.http.post('http://localhost:3080/api/auth', {email,password}, {responseType: 'json'});
    }

    logout() {
        return this.token.signOut();
      }
      
    isAuthenticated(){
        return this.token.getToken() != null;
    }
}