import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService, private router: Router) {}
  panelOpenState: boolean;


  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      // console.log(isAuthenticated);
      this.userIsAuthenticated = isAuthenticated;
      // console.log('this.userIsAuthenticated should be true: ', this.userIsAuthenticated);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  viewFamily() {
    // console.log('viewFamily()');
    this.router.navigate(['/square']);
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

}
