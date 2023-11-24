import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { AdminComponent } from './dashboard/admin/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
       StaffComponent,
       AdminComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule,MatButtonModule,MatIconModule,

    AppRoutingModule,HttpClientModule,RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
