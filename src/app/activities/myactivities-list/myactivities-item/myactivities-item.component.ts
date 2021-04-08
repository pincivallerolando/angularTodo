import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../../activity.model';

@Component({
  selector: 'app-myactivities-item',
  templateUrl: './myactivities-item.component.html',
  styleUrls: ['./myactivities-item.component.css']
})
export class MyactivitiesItemComponent implements OnInit {
  @Input() activity: Activity;
  @Input() index: string;


  constructor() { }

  ngOnInit(){

  }
 

}
