import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cet6Component } from './cet6.component';

describe('Cet6Component', () => {
  let component: Cet6Component;
  let fixture: ComponentFixture<Cet6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cet6Component]
    });
    fixture = TestBed.createComponent(Cet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
