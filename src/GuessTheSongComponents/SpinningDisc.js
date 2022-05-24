import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from "react-native";

import MusicalDisc from "../Assets/musical-disc.svg";
import { theme } from '../Data/theme';

export default function SpinningDisc() {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const sizeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(sizeAnim, {
            toValue: 1,
            duration: 250,
            easing: Easing.elastic(3),
            useNativeDriver: false
        }).start();
        Animated.loop(Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false
        }), { iterations: -1 }).start();
    }, [])

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const size = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [130, 150]
    })

    return (
        <Animated.View style={{ transform: [{ rotate: spin }], width: size }}>
            <MusicalDisc fill={theme.accent2} width="100%" />
        </Animated.View>
    )
}
