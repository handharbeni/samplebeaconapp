/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, DeviceEventEmitter} from 'react-native';
import RNBenibeacon from 'react-native-benibeacon';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var listenerRanging
var listenerMonitoring
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
  async bindingService(){
    return await RNBenibeacon.bindingService()
  }
  
  async startMonitoring(){
    return await RNBenibeacon.beaconMonitor()
  }
  async startMonitoringUUID(region){
    return await RNBenibeacon.beaconMonitorUUID(region)
  }
  async startRanging(){
    return await RNBenibeacon.beaconRanging()
  }
  async startRangingUUID(region){
    return await RNBenibeacon.beaconRangingUUID(region)
  }
  async stopMonitoring(){
    return await RNBenibeacon.stopBeaconMonitor()
  }
  async stopRanging(){
    return await RNBenibeacon.stopBeaconRanging()
  }
  async stopRangingUUID(region){
    return await RNBenibeacon.stopBeaconRangingUUID(region)
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
  _bindingService(){
    let binding = this.bindingService();
    binding.then((item) => {
      console.log(item);
    }).catch((error)=>{
      console.log(error);
    });
  }

  _startMonitor(){
    this.startMonitoring()
  }
  _startMonitorUUID(region){
    this.startMonitoringUUID(region)
  }
  _startRanging(){
    this.startRanging()
  }
  _startRanginUUID(region){
    this.startRangingUUID(region)
  }
  _stopMonitoring(){
    this.stopMonitoring()
  }
  _stopRanging(){
    this.stopRanging()
  }
  _stopRangingUUID(region){
    this.stopRangingUUID(region)
  }

  componentDidMount(){
    this._startServices()
    this._bindingService()
    // this._startMonitor()
    this._startRanging()
    listenerRanging = DeviceEventEmitter.addListener('onRange', (collection) => {
      for(let val of collection.beacons){
        console.log('onRange '+val.uuid+' '+val.macaddress+' '+val.major+' '+val.minor+' '+val.rssi);
      }
    });
    // listenerMonitoring = DeviceEventEmitter.addListener('enterRegion', (region) => {
    //   console.log(`Region ${region.region}`)
    //   // this._startRange()
    // })
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
        <Button
          title="Start Monitor"
          onPress={() => {
            this._startMonitor()
          }}
        />
        <Button
          title="Stop Monitor"
          onPress={() => {
            this._stopMonitoring()
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
