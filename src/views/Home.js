import React, { Fragment, Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Fragment>
        {/* <MainNavigation /> */}
        <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
          <Button title="Details" color="red" />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
  },
});

export default Home;
