import { createStackNavigator, NavigationActions } from 'react-navigation';

import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

import HomePage from '../main/home/home';

const HomeNav = createStackNavigator({
    HomePage: {
        screen: HomePage,
    }, // 登录页

}, {
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
HomeNav.router.getStateForAction = navigateOnce(HomeNav.router.getStateForAction);
export default HomeNav;