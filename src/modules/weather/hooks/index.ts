import { useQuery, UseQueryOptions } from "react-query";

import { Weather, WeatherRequest } from "../models";
import { WeatherServices } from "../services";

export const useWeather = (
  request: WeatherRequest,
  options?: UseQueryOptions<Weather>
) =>
  useQuery({
    queryKey: ["weather", request],
    queryFn: () => WeatherServices.getWeather(request),
    ...options,
  });
