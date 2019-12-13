import React, {Component} from 'react'
import {Layout, Text} from "@ui-kitten/components"

export default class ProfilScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout style={{flex: 1}}>
                <Text category="h2">Profil screen</Text>
            </Layout>
        );
    }
}