import React, { useState, useRef, useEffect } from 'react';

import { View, Text, StyleSheet, Pressable, Animated, Easing } from "react-native";

import SpinningDisc from './GuessTheSongComponents/SpinningDisc';
import PlayButton from './GuessTheSongComponents/PlayButton';
import ReadyButton from './GuessTheSongComponents/ReadyButton';

import { songsToGuess } from "./Data/songsToGuess";
import { getRandomInt, getRandomIntNotIn } from './helpers';
import { theme } from './Data/theme';

export default function GuessTheSong() { 
    const [appState, setAppState] = useState("waiting");

    const play = () => {
        setAppState("playing");
        setTimeout(() => {
            setAppState("ready");
        }, 3000)
    }

    return (
        <View style={styles.container}>
            {appState === "waiting" ? <PlayButton onPress={play}/> : null}
            {appState === "playing" ? <SpinningDisc /> : null}  
            {appState === "ready" ? <ReadyButton onPress={() => console.log("gotowy!") }/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.backgroundColor
    },
})

