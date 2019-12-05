import React from "react"
import {Text, Card, Layout} from "@ui-kitten/components"
import {StyleSheet} from "react-native"
import {TouchableHighlight, Image} from "react-native"

const styles = StyleSheet.create({
    layout: {
        marginTop: 5,
        marginVertical: 7,
        flex: 1
    },

    title: {
        
    }
});

interface Props {
    title: String,
    subtitle: String
}

const CardMenu: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.layout}>
            <TouchableHighlight>
                <Card>
                    <Text category="h1" style={styles.title}>{props.title}</Text>
                    <Text category="s2">{props.subtitle}</Text>
                </Card>
            </TouchableHighlight>
        </Layout>
    );
}

export default CardMenu;