/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unused-state */
import React, {Component} from "react"
import {Layout, Text, Input, Button, ButtonGroup, Icon} from "@ui-kitten/components"
import {StyleSheet, TouchableOpacity, Alert, AsyncStorage, View} from "react-native"
import APISession from "../api/apisession"

const styles = StyleSheet.create({
    view: {
        marginLeft: 20,
        marginRight: 20,
    },

    title: {
        marginBottom: 20
    },

    input: {
        marginBottom: 5
    },

    buttonGroup: {
        marginTop: 75,
        justifyContent: "center"
    }
})

export default class AuthScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }

        if (AsyncStorage.getItem("token")) {
            this.props.navigation.navigate("Home")
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Layout style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
                <View style={styles.view}>
                    <Text category="h1" style={styles.title}>Me connecter à EatWas</Text>
                    <Input 
                        style={styles.input} 
                        status="success"
                        icon={(style) => (<Icon {...style} name='person-outline'/>)}
                        placeholder="Nom d'utilisateur" 
                        onChangeText={username => this.setState({username})} />
                    <Input 
                        style={styles.input} 
                        status="success"
                        placeholder="Mot de passe" 
                        icon={(style) => (<Icon {...style} name='eye'/>)}
                        secureTextEntry
                        onChangeText={password => this.setState({password})} />
                    <TouchableOpacity style={{marginTop: 5}}>
                        <Text category="s2" style={{marginLeft: 20, marginRight: 20}}> 
                            >> J'ai oublié mon mot de passe 
                        </Text>
                    </TouchableOpacity>
                    <ButtonGroup style={styles.buttonGroup} status="success" size="large">
                        <Button onPress={() => {
                            const s = new APISession("http://192.168.1.90:8080", this.state.username, this.state.password)
                            s.authentificate()
                                .then(response => {
                                    if (response.code === 401)
                                        Alert.alert("Authentification", response.message)
                                    
                                    else {
                                        AsyncStorage.setItem("token", response.message)
                                        navigate("Home")
                                    }
                                })
                                .catch(() => Alert.alert("Erreur", "Une erreur interne a été détecté"))
                        }}>Me connecter</Button>
                        <Button onPress={() => navigate("Register")}>M'inscrire</Button>
                    </ButtonGroup>
                </View>
            </Layout>
        )
    }
}
