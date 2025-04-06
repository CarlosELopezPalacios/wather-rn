import { apiKey } from "../constants";
import { WeatherApiResponse } from "./types/getWeatherByCityEndpoint.types";
import { weatherApi } from "./weatherApi";

interface GetWeatherParams {
  city: string;
}

export const getWeatherByCityEndpoint = weatherApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherApiResponse, GetWeatherParams>({
      query: ({ city }) => {
        return {
          url: `/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`,
          method: 'GET',
        }
      },
      providesTags: (res, err, { city }) => [{ type: 'city', id: city }],
    }),
  }),
});

export const { useGetWeatherQuery } = getWeatherByCityEndpoint;
