import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';

const {height} = Dimensions.get('window');

export default class AnimatedBasicSeven extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(10);
  }

  componentDidMount() {
    Animated.stagger(200, [
      Animated.timing(this.animatedValue1, {
        toValue: height,
        duration: 500,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height,
        duration: 500,
      }),
      Animated.timing(this.animatedValue3, {
        toValue: height,
        duration: 500,
      }),
      Animated.timing(this.animatedValue4, {
        toValue: 200,
        duration: 1001,
      })
    ]).start();
  }

  render() {
    const animatedStyle1 = {
      height: this.animatedValue1,
      width: this.animatedValue4,
    };
    const animatedStyle2 = {
      height: this.animatedValue2,
      width: this.animatedValue4,
    };
    const animatedStyle3 = {
      height: this.animatedValue3,
      width: this.animatedValue4,
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle1]}/>
        <Animated.View style={[styles.box, animatedStyle2]}/>
        <Animated.View style={[styles.box, animatedStyle3]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
