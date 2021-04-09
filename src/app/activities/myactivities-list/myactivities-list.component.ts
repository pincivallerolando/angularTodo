import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-myactivities-list',
  templateUrl: './myactivities-list.component.html',
  styleUrls: ['./myactivities-list.component.css']
})
export class MyactivitiesListComponent implements OnInit {

//ho usato le subsctiption e il service condiviso per poter visualizzare le modifiche effettuate su un activity
//in quanto le componenti che devono comunicare non hanno una relazione padre-figlio

  activities: Activity[];
  userID: any;
  subscription: Subscription;

  constructor(private activityService: ActivityService, private token: TokenStorageService, private router: Router,
    private route: ActivatedRoute) { 
      
    }

  //inizializzo l'array delle activities, utilizzando subscription per "intercettare" i cambiamenti
  //e il metodo getActivities del service
  ngOnInit(){
    this.subscription = this.activityService.isChanged.subscribe(
      (activities: Activity[]) => {
      this.activities = activities;
    });

    this.userID = this.token.getUser();
      this.activityService.getActivities(this.userID.id).subscribe(
      (response)=>{
        this.activities = response;
        this.activityService.setActivities(response);
        console.log(this.activities);
      }, (error: any)=>{
        console.log(error);
      }
      
      ); 
  } 
  
  //onclick su add activity
 onNewActivity(){
  this.router.navigate(['new'], {relativeTo: this.route});
} 
ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
