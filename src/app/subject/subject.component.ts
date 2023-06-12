import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  name = "";
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.name = params['name'];
    })
  }

}
