import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ActivityRoutingModule } from "./activity-routing.module";
import { MyactivitiesDetailComponent } from "./myactivities-detail/myactivities-detail.component";
import { MyactivitiesEditComponent } from "./myactivities-edit/myactivities-edit.component";
import { MyactivitiesComponent } from "./myactivities.component";
import { MyactivitiesItemComponent } from './myactivities-list/myactivities-item/myactivities-item.component';
import { MyactivitiesListComponent } from './myactivities-list/myactivities-list.component';



@NgModule({
    declarations: [
      MyactivitiesComponent,
      MyactivitiesListComponent,
      MyactivitiesEditComponent,
      MyactivitiesDetailComponent,
      MyactivitiesItemComponent
      
 
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ActivityRoutingModule,
      SharedModule
    ]
  })
  export class ActivityModule {}