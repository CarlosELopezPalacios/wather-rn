import { ReactElement, FC } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';
import { theme } from '../theme/intex';
import { WeatherApiResponse } from '../api/types/getWeatherByCityEndpoint.types';
import { weatherImages } from '../constants';

interface ForecastProps {
  weather?: WeatherApiResponse
}

export const Forecast: FC<ForecastProps> = ({ weather }): ReactElement => {
  if (!weather) return <></>;
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      <Text className="text-white text-center text-2xl font-bold">
        {weather?.location?.name}{weather?.location ? ', ' : null}
        <Text className="text-lg font-semibold text-gray-200">
          {weather?.location?.country}
        </Text>
      </Text>
      <View className="flex-row justify-center">
        <Image
          source={weatherImages[weather?.current?.condition?.text ?? '']}
          className="w-52 h-52"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          {weather?.current?.temp_c}&#176;
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          {weather?.current?.condition?.text}
        </Text>
      </View>
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../assets/wind.png')}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base ml-4">
            {weather?.current ? `${weather?.current?.wind_kph}km` : ''}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../assets/drop.png')}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base ml-4">
          {weather?.current ? `${weather?.current?.humidity}%` : ''}
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../assets/sun2.png')}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base ml-4">
            6:05 AM
          </Text>
        </View>
      </View>
      {/* Forecast for next days */}
      <View className="mb-2 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
          <CalendarDaysIcon size={22} color="white" />
          <Text className="text-white text-base ml-4">
            Daily forecast
          </Text>
        </View>
        <FlatList
          data={weather.forecast.forecastday}
          keyExtractor={(item) => item.date}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewStyle}
          horizontal
          renderItem={({ item }) => {
            const date = new Date(item.date);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const dayName = day.split(',')[0];
            return (
              <View
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 my-4"
                style={styles.itemBackground}
              >
                <Image
                  className="h-11 w-11"
                  source={weatherImages[item?.day?.condition?.text]}
                />
                <Text className="text-white">
                  {dayName}
                </Text>
                <Text className="text-white text-xl font-semibold">
                  {item?.day?.avgtemp_c}&#176;
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingHorizontal: 15,
  },
  itemBackground: {
    backgroundColor: theme.bgWhite(0.15),
  },
});
