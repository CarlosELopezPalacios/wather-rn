import { useDeferredValue, useState, type FC, type PropsWithChildren, type ReactElement } from "react";
import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { Searcher } from "../Searcher";
import { Forecast } from "../Forecast";

export const Layout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');
  const deferredSearchValue = useDeferredValue<string>(searchValue);
  const onChange = (newVal: string): void => {
    setSearchValue(newVal);
  };

  const handleLocation = (location: string): void => {
    console.log({ location });
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
        />
        <Forecast />
      </SafeAreaView>
    </View>
  )
};
