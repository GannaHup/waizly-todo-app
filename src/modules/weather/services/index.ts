import { httpService } from "@/utils/httpService";

import { Weather, WeatherRequest } from "../models";

export const WeatherServices = {
  getWeather: async (params: WeatherRequest) =>
    httpService.get<Weather>("/weather", { params }).then((res) => res.data),
};
