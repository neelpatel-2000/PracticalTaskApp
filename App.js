import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from './src/screen/HomeScreen';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView flex={1}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default App;
