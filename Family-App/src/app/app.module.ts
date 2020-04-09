import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { IndividualComponent } from './individual/individual.component';
import { LoginComponent } from './login/login.component';
import { SquareComponent } from './square/square.component';
import { ModalComponent } from './square/modal/modal.component';
import {ModalPopComponent} from './square/modal/modal.component';

import { DataService } from './data.service';
import { AuthService } from './auth.service';

import {MatListModule, MatList} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndividualComponent,
    LoginComponent,
    SquareComponent,
    ModalComponent,
    ModalPopComponent,
    SignupComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [DataService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
