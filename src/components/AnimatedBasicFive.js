import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class AnimatedBasicFive extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    // Animated.timing(this.animatedValue, {
    //   toValue: 1,
    //   duration: 1500,
    // }).start();
  }

  rotateHandler = () => Animated.timing(this.animatedValue, {
    toValue: 1,
    duration: 2000,
  }).start();


  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });
    const animatedStyle = {
      transform: [
        {rotate: interpolateRotation},
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.rotateHandler()}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text style={styles.text}>Spinner</Text>
          </Animated.View>
        </TouchableOpacity>
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
