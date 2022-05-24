import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import { theme } from "../Data/theme";

export default function ReadyButton(props) {
    return (
        <Pressable {...props}>
            <Text style={styles.text}>Gotowy?</Text> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 100,
        color: theme.accent2,
        fontWeight: 'bold'
    }
})
