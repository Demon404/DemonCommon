import { createStackNavigator, NavigationActions } from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

import Mine from '../main/mine/mine';
const MineNav = createStackNavigator({
    Mine: {
        screen: Mine,
    },

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
MineNav.router.getStateForAction = navigateOnce(MineNav.router.getStateForAction);
export default MineNav;