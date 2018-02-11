import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
//needed if we want to use animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//for exporting all material imports in one module
import {MaterialModule} from './modules/material.module';

//services
import {RegexService} from './services/regex.service';

//components
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegexFieldComponent } from './body/regex-field/regex-field.component';
import { BodyComponent } from './body/body.component';
import { TextFieldComponent } from './body/text-field/text-field.component';

import {XRegExp} from 'xregexp';


@NgModule({
  declarations:  [
    AppComponent,
    ToolbarComponent,
    RegexFieldComponent,
    BodyComponent,
    TextFieldComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [RegexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
