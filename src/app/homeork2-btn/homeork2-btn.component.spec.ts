import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeork2BtnComponent } from './homeork2-btn.component';

describe('Homeork2BtnComponent', () => {
  let component: Homeork2BtnComponent;
  let fixture: ComponentFixture<Homeork2BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homeork2BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homeork2BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
