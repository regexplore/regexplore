import {Http} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AppService{
  version:string="v0.8";
  contributors=[]

  constructor(private http:Http) { }

  getVersion(){
    return this.version;
  }

  getContributors(){
   return this.http.get('//api.github.com/repos/regexplore/regexplore/contributors');
  }
}
