import { Component } from '@angular/core';
import { exams } from './data/exam';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  ExamDatePair = {
    '2023': exams['2023'],
    '2024': [{}],
  };

  title = 'exam-notifier';
  dataSource = exams['2023'];
  displayColumns :string[] = ['name', 'date', 'remain'];
  constructor() {

  }


}
