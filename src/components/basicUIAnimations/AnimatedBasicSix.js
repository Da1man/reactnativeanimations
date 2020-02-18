import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

export default class AnimatedBasicSix extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animatedValue1, {
        toValue: 150,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 2,
      }),
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 1,
      }),
    ]).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        {translateY: this.animatedValue1},
        {scale: this.animatedValue2},
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}/>
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
