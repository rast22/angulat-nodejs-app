import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "./services/auth-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  isAuth: boolean = false;
  private authSubscription: Subscription;

  constructor(private router: Router, private authService:AuthServiceService) {
    this.authSubscription = this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        this.isAuth = isAuthenticated;
      }
    );
  }

  onRedirect(link: string) {
    this.router.navigate([link]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    // Unsubscribe from the authentication observable to prevent memory leaks
    this.authSubscription.unsubscribe();
  }
}
