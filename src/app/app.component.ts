import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import { BPWeatherComponent } from "./brian-pilati/weather/weather.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, BPWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
