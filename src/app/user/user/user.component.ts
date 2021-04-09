import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  userID;
  user: User;
  constructor(private token: TokenStorageService, private userService: UserService) { }

  //prendo le info dell'user da quelle salvate in fase di login || in alternativa potevo effettuare una req con il metodo getInfo di userService
  ngOnInit(){
    this.user = this.token.getUser();
    console.log(this.user);
  }

}
