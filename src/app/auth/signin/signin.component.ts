import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;


  constructor(private route: ActivatedRoute,
    private router: Router,private authService: AuthService, private token: TokenStorageService ) { }

  ngOnInit(){
  if (this.token.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password).subscribe(
     (response: any)=> {
      
        this.token.saveToken(response.token);
        this.token.saveUser(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/']);

      } , (error: any )=>{
        this.isLoginFailed = true;
        console.log(error);
      }
    ); 
  }

}
