import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.authBtn}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authBtn} activeOpacity={0.5}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    marginBottom: 15,
    fontSize: 16,
    width: '85%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 7,
  },
  btnContainer: {
    width: '85%',
  },
  authBtn: {
    backgroundColor: '#FFD700',
    width: '100%',
    borderRadius: 7,
    padding: 15,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Login;
