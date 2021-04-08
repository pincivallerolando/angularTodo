import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { MyactivitiesComponent } from './myactivities.component';
import { MyactivitiesEditComponent } from './myactivities-edit/myactivities-edit.component';
import { MyactivitiesDetailComponent } from './myactivities-detail/myactivities-detail.component';

const activitiesRoutes: Routes = [
  { path: '', component: MyactivitiesComponent, children: [
    { path: 'new', component: MyactivitiesEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: MyactivitiesDetailComponent },
    { path: ':id/edit', component: MyactivitiesEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(activitiesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class ActivityRoutingModule {}
