import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {RegexService} from '../../services/regex.service';
import * as CodeMirror from 'codemirror';
import 'codemirror/addon/mode/overlay.js';

// we have used XRegExp for this purpose otherwise it was difficult to skip regex string for RegExp()
import * as XRegExp from 'xregexp';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TextFieldComponent implements OnInit {
  textInput:string=
  `Hello Regex!!
Hello Regexplore!!!`;
  count=0;
  matchCount=0;

  codemirrorOptions={
    lineNumbers: false,
    theme:'default',
    mode: 'regexmode',
    lineWrapping:true
  };
  constructor(private regexService:RegexService) {}
  ngOnInit() {
    this.regexService.regexChangeSubject.subscribe((regexObj:any)=>{
      let {regex,flags}=regexObj;
      console.error("called with "+regex);
      let modename="mode"+(this.count++);
      this.createMode(regex,flags,modename);
      this.codemirrorOptions.mode=modename;
      console.error("mode:"+modename+" flags:"+flags);
      //creating a new mode for highlighting according to our need
    });
    //to send any textinput if given at start
    this.regexService.textFieldChange(this.textInput);
  }

  createMode(regexInput:string,flags:string,modename:string){
    let regex:RegExp;
      try {
        //using exception handling we will avoid
        //crashing and our program works as usual
        if(regexInput==''|| regexInput==null || regexInput==undefined)
            throw -1; //throw exception if regexinput is not there
             regex=XRegExp(regexInput,flags);
      } catch(e) {
        console.error("INVALID: invalid regular expression, see docs");
        this.matchCount=-1;//matchcount=-1 means there is error in regex
        this.regexService.matchCountSubject.next(this.matchCount);
        return;//nothing need to be done from this functio now
      }
      this.matchCount=0;

      //if no matches found then also, we should tell that regex is not
      // invalid any more if it was before
       this.regexService.matchCountSubject.next(this.matchCount);

 console.log("matchCOunt "+this.matchCount);
    //creating a new mode for highlighting according to our need
    CodeMirror.defineMode(modename, (config, parserConfig)=>{
      console.log("defining mode");
      let counter=true;
      var regexOverlay = {
        token:(stream, state)=>{
          var ch;
          if (stream.match(regex)) {
            counter=!counter;
            this.matchCount++;

            console.log("sending "+this.matchCount); //TODO: optimize for sending only once
            this.regexService.matchCountSubject.next(this.matchCount);

            if(counter) return "match1";
            else return "match2";
          }
          while (stream.next() != null && !stream.match(regex, false)) {}
          return null;
        }
      };

      return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/plain"), regexOverlay);
      //returning our mode with overlay we created
      //backdrop will be applied if this mode is not able to be applied
    });
     }
  onKeyup(){
    //to send textinput if any change happens
    this.regexService.textFieldChange(this.textInput);
  }
}
