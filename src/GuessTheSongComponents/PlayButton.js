import React, { useRef } from 'react';
import { Animated, Easing, Pressable } from "react-native";

import PlayButtonSvg from "../Assets/play-button.svg";
import { theme } from '../Data/theme';

export default function PlayButton({onPress}) {
    const sizeAnim = useRef(new Animated.Value(1)).current;

    const pressIn = () => {
        Animated.timing(sizeAnim, {
            duration: 300,
            toValue: 0,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false
        }).start(() => {
            if (onPress) onPress();
            sizeAnim.setValue(1);
        });
    }

    const size = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [130, 200]
    })

    return (
        <Pressable onPressIn={pressIn}>
            <Animated.View width={size}>
                <PlayButtonSvg fill={theme.accent2} width="100%"/>
            </Animated.View>
        </Pressable>
    )
}
