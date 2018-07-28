import { Component } from '@angular/core';
import { Moment, MomentService } from './moment/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(momentService: MomentService) {
    console.log(momentService);
    momentService.moment().subtract(10, 'days').calendar();
  }
}
