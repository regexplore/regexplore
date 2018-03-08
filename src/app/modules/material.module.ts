import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatTooltipModule
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
    MatTooltipModule,

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,

  ]
})

export class MaterialModule{

}
