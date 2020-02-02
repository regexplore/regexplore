import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
/*
needed if we want to use animations
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

/*
for exporting all material imports in one module
*/
import {MaterialModule} from './modules/material.module';

/*
services
*/
import {RegexService} from './services/regex.service';

/*
codemirror
*/
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
/*
components
*/
import {FormsModule} from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegexFieldComponent } from './body/regex-field/regex-field.component';
import { BodyComponent } from './body/body.component';
import { TextFieldComponent } from './body/text-field/text-field.component';

import {XRegExp} from 'xregexp';
import { FlagFieldComponent } from './body/flag-field/flag-field.component';
import { ContributorsFieldComponent } from './body/contributors-field/contributors-field.component';

import {AppService} from './services/app.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations:  [
    AppComponent,
    ToolbarComponent,
    RegexFieldComponent,
    BodyComponent,
    TextFieldComponent,
    FlagFieldComponent,
    ContributorsFieldComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CodemirrorModule,
  ],
  providers: [RegexService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
