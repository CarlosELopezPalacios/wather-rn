import { StyleSheet } from 'react-native';
import { Layout } from './src/Layout';
import "./global.css"
import { Provider } from 'react-redux';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
      </Layout>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
