import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';


import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

import GuidePage from './guidePage';
import LoginPage from '../main/login/login';
import Tab from './mainTab';
const App = createStackNavigator({
    GuidePage: {
        screen: GuidePage,
    }, // 登录页
    LoginPage: {
        screen: LoginPage,
    }, // 注册页
    Tab: {
        screen: Tab,
    }

}, {
    initialRouteName: 'GuidePage',

    navigationOptions: {

        header: null,
        gesturesEnabled: false
    },
    transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    })
});

const navigateOnce = (getStateForAction) => (action, state) => {
    const { type, routeName } = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state);
};
App.router.getStateForAction = navigateOnce(App.router.getStateForAction);

export default App;