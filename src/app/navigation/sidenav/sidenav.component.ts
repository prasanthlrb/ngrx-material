import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-on-prefix
@Output() onSidenavClose = new EventEmitter<void>();
 authSubscription: Subscription;
isAuth = false;
constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onLogout() {
    this.sidenavclose();
    this.authService.logout();
  }
  sidenavclose() {
    this.onSidenavClose.emit();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
