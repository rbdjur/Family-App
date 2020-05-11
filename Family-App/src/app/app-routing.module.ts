import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { IndividualComponent } from './individual/individual.component';
import { AuthGuard } from './auth.guard';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';



const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'posts', component: PostListComponent},
  {path: 'create', component: PostsCreateComponent, canActivate: [AuthGuard]},
  {path: 'edit/:postId', component: PostsCreateComponent, canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./auth.module').then(m =>
    m.AuthModule)
  }

  // {path: 'login', component: LoginComponent},
  // {path: 'signup', component: SignupComponent}

  // {path: 'square', component: SquareComponent, canLoad: [AuthGuard]},

  // {path: 'individual', component: IndividualComponent},
  // {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: [AuthGuard]
})
export class AppRoutingModule { }
