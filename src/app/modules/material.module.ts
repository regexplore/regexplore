import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,

  ]
})

export class MaterialModule{

}
