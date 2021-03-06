import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,private authService: AuthService) { }

  ngOnInit(){
  }

  //submit del form di signup
  onSignup(form: NgForm){
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(firstname, lastname, email, password).subscribe({
      next: () => {
        this.router.navigate(['../signin'], {relativeTo: this.route})
     

      } , error: error =>{
        console.log(error);
      }
    });
  }
}
