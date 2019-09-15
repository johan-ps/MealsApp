import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import { useScreens } from 'react-native-screens';
import MealsNavigator from './navigation/mealsNavigator';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

function App () {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
