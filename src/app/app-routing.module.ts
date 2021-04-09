import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
import { UserComponent } from './user/user/user.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent, canActivate:[AuthGuard]},
  //lazy module
  {path:'myactivities', loadChildren: () => import ('./activities/activity.module').then(m => m.ActivityModule), canActivate: [AuthGuard]},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
