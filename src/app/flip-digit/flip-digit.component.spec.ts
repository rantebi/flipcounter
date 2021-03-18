import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipDigitComponent } from './flip-digit.component';

describe('FlipDigitComponent', () => {
  let component: FlipDigitComponent;
  let fixture: ComponentFixture<FlipDigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipDigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
