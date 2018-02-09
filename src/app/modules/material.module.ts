import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,


  ]
})

export class MaterialModule{

}
