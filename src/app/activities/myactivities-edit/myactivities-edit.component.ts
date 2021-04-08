import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/token-storage.service';
import { User } from 'src/app/user/user/user.model';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-myactivities-edit',
  templateUrl: './myactivities-edit.component.html',
  styleUrls: ['./myactivities-edit.component.css']
})
export class MyactivitiesEditComponent implements OnInit {

  id: string;
  editMode = false;
  activityForm: FormGroup;
  user: User;


  constructor(private route: ActivatedRoute, private activityService: ActivityService, 
    private router: Router,
     private token: TokenStorageService) { }

  ngOnInit(){

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  private initForm() {
    let activityDescription = '';
    let activityStatus = '';
    
    if (this.editMode) {
      this.activityService.getSingleActivity(this.id).subscribe(
        (response)=>{
          activityDescription = response.description;
          activityStatus = response.status;
        }, (error: any)=>{
        console.log(error);
      }
      );
     
    }

    this.activityForm = new FormGroup({
      'description': new FormControl(activityDescription, Validators.required),
      'status': new FormControl(activityStatus, Validators.required)
    });
  }

  onSubmit() {
   
    this.user = this.token.getUser();
    if (this.editMode) {
      this.activityService.update(this.id, this.activityForm.value['description'], this.activityForm.value['status']).subscribe(
        (response)=>{
         
          this.activityService.updateActivity(this.id, this.activityForm.value['description'], this.activityForm.value['status']);
          console.log(response);
          
        }, (error: any)=>{
          console.log(error);
        }

      );
    } else {
      
      this.activityService.add( this.activityForm.value['description'], this.activityForm.value['status']).subscribe(
        
        (response)=>{
          this.activityService.addActivity(response);
          console.log(response);
         
        }, (error: any)=>{
          console.log(error);
        }

      );
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
