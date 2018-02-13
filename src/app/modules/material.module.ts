import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
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

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,

  ]
})

export class MaterialModule{

}
