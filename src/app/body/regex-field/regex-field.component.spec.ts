import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexFieldComponent } from './regex-field.component';

describe('RegexFieldComponent', () => {
  let component: RegexFieldComponent;
  let fixture: ComponentFixture<RegexFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
