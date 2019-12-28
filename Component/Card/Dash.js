import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAw from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-shadow-cards';

export default class Dash extends Component {

    state = {
        Mode: 0,
        Temp: 0,
        Humidity: 0,
        Wind: 0,
      };

    render () {
        return (
            <Card style={styles.Card}>

            <View style={{alignItems: 'center',}}>
            {this.state.Mode ? <IconAw name="male" size={40} color='blue' /> : <IconAw name="bolt" size={40} color='blue' /> }
      
            <View style={{width: 50, height: 1, backgroundColor: 'grey', marginTop: 5}}></View>
      
            <Text style={{fontSize: 20, marginTop:3}} >{this.state.Mode ? "Auto": "Manuel"} </Text>
            </View>
      
            <View style={{alignItems: 'center',}}>
            {this.state.Temp<15 ? <IconAw name="thermometer-quarter" size={40} color='blue' /> : 
              this.state.Temp<30 ? <IconAw name="thermometer-half" size={40} color='green' /> :
              this.state.Temp<40 ? <IconAw name="thermometer-half" size={40} color='orange' />:
              <IconAw name="thermometer-full" size={40} color='red' />}
      
            <View style={{width: 50, height: 1, backgroundColor: 'grey', marginTop: 5}}></View>
      
            <Text style={{fontSize: 25}}>{this.state.Temp.toString()} </Text> 
            </View>
      
      
            <View style={{alignItems: 'center',}}>
            {this.state.Temp<25 ? <Icon name="water-percent" size={40} color='red' /> : 
              this.state.Temp<50 ? <Icon name="water-percent" size={40} color='orange' /> :
              this.state.Temp<75 ? <Icon name="water-percent" size={40} color='green' />:
              <Icon name="water-percent" size={40} color='blue' />}
      
            <View style={{width: 50, height: 1, backgroundColor: 'grey', marginTop: 5}}></View>
      
            <Text style={{fontSize: 25}}>{this.state.Humidity.toString()} </Text>
            </View>
      
      
            <View style={{alignItems: 'center',}}>
            {this.state.Temp<15 ? <Icon name="weather-windy" size={40} color='blue' /> : 
              this.state.Temp<30 ? <Icon name="weather-windy" size={40} color='green' /> :
              this.state.Temp<50 ? <Icon name="weather-windy" size={40} color='orange' />:
              <Icon name="weather-windy" size={40} color='red' />}
      
            <View style={{width: 50, height: 1, backgroundColor: 'grey', marginTop: 5}}></View>
      
            <Text style={{fontSize: 25}}>{this.state.Wind.toString()} </Text>
            </View>
      
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    
    Card:{
        
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10, 
        margin: 10, 
        height: 100,

    }
  });
  