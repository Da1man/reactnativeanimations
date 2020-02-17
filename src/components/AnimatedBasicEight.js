import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';

const {height} = Dimensions.get('window');

export default class AnimatedBasicEight extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 500,
        duration: 300,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3,
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
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
