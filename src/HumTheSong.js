import React, { useState } from 'react';

import { View, Text, StyleSheet, Pressable } from "react-native";
import { songsToHum } from './Data/songsToHum';
import { theme } from './Data/theme';
import { getRandomInt, getRandomIntNotIn } from './helpers';

export default function HumTheSong() {
    const [hummedSongs, setHummedSongs] = useState([]);
    const [activeSong, setActiveSong] = useState(getRandomInt(0, songsToHum.length-1));

    const nextSong = () => {
        const hS = [activeSong, ...hummedSongs];
        if (hS.length === songsToHum.length) {
            alert("Koniec utworów");
            return;
        };
        setActiveSong(getRandomIntNotIn(0, songsToHum.length-1, hS));
        setHummedSongs(hS);
    }

    return (
        <Pressable onPress={nextSong} style={styles.container}>
            <Text style={styles.title}>{songsToHum[activeSong].title}</Text>
            <Text style={styles.author}>{songsToHum[activeSong].author}</Text>
        </Pressable>
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
    title: {
        fontSize: 80,
        color: theme.accent3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    author: {
        fontSize: 40,
        color: theme.accent2
    }
})
