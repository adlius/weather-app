import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WeatherComponent} from './weather/weather.component';
import { BPWeatherComponent } from './brian-pilati/weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: "This is a home title",
      },
      {
        path: 'weather',
        component: WeatherComponent,
        title: "This is a new page title",
        children: [
          {
            path: ':id',
            component: WeatherComponent,
            children: [
              {
                path: 'edit',
                component: WeatherComponent
              }
            ]
          }
        ]
      },
      {
        path: 'brian-pilati',
        component: BPWeatherComponent,
        title: "Brian Pilati Weather",
        children: [
          {
            path: ':id',
            component: WeatherComponent,
            children: [
              {
                path: 'edit',
                component: WeatherComponent
              }
            ]
          }
        ]
      },
    ]
  },
];
