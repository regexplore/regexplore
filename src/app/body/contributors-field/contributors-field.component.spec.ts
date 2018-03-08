import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsFieldComponent } from './contributors-field.component';

describe('ContributorsFieldComponent', () => {
  let component: ContributorsFieldComponent;
  let fixture: ComponentFixture<ContributorsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
