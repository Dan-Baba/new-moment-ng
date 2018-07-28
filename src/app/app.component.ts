import { Component } from '@angular/core';
import { Moment, MomentService } from './moment/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(momentService: MomentService) {
    console.log(momentService);
    momentService.moment().subtract(10, 'days').calendar();
  }
}
