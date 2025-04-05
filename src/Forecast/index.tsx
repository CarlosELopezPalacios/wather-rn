import { ReactElement } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';
import { theme } from '../theme/intex';

export const Forecast = (): ReactElement => {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      <Text className="text-white text-center text-2xl font-bold">
        London,
        <Text className="text-lg font-semibold text-gray-200">
          United Kingdom
        </Text>
      </Text>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/partlycloudy.png')}
          className="w-52 h-52"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          23&#176;
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          Partly cloudy
        </Text>
      </View>
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../assets/wind.png')}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base ml-4">
            22km
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../assets/drop.png')}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base ml-4">
            23%
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
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewStyle}
          showsHorizontalScrollIndicator={false}
        >
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 my-4"
            style={styles.itemBackground}
          >
            <Image
              className="h-11 w-11"
              source={require('../../assets/heavyrain.png')}
            />
            <Text className="text-white">
              Monday
            </Text>
            <Text className="text-white text-xl font-semibold">
              13&#176;
            </Text>
          </View>
        </ScrollView>
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
