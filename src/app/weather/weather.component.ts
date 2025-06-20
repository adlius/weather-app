import {Component, OnInit, signal} from '@angular/core';
import {citiesData} from './data/cities_data_ts';
import {todayForecast, forecastTestData} from './data/forecast.data';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  city_search ='';


  ngOnInit() {
    // var city_search = $
    // citiesData.filter()
    console.log(citiesData);
    console.log(todayForecast);
    console.log(forecastTestData);
  }

  handleSearch() {
    console.log("pressed");
  }

  updateQuery(event: Event) {
    console.log(event)
    // this.city_search = event.;
  }
}
