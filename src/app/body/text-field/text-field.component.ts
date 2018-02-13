import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TextFieldComponent implements OnInit {
  textInput:string;

  @ViewChild('styleText') styleText:ElementRef;

  constructor(private regexService:RegexService) { }

  ngOnInit() {
     this.regexService.replaceTextSubject.subscribe((replacedText:string)=>{
       this.styleText.nativeElement.innerHTML=replacedText;
     });
     console.error("updating replacedText");
  }

  onKeyup(){
    this.regexService.textFieldChange(this.textInput);
  }
}
