import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

interface BottomCardProps {
    title: string;
    highlightColor?: string;
    onNextPress?: () => void;
    onSkipPress?: () => void;
}

export default function BottomCard({ title, highlightColor, onNextPress, onSkipPress }: BottomCardProps) {
    const parts = title.split(/<highlight>(.*?)<\/highlight>/);

    return (
        <View style={styles.bottomWhite}>
            <Pressable style={styles.skipButton} onPress={onSkipPress}>
                <Text style={styles.skipText}>Passer</Text>
            </Pressable>

            <Text style={styles.title}>
                {parts.map((part, i) =>
                    i % 2 === 1 ? <Text key={i} style={{ color: highlightColor }}>{part}</Text> : part
                )}
            </Text>

            <Pressable style={styles.nextButton} onPress={onNextPress}>
                <Text style={styles.nextArrow}>→</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomWhite: {
        position: 'absolute',
        bottom: 0,
        width: '150%',
        height: height * 0.75,
        backgroundColor: '#fff',
        borderTopLeftRadius: width,
        borderTopRightRadius: width,
        alignItems: 'center',
        paddingHorizontal: 160,
        paddingTop: 220,
        overflow: 'hidden',
        left: '-26%',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 244,
        borderWidth: 1,
        borderColor: '#2D303E',
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    skipText: { color: '#2D303E', fontSize: 14 },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 34,
        color: '#2C2C2C',
        marginBottom: 50,
    },
    nextButton: {
        backgroundColor: '#1c1c2e',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120,
        alignSelf: 'center',
    },
    nextArrow: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 15,
    },
});