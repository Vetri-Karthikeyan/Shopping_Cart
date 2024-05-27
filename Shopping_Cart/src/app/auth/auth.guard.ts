import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UtilityService } from '../services/utility.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private utilityService: UtilityService){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean { 
    if (this.utilityService.getUser().usertype != 'User')
    {
      let roles = next.data['permittedRoles'] as Array<string>;
      return true
    }
      this.router.navigate(['/home']);
      return false
  }
}