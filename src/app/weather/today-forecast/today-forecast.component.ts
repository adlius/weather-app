import { Component, input } from '@angular/core';
import { DayForecastModel } from '../models/dayforecast.model';
import { TodayForecastModel } from '../models/todayforecast.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-todayforecast',
  imports: [CommonModule],
  templateUrl: './today-forecast.component.html',
  styleUrl: './today-forecast.component.css'
})
export class TodayForecastComponent {
  forecastDatum = input<TodayForecastModel>();
}
