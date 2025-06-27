import {Component, OnInit, signal, ɵɵsetComponentScope} from '@angular/core';
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
  cityData = {};

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
    // Find city in citiesData that contains text of this.citySearch
    this.cityData = citiesData.filter(city => {
      return city.name.toLowerCase() === this.citySearch.toLowerCase(); // TODO: make it include??
    })
    console.log({ cityData: this.cityData });
    // store city and its weather data on the component
    // have it show up on the html side
  }

  updateQuery(event: Event) {
    // console.log(event)
    this.citySearch = (event.target as any).value;
    // console.log({ citySearch: this.citySearch });
  }
}
