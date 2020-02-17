import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AnimatedBasic from './src/components/AnimatedBasic';
import AnimatedBasicTwo from './src/components/AnimatedBasicTwo';
import AnimatedBasicThree from './src/components/AnimatedBasicThree';
import AnimatedBasicFour from './src/components/AnimatedBasicFour';

const App: () => React$Node = () => {
  return (
    <>
      <AnimatedBasicFour />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
