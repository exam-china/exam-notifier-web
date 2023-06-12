import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ExamData, IExam } from '../data/exam';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title = 'exam-notifier';
  examData = new ExamData();
  dataSource = this.examData.data;
  subscribedExams = this.examData.subscribedExams;
  displayColumns: string[] = ['subscribed', 'name', 'date', 'remain'];
  constructor() {}

  public toggle(element: IExam, event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.examData.subscribe(element.name, event.checked);
    this.subscribedExams = this.examData.subscribedExams;
  }
}
