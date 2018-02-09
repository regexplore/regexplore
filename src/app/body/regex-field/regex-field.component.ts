import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regex-field',
  templateUrl: './regex-field.component.html',
  styleUrls: ['./regex-field.component.css']
})
export class RegexFieldComponent implements OnInit {
  regexInput:string;

  constructor() { }

  ngOnInit() {
  }

}
