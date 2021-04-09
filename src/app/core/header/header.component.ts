import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenStorageService } from '../../shared/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router){}



  ngOnInit(){
  
  }

  //onclick logout
  onLogout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  //utilizzo del metodo isAuthenticated per il versioning dell'header in base all'autenticazione effettuata
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
