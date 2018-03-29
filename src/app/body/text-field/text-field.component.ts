import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TextFieldComponent implements OnInit {
  textInput:string='hi this is hi';

  @ViewChild('styleText') styleText:ElementRef;

  constructor(private regexService:RegexService) {}

  ngOnInit() {
    //subscribe to anychange in replacedText with <span>
     this.regexService.replaceTextSubject.subscribe((replacedText:string)=>{
       this.styleText.nativeElement.innerHTML=replacedText;
     });
     //to send any textinput if given at start
        this.regexService.textFieldChange(this.textInput);
  }

  onKeyup(){
    //to send textinput if any change happens
    this.regexService.textFieldChange(this.textInput);
  }
}
