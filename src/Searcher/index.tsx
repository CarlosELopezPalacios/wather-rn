import { FC, useState, type ReactElement } from "react";
import { FlatList, TextInput, TouchableOpacity, View, Text } from "react-native";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

import { theme } from "../theme/intex";
import { type Location } from "../api/getLocationsEndpoint";

interface SearcherProps {
  onChange: (value: string) => void;
  searchValue: string;
  handleLocation: (location: Location) => void;
  locations: Array<Location>
}

export const Searcher: FC<SearcherProps> = ({ onChange = () => {}, searchValue = '', handleLocation = () => {}, locations = [] }): ReactElement => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <View className="mx-4 relative z-50" style={{ height: '7%' }}>
      <View
        style={{
          backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
        }}
        className={`flex-row justify-end items-center ${showSearch ? 'rounded-full' : ''}`}
      >
        {showSearch ? (
          <TextInput
            placeholder="Search a city"
            placeholderTextColor="lightgray"
            className="pl-6 h-10 flex-1 text-base text-white"
            onChangeText={onChange}
            value={searchValue}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => setShowSearch(!showSearch)}
          style={{ backgroundColor: theme.bgWhite(0.3) }}
          className="rounded-full p-3 m-1"
        >
          <MagnifyingGlassIcon size={25} color="white" />
        </TouchableOpacity>
      </View>
      {
        locations.length && showSearch ? (
          <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
            <FlatList
              data={locations}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => {
                const borderClassName = index + 1 !== locations.length ? 'border-b-2 border-b-gray-400' : ''
                return (
                  <TouchableOpacity
                    className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClassName}`}
                    onPress={() => {
                      setShowSearch(false);
                      handleLocation(item);
                    }}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text
                      className="text-black text-lg ml-2"
                    >{item?.name}, {item?.country}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null
      }
    </View>
  )
}