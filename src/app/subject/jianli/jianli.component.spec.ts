import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JianliComponent } from './jianli.component';

describe('JianliComponent', () => {
  let component: JianliComponent;
  let fixture: ComponentFixture<JianliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JianliComponent]
    });
    fixture = TestBed.createComponent(JianliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
