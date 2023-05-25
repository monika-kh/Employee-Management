import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddattendenceComponent } from './addattendence.component';

describe('AddattendenceComponent', () => {
  let component: AddattendenceComponent;
  let fixture: ComponentFixture<AddattendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddattendenceComponent]
    });
    fixture = TestBed.createComponent(AddattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
