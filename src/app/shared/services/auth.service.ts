import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalStorage } from '@shared/storage/universal.storage';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(@Inject(UniversalStorage) private _appStorage: Storage,
              private http: HttpClient,
              private _router: Router) {

  }

  getUserLocation(): Observable<any> {
    return this.http.get('http://ip-api.com/json');
  }
}
