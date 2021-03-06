import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;
    constructor(private router: Router) {}
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.authSuccessfully();
    }
    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.authSuccessfully();
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }
    getUser() {
        return { ...this.user };
    }
    isAuth() {
        return this.user != null;
    }
    private authSuccessfully() {
        this.router.navigate(['/training']);
    }
}
