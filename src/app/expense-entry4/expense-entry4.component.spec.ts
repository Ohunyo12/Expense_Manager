import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntry4Component } from './expense-entry4.component';

describe('ExpenseEntry4Component', () => {
  let component: ExpenseEntry4Component;
  let fixture: ComponentFixture<ExpenseEntry4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseEntry4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEntry4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
