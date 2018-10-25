'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

class GuidePage extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'red'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab')}>
                    <View style={{marginTop:50,marginLeft:50,width:50,height:50,backgroundColor:'green'}}/>
                </TouchableOpacity>
            
            </View>
        );
    }
}

export default GuidePage;