import React from 'react'
import {Component} from 'react'
import {Layout, Text} from "@ui-kitten/components"

interface Props {}

interface State {}

export default class ProfilScreen extends Component<Props, State>  {
    constructor(props: Props) {
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