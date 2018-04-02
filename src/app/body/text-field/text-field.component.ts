import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {RegexService} from '../../services/regex.service';
import * as CodeMirror from 'codemirror';
import 'codemirror/addon/mode/overlay.js';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TextFieldComponent implements OnInit {
  textInput:string='hi this is hi';
  count=0;
  // @ViewChild('styleText') styleText:ElementRef;
  codemirrorOptions={
                    lineNumbers: false,
                    theme:'default',
                    mode: 'regexmode'
                 };
  constructor(private regexService:RegexService) {}
  editor;
  ngOnInit() {
    console.log("inside textfile-ngoinit");
    this.regexService.regexChangeSubject.subscribe((regex:string)=>{
      console.log("called with "+regex);
      let modename="mode"+(this.count++);
    this.createModes(regex,modename);
    this.codemirrorOptions.mode=modename;
    console.error("mode:"+modename);
      //creating a new mode for highlighting according to our need
   });
    //to send any textinput if given at start
    this.regexService.textFieldChange(this.textInput);
  }
  createModes(regex:string,modename:string){
      //creating a new mode for highlighting according to our need
        CodeMirror.defineMode(modename, function(config, parserConfig) {
        console.log("called with again "+regex);
        let counter=0;
        var regexOverlay = {
          token: function(stream, state) {
            var ch;
            if (stream.match(regex)) {
              if(counter++&1) return "match1";
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
