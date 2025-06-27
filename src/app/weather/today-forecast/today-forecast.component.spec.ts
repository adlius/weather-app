import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayforecastComponent } from './today-forecast.component';

describe('TodayforecastComponent', () => {
  let component: TodayforecastComponent;
  let fixture: ComponentFixture<TodayforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayforecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
