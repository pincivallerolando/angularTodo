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
/* working
  ngOnInit(){
     this.userID = this.token.getUser();
     this.userService.getInfo(this.userID.id).subscribe(
       (response: any)=>{
         this.user = response;
         console.log(this.user);
       }, (error: any)=>{
         console.log(error);
       }
     );
    
  }

*/
  ngOnInit(){
    this.user = this.token.getUser();
    console.log(this.user);
  }

}
