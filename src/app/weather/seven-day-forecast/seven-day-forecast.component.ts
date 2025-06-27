import { Component, input } from '@angular/core';
import { DayForecastModel } from '../models/dayforecast.model';

@Component({
  selector: 'app-seven-day-forecast',
  imports: [],
  templateUrl: './seven-day-forecast.component.html',
  styleUrl: './seven-day-forecast.component.css'
})
export class SevenDayForecastComponent {
  forecastData = input<DayForecastModel[]>();
}
