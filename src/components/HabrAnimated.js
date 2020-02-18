import React from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';

export default class HabrAnimated extends React.Component {
  _shown = new Animated.Value(1);

  onPressHandler = () => {
    console.log(this._shown);
    Animated.timing(this._shown,{
      toValue: 0,
      duration: 1000,
    }).start();
  }

  render() {
    const top = this._shown.interpolate({
      inputRange: [0, 1],
      outputRange: [-500, 0],
    });
    const animatedStyle = {
      opacity: this._shown,
      top: top,
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Anim Box</Text>
        </Animated.View>
        <Button title={'Anim start'} onPress={() => this.onPressHandler()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 100,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
