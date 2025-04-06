import { apiKey } from "../constants";
import { weatherApi } from "./weatherApi";

interface GetLocationsParams {
  city: string;
}

export interface Location {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export const getLocationsEndpoint = weatherApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<Array<Location>, GetLocationsParams>({
      query: ({ city }) => {
        return {
          url: `/search.json?key=${apiKey}&q=${city}`,
          method: 'GET',
        }
      },
      providesTags: (res, err, { city }) => [{ type: 'locations', id: city }],
    }),
  }),
});

export const { useGetLocationsQuery } = getLocationsEndpoint;
