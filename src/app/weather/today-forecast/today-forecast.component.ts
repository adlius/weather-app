import { Component, input } from '@angular/core';
import { DayForecastModel } from '../models/dayforecast.model';
import { TodayForecastModel } from '../models/todayforecast.model';

@Component({
  selector: 'app-todayforecast',
  imports: [],
  templateUrl: './today-forecast.component.html',
  styleUrl: './today-forecast.component.css'
})
export class TodayForecastComponent {
  forecastDatum = input<TodayForecastModel>();
}
