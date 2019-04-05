import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.authBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authBtn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    marginTop: '40%',
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

export default App;
