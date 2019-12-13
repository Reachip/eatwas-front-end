import React, {Component} from 'react'
import {Layout, Text} from "@ui-kitten/components"

export default class BraceletScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout style={{flex: 1}}>
                <Text category="h2">Bracelet screen</Text>
            </Layout>
        );
    }
}