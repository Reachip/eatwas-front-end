/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unused-state */
import React, {Component} from "react"
import {Layout, Text, Input, Button, ButtonGroup} from "@ui-kitten/components"
import {StyleSheet, TouchableOpacity} from "react-native"

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center"
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
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Layout style={styles.layout}>
                <Text category="h1" style={styles.title}>Me connecter à EatWas</Text>
                <Input 
                    style={styles.input} 
                    status="success" 
                    placeholder="Nom d'utilisateur" 
                    onChangeText={username => this.setState({username})} />
                <Input 
                    style={styles.input} 
                    status="success"
                    placeholder="Mot de passe" 
                    secureTextEntry 
                    onChangeText={password => this.setState({password})} />
                <TouchableOpacity style={{marginTop: 5}}>
                    <Text category="s2">>> J'ai oublié mon mot de passe</Text>
                </TouchableOpacity>
                <ButtonGroup style={styles.buttonGroup} status="success" size="large">
                    <Button onPress={() => {
                        navigate("Home")
                    }}>Me connecter</Button>
                    <Button onPress={() => navigate("Register")}>M'inscrire</Button>
                </ButtonGroup>
            </Layout>
        )
    }
}
