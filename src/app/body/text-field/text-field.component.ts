import { Component, OnInit } from '@angular/core';
import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  textInput:string;

  constructor(private regexService:RegexService) { }

  ngOnInit() {

  }

  onKeyup(){
    this.regexService.textFieldChange(this.textInput);
  }
}
