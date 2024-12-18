import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

import { FormGroup } from '@angular/forms';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AppRoutingModule],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    LoginComponent // Declare LoginComponent here
  ]
})
  
export class AppRoutingModule { }