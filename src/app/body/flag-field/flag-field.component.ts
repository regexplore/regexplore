import { Component, OnInit } from '@angular/core';
import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-flag-field',
  templateUrl: './flag-field.component.html',
  styleUrls: ['./flag-field.component.css']
})
export class FlagFieldComponent implements OnInit {
  gflag:boolean=true;
  iflag:boolean=false;
  flagField:string;

  // mflag:boolean=false;
  // sflag:boolean=false;
  matchCount:number; //this will show number of matches so far
  constructor(private regexService:RegexService) { }

  ngOnInit() {
    this.syncFlag();
    this.regexService.flagFieldChange(this.flagField);
    this.regexService.matchCountSubject.subscribe((matchCount:number)=>{
      this.matchCount=matchCount;
    })
  }
  onFlagChange(){
    this.syncFlag();
    this.regexService.flagFieldChange(this.flagField);
  }

  //this function sync the flagfield according to template
  syncFlag(){
    this.flagField="";
    if(this.gflag) this.flagField+='g';
    if(this.iflag) this.flagField+='i';
    // if(this.mflag) flagField+='m';
    // if(this.sflag) flagField+='s';
  }
}
