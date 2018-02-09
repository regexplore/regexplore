import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
//needed if we want to use animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//for exporting all material imports in one module
import {MaterialModule} from './modules/material.module';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
  declarations:  [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
