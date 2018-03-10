import { Component, OnInit } from '@angular/core';
import {RegexService} from '../services/regex.service';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  appVersion:number;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appVersion=this.appService.getVersion();
  }

}
