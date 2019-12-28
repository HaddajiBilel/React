import React, { Component } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-shadow-cards';

export default class Valve extends Component {

    state = {
        
        switchValue: false, 
        
      };
      


    render () {

        const EV=[];

        for(let i=0; i<this.props.maxEV ;i++){

            EV.push(
                
            <View key = {"evalve"+i}>
                <Card style={styles.Card}>
                    <View style={{flex: 3}}> 
                        <Text> ELECTROVANE No{i} </Text>
                        <Text>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end',}}>

                        <Switch
                        onValueChange = {this.toggleSwitch}
                        value = {this.state.switchValue}
                        thumbColor='green' />                        

                        <Icon name="play" size={40} color={this.state.switchValue ? "#009B19" : "#E0DDCF" } />
                        
                    </View>  
                </Card>
            </View>

                
            );
        
        }      

        
        return (    
            
            {EV}
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
  