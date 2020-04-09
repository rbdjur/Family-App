import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SquareComponent } from './square/square.component';
import { IndividualComponent } from './individual/individual.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'square', component: SquareComponent},
  {path: 'individual/:user', component: IndividualComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
