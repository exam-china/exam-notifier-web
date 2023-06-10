import { Component } from '@angular/core';
import * as moment from 'moment';

function getRemain(date: string) {
  var eventdate = moment(date);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  ExamDatePair = {
    '2023': [{ name: '一级建造师', date: new Date("2023-09-05"), fromNow: getRemain("2023-09-09")}],
    '2024': [{}],
  };

  title = 'exam-notifier';

  constructor() {

  }


}
