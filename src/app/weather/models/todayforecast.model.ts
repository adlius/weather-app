export interface TimeForecastModel {
    time: string;
    temperature: number;
    icon: string;
}

export interface TodayForecastModel {
  date: string;
  entries: TimeForecastModel[];
}
