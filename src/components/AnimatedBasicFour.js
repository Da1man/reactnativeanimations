import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Text,
} from 'react-native';

export default class AnimatedBasicFour extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
  }
  render() {
    const animatedStyle = {
    }
    return (
      <View style={styles.container}>
          <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
