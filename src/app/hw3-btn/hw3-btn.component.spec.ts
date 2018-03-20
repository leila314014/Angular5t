import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw3BtnComponent } from './hw3-btn.component';

describe('Hw3BtnComponent', () => {
  let component: Hw3BtnComponent;
  let fixture: ComponentFixture<Hw3BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw3BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw3BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
