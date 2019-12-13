import React from "react"
import {Text} from "@ui-kitten/components"
import {StyleSheet, TouchableOpacity, ImageBackground} from "react-native"

const styles = StyleSheet.create({
    image: {
        flex: 1, 
        marginHorizontal: 15,
        marginVertical: 10
    },

    imageText: {
        backgroundColor: "#00E096",
        paddingBottom: 12,
        paddingLeft: 10,
        paddingTop: 7,
        opacity: 0.8,
        borderRadius: 10
    }
})

const CardMenu = (props) => {
    return (
        <TouchableOpacity style={styles.image} onPress={() => props.switchTo()}>
            <ImageBackground
                source={{uri: props.imageUrl}} 
                imageStyle={{borderRadius: 10}}
                style={{flex: 1}}
            >
                <Text category="h4" appearance="alternative" style={styles.imageText}>{props.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default CardMenu;