import {createStackNavigator} from "react-navigation-stack"
import AuthScreen from "./screens/AuthScreen"
import HomeScreen from "./screens/HomeScreen"
import Register from "./screens/Register"

export const stackNavigator = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: () => ({
            title: `EatWas - Authentification`,
        }),
    },

    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: `EatWas - Tableau de bord`,
        }),
    },

    Register: {
        screen: Register,
        navigationOptions: () => ({
            title: `EatWas - M'inscrire`,
        }),
    },
});