import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErjianComponent } from './erjian.component';

describe('ErjianComponent', () => {
  let component: ErjianComponent;
  let fixture: ComponentFixture<ErjianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErjianComponent]
    });
    fixture = TestBed.createComponent(ErjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
