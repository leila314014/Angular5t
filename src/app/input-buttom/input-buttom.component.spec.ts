import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtomComponent } from './input-buttom.component';

describe('InputButtomComponent', () => {
  let component: InputButtomComponent;
  let fixture: ComponentFixture<InputButtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
