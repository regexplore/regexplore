import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,

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

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  MatChipsModule,

  ]
})

export class MaterialModule{

}
