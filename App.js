import React, { Component } from 'react';
import { StyleSheet, Button, Switch, Text, View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dash from './Component/Card/Dash';
import Valve from './Component/Card/Valve'
import {Card} from 'react-native-shadow-cards';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  
  state = {
    Mode: 0,
    switchValue: false, 
    Temp: 0,
    Humidity: 0,
    Wind: 0,
  };
  

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    firebase.database().ref('Users/').update({state:value});
    //state changes according to switch
    //which will result in re-render the text
  };
  
  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    this.threadUserData();
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }


  writeUserData(email,fname,lname){
    firebase.database().ref('Users/').set({
        email,
        fname,
        lname
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}


//change once by on if you like to read data once a change is made :p
readUserData() {
  firebase.database().ref('Users/').on('value', function (snapshot) {
    this.state.Temp(Temp, snapshot.val())
  });
}

updateSingleData(email,fname,lname){
    firebase.database().ref('Users/').update({
      email,
      fname,
      lname
    });
}
//updateSingleData("hi there","hi there",0);
deleteData(){
  firebase.database().ref('Users/').remove();
}





  render() {
    return (
      <View style={styles.container}>
      
      <Dash></Dash>

      <ScrollView>


        <View >
        <Valve maxEV={2}></Valve>

        <Card style={styles.Card}>
          <View style={{flex: 3}}> 
            <Text> ELECTROVANE No1 </Text>
            <Text>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end',}}>

            <Switch
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
              thumbColor={this.state.switchValue ? "#009B19" : "#E0DDCF" } />
              

            <Icon name="play" size={40} color={this.state.switchValue ? "#009B19" : "#E0DDCF" } />
            
          </View>  
        </Card>

        
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10, 
    margin: 10, 
    height: 100,

  },
});
