import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, SkipSelf } from "@angular/core";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:3080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getInfo(userID): Observable<any>{
    return this.http.get(`${baseUrl}/me/${userID}`, {responseType: 'json'});
  }

}
