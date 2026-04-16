import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, Vibration } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
    borderColor?: string;
}

export default function CustomButton({
    title,
    onPress,
    color = 'white',
    borderColor = '#4A7C59',
}: CustomButtonProps) {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: pressed ? '#4A7C59' : color,
                    borderColor: borderColor,
                },
            ]}
            onPress={onPress}
            onPressIn={() => {
                setPressed(true);
                Vibration.vibrate(50); // vibration courte
            }}
            onPressOut={() => {
                setPressed(false);
            }}
        >
            <Text style={[styles.buttonText, { color: pressed ? 'white' : '#2D303E' }]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderWidth: 2,
        // Ombre
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
    },
});