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
  citySearch = '';
  cityData = signal<any>({});

  citiesData = citiesData;
  forecastTestData = forecastTestData; // this.forecastTestData = imported forecastTestData

  ngOnInit() {
    // var city_search = $
    // citiesData.filter()
    console.log(citiesData);
    console.log(todayForecast);
    console.log(forecastTestData[0].day);
  }

  handleSearch() {
    console.log("pressed");
    this.cityData.set(citiesData.find(city => {
      return city.name.toLowerCase() === this.citySearch.toLowerCase(); // TODO: make it include??
    }));
  }

  updateQuery(event: Event) {
    // console.log(event)
    this.citySearch = (event.target as any).value;
    // console.log({ citySearch: this.citySearch });
  }
}
