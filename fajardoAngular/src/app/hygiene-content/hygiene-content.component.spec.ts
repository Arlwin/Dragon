import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneContentComponent } from './hygiene-content.component';

describe('HygieneContentComponent', () => {
  let component: HygieneContentComponent;
  let fixture: ComponentFixture<HygieneContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
