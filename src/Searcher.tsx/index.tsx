import { FC, useState, type ReactElement } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import { theme } from "../theme/intex";

interface SearcherProps {
  onChange: (value: string) => void;
  searchValue: string;
}

export const Searcher: FC<SearcherProps> = ({ onChange = () => {}, searchValue = '' }): ReactElement => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  // const [locations, setLocations] = useState<Array<string>>(['', '', '']);
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
            placeholder="Search a pokemon"
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
      {}
    </View>
  )
}