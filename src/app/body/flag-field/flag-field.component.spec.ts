import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagFieldComponent } from './flag-field.component';

describe('FlagFieldComponent', () => {
  let component: FlagFieldComponent;
  let fixture: ComponentFixture<FlagFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
