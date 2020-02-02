import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
  version = 'v1.0-α.2';

  constructor(private http: HttpClient) { }

  getVersion() {
    return this.version;
  }

  getContributors() {
   return this.http.get('//api.github.com/repos/regexplore/regexplore/contributors');
  }
}
