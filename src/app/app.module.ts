import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AppHttpService } from './shared/app-http.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { DropdownDirective } from './shared/dropdown.directive';




@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    CoreModule
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppHttpService, multi: true }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
