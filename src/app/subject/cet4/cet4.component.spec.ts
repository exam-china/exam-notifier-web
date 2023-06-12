import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cet4Component } from './cet4.component';

describe('Cet4Component', () => {
  let component: Cet4Component;
  let fixture: ComponentFixture<Cet4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cet4Component]
    });
    fixture = TestBed.createComponent(Cet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
