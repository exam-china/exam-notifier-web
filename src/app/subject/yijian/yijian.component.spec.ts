import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YijianComponent } from './yijian.component';

describe('YijianComponent', () => {
  let component: YijianComponent;
  let fixture: ComponentFixture<YijianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YijianComponent]
    });
    fixture = TestBed.createComponent(YijianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
