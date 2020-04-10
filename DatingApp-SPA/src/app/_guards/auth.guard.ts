import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
<<<<<<< HEAD
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {}
=======
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
>>>>>>> a29c801ae7495aba48884cdcc667a2ffe4086fc9

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
<<<<<<< HEAD
=======

>>>>>>> a29c801ae7495aba48884cdcc667a2ffe4086fc9
    this.alertify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> a29c801ae7495aba48884cdcc667a2ffe4086fc9
