import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
 
  //loadedFeature = 'activities';
  
  constructor(){}

  ngOnInit(){

  }

  /* onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
   */
}
