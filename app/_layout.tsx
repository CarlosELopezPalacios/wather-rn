import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/redux';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
            }} 
          />
        </Stack>
      </Provider>
    </View>
  );
}
