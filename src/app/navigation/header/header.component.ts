import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
// tslint:disable-next-line:no-output-on-prefix
@Output() onSidenavToogle = new EventEmitter<void>();
isAuth = false;
authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  sidenavtoggle() {
    this.onSidenavToogle.emit();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
