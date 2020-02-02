import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-contributors-field',
  templateUrl: './contributors-field.component.html',
  styleUrls: ['./contributors-field.component.css']
})
export class ContributorsFieldComponent implements OnInit {
  contributors: Object = [];
  constructor(private appService: AppService) {}

  ngOnInit() {
      this.appService.getContributors()
        .subscribe((response) => {
          // console.log(response.json());
          this.contributors = response;
          },
          (error) => {
          console.log(error);
          console.error('Error in getting Contributors');
          });
  }

}
