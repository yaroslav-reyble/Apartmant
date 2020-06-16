import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthService} from '@shared/services/auth.service';

@Injectable()
export class TokenInterceptor  {
  authPrefix: string;

  constructor(private auth: AuthService) {
    this.authPrefix =
      /** condition is:
       * If we have some specific auth prefix we use it,
       * Else we use default JWT (json web token) prefix - 'Bearer' */
      environment && environment['AUTH_KEY']
        ? environment['AUTH_KEY']
        : 'Bearer';
  }

}
