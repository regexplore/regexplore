import {Http} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AppService {
  version = 'v1.0';

  constructor(private http: Http) { }

  getVersion() {
    return this.version;
  }

  getContributors() {
   return this.http.get('//api.github.com/repos/regexplore/regexplore/contributors');
  }
}
