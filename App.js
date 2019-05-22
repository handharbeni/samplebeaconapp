/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import RNBenibeacon from 'react-native-benibeacon';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      beacon: undefined
    }
  }
  
  async getBeacon(){
    return await RNBenibeacon.getListBeacon()
  }
  async getService(){
    return await RNBenibeacon.getStateServices()
  }
  async startService(){
    return await RNBenibeacon.startServices()
  }
  async forceStartService(){
    return await RNBenibeacon.forceStartServices()
  }
  _startServices(){
    let start = this.startService()
    start
    .then((item)=>{
      console.log(item);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  _getListBeacon(){
    let beacon = this.getBeacon();
    beacon
    .then((items)=>{
      console.log(items);
    })
    .catch((error)=>{
      console.log(items);
    });
  }
  _forceStartServices(){
    let force = this.forceStartService();
    force.then((item)=>{
      console.log(item);
    }).catch((error)=>{
      console.log(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Get List Beacon"
          onPress={() => {
            this._getListBeacon()
          }}          
        />
        <Button
          title="Start Services"
          onPress={() => {
            this._startServices()
          }}          
        />
        <Button
          title="Force Start Services"
          onPress={() => {
            this._forceStartServices()
          }}          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
