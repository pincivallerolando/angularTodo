import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { User } from 'src/app/user/user/user.model';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';

/* component per la visualizzazione dei dettagli della singola activity */ 

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
              private router: Router, private activityService: ActivityService) { }



//prendo l'id dai params e richiamo il metodo getActivity
  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getActivity();
     }
    );

  }


//utilizzo il metodo getSingleActivity dal service per le activities e gli passo l' id
 getActivity(){
    this.activityService.getSingleActivity(this.id).subscribe(
      (response)=>{
        this.activity=response;
      }, (error: any)=>{
      console.log(error);
    });

  }

  //onclick sul bottone edit
  onEditActivity() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }


  //onclick sul bottone delete
  //vado a richiamare il metodo delete del service sull'id dell'activity selezionata
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