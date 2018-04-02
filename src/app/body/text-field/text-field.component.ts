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
  textInput:string='ashishw0-99 sdafsdafashishw0-99 sdafsdafashishw0-99';
  count=0;
  // @ViewChild('styleText') styleText:ElementRef;
  codemirrorOptions={
    lineNumbers: false,
    theme:'default',
    mode: 'regexmode'
  };
  constructor(private regexService:RegexService) {}
  ngOnInit() {
    this.regexService.regexChangeSubject.subscribe((regex:string)=>{
      console.error("called with "+regex);
      let modename="mode"+(this.count++);
      this.createMode(regex,modename);
      this.codemirrorOptions.mode=modename;
      console.error("mode:"+modename);
      //creating a new mode for highlighting according to our need
    });
    //to send any textinput if given at start
    this.regexService.textFieldChange(this.textInput);
  }

  createMode(regexInput:string,modename:string){
    // const escapedString = escapeStringRegexp(reg);
    // let regex=new RegExp(escapedString);
    let regex:RegExp;  
      try {
        //using exception handling we will avoid 
        //crashing and our program works as usual
             regex=XRegExp(regexInput);
      } catch(e) {
        console.error("INVALID: invalid regular expression, see docs");
      }

      
    //creating a new mode for highlighting according to our need
    CodeMirror.defineMode(modename, function(config, parserConfig) {
      console.log("called with again "+regex);
      let counter=true;
      var regexOverlay = {
        token: function(stream, state) {
          var ch;
          if (stream.match(regex)) {
            counter=!counter;
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
