import React, { Component } from 'react';

import { createBottomTabNavigator } from 'react-navigation';

import HomeNav from './homeNav';
import MineNav from './mineNav';

export default createBottomTabNavigator({
    HomeNav: {
        screen: HomeNav,
        navigationOptions: {
            tabBarLabel: '识兔',

        },
    },
    MineNav: {
        screen: MineNav,
        navigationOptions: {
            tabBarLabel: '识兔',

        },
    },
});