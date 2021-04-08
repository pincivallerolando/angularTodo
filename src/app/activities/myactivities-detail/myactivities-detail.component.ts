import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { User } from 'src/app/user/user/user.model';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-myactivities-detail',
  templateUrl: './myactivities-detail.component.html',
  styleUrls: ['./myactivities-detail.component.css']
})
export class MyactivitiesDetailComponent implements OnInit {
  activity: Activity;
  id: string;
  user: User;
  

  constructor(private route: ActivatedRoute,
              private router: Router, private activityService: ActivityService, private token: TokenStorageService) { }

  ngOnInit(){

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getActivity();

     }
    );

  }

 getActivity(){

    this.activityService.getSingleActivity(this.id).subscribe(
      (response)=>{
        this.activity=response;
      }, (error: any)=>{
      console.log(error);
    });

  }

  onEditActivity() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteActivity() {
    
    this.activityService.delete(this.id).subscribe(
      (response)=>{
        this.activityService.deleteActivity(this.id);
       console.log(response);
      }, (error: any)=>{
      console.log(error);
    });;
    this.router.navigate(['/myactivities']);
  }


}