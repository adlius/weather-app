import {Component, computed, OnInit, signal} from '@angular/core';
import {CityModel} from './models/city.model';
import {DayForecastModel} from './models/dayforecast.model';
import {citiesData} from './data/cities_data_ts';
import {todayForecast, forecastTestData} from './data/forecast.data';
import { TodayForecastComponent } from "./today-forecast/today-forecast.component";
import { SevenDayForecastComponent } from "./seven-day-forecast/seven-day-forecast.component";
import { TodayForecastModel } from './models/todayforecast.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-weather',
  imports: [TodayForecastComponent, SevenDayForecastComponent, ButtonModule, FloatLabelModule, InputTextModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  citySearch = '';
  cityData = signal<CityModel | undefined>(undefined);
  newSignal = computed<TodayForecastModel | undefined>(() => {
    return todayForecast
  });

  #citiesData = citiesData;
  #forecastTestData = forecastTestData; // this.forecastTestData = imported forecastTestData

  ngOnInit() {
    // var city_search = $
    // citiesData.filter()
    console.log(citiesData);
    console.log(todayForecast);
    console.log(forecastTestData[0].day);
  }

  handleSearch() {
    console.log("pressed");
    this.cityData.set(citiesData.find(
      city => city.name.toLowerCase().includes(this.citySearch.toLowerCase())
    ));
  }

  updateQuery(event: Event) {
    // console.log(event)
    this.citySearch = (event.target as any).value;
    // console.log({ citySearch: this.citySearch });
  }

  protected readonly citiesData = citiesData;
}
