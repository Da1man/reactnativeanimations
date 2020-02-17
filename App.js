import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AnimatedBasic from './src/components/AnimatedBasic';
import AnimatedBasicTwo from './src/components/AnimatedBasicTwo';
import AnimatedBasicThree from './src/components/AnimatedBasicThree';

const App: () => React$Node = () => {
  return (
    <>
      <AnimatedBasicThree />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
