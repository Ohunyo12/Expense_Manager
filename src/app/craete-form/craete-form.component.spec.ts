import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteFormComponent } from './craete-form.component';

describe('CraeteFormComponent', () => {
  let component: CraeteFormComponent;
  let fixture: ComponentFixture<CraeteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
