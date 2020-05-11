import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { IndividualComponent } from './individual/individual.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import { ErrorComponent } from './error/error.component';

import { SquareComponent } from './square/square.component';
import { ModalComponent } from './square/modal/modal.component';
import {ModalPopComponent} from './square/modal/modal.component';

import { DataService } from './data.service';
import { AuthService } from './auth.service';
import {AuthInterceptorService} from './auth-interceptor.service';
import { ErrorInterceptor } from './error-interceptor';
import { AuthGuard } from './auth.guard';
import {PostsService} from './posts/posts.service';

import {MatListModule, MatList} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

import {AngularMaterialModule} from './angular-material-module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndividualComponent,
    SquareComponent,
    ModalComponent,
    ModalPopComponent,
    PostsComponent,
    PostsCreateComponent,
    PostListComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [DataService, PostsService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
