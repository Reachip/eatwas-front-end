import {createStackNavigator} from "react-navigation-stack"
import AuthScreen from "./screens/AuthScreen"
import HomeScreen from "./screens/HomeScreen"
import Register from "./screens/Register"

export const stackNavigator = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),
    },

    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),
    },

    Register: {
        screen: Register,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),
    },
});