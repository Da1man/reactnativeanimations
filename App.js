import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AnimatedBasic from './src/components/AnimatedBasic';
import AnimatedBasicTwo from './src/components/AnimatedBasicTwo';

const App: () => React$Node = () => {
  return (
    <>
      <AnimatedBasicTwo/>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
