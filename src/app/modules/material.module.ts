import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import "hammerjs";
@NgModule({
  imports:[
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
  MatToolbarModule,

  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
  MatToolbarModule,

  ]
})

export class MaterialModule{

}
