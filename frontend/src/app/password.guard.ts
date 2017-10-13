import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PasswordGuard implements CanActivate {

  constructor(private userAuth: UserAuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userAuth.forgotPasswordSessionAuth()){  
       return true; 
      }else{
       this.router.navigate(['forbidden']); 
       return false;
     }

  }
}
