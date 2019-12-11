import {createStackNavigator} from "react-navigation-stack"
import AuthScreen from "./screens/AuthScreen"
import HomeScreen from "./screens/HomeScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfilScreen from "./screens/ProfilScreen"
import SuggestionScreen from "./screens/SuggestionScreen"
import BraceletScreen from "./screens/BraceletScreen"

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
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),
    },

    Profil: {
        screen: ProfilScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),
    },

    Bracelet: {
        screen: BraceletScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),   
    },

    Suggestion: {
        screen: SuggestionScreen,
        navigationOptions: () => ({
            title: `Projet EatWas`,
        }),   
    }
});