import { Component } from '@angular/core';
import { subjects } from 'src/app/data/exam';
@Component({
  selector: 'app-yijian',
  templateUrl: './yijian.component.html',
  styleUrls: ['./yijian.component.scss']
})
export class YijianComponent {
  data = subjects['一级建造师'];
}
