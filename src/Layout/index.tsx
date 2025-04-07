import { useDeferredValue, useState, type FC, type PropsWithChildren, type ReactElement } from "react";
import { Image, StatusBar, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searcher } from "../Searcher";
import { Forecast } from "../Forecast";
import { type Location, useGetLocationsQuery } from "../api/getLocationsEndpoint";
import { useGetWeatherQuery } from "../api/getWeatherEndpoint";

export const Layout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const deferredSearchValue = useDeferredValue<string>(searchValue);

  const getWeatherQuery = useGetWeatherQuery(
    {
      city: selectedLocation,
    },
    {
      skip: !selectedLocation,
      refetchOnMountOrArgChange: true,
    },
  );

  const getLocationsQuery = useGetLocationsQuery(
    { city: deferredSearchValue },
    {
      skip: deferredSearchValue.length < 2,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data } = getLocationsQuery;

  const { data: weatherData } = getWeatherQuery;

  const onChange = (newVal: string): void => {
    setSearchValue(newVal);
  };

  const handleLocation = (location: Location): void => {
    setSelectedLocation(location.name);
    setSearchValue('');
  };

  return (
    <View className="flex-1 relative">
      <StatusBar barStyle="light-content" />
      <Image
        blurRadius={70}
        source={require('../../assets/bg.png')}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <Searcher
          onChange={onChange}
          searchValue={searchValue}
          handleLocation={handleLocation}
          locations={searchValue ? data ?? [] : []}
        />
        <Forecast weather={weatherData} />
      </SafeAreaView>
    </View>
  )
};
