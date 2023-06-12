import { Component } from '@angular/core';
import { ExamData, IExam } from '../data/exam';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
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
