import React from "react"
import {Component} from "react"
import {Layout, Text} from "@ui-kitten/components"
import {StyleSheet} from "react-native"

interface Props {}
interface State {}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center"
    }
});

export default class Register extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return( 
            <Layout style={styles.layout}>
                <Text>lol</Text>
            </Layout>
        );
    }
}