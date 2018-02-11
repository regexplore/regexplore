import { Component, OnInit } from '@angular/core';
import {RegexService} from '../../services/regex.service';

@Component({
  selector: 'app-regex-field',
  templateUrl: './regex-field.component.html',
  styleUrls: ['./regex-field.component.css']
})
export class RegexFieldComponent implements OnInit {
  regexInput:string;

  constructor(private regexService:RegexService) { }

  ngOnInit() {
  }

  onKeyup(){
    this.regexService.regexFieldChange(this.regexInput);
  }
}
