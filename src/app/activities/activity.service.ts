import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { Activity } from './activity.model';


const baseUrl = 'http://localhost:3080/api/activities/myactivities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  isChanged = new Subject<Activity[]>();
  private activities: Activity[];

  constructor(private http: HttpClient) { }

  getActivities(id: string): Observable<Activity[]>{
    return this.http.get<Activity[]>(`${baseUrl}/${id}`, {responseType: 'json'});
  }
  getSingleActivity(id: string): Observable<Activity>{
    return this.http.get<Activity>(`${baseUrl}/single/${id}`, {responseType: 'json'});
  }

  add(description: string, status: string): Observable<any>{
    return this.http.post(`${baseUrl}/new`,{description, status});
  }

  update(idA: string, description: string, status: string): Observable<any> {
    return this.http.put(`${baseUrl}/update/${idA}`,{description, status});
  }

  delete(idA: string): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${idA}`);
  }



  //other methods for subject

  setActivities(activites: Activity[]){
    this.activities = activites;
    this.isChanged.next(activites.slice());
  }
  addActivity(activity: Activity){
    this.activities.push(activity);
    this.isChanged.next(this.activities.slice());
  }
  updateActivity(id: string, description: string, status: string){
    this.activities.forEach(element => {
      if(element._id.localeCompare(id)==0){
        element.description = description;
        element.status = status;
      }
    });
    this.isChanged.next(this.activities.slice());
  }
  deleteActivity(id: string){
    this.activities.forEach((element, index) => {
      if(element._id.localeCompare(id)==0){
        this.activities.splice(index, 1);
      }
    });
    this.isChanged.next(this.activities.slice());
  }
  
  
}
