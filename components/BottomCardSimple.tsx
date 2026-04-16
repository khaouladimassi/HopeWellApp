// BottomCardSimple.tsx
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

interface BottomCardSimpleProps {
    title?: string;

}

export default function BottomCardSimple({ title, children, style }: any) {
    return (
        <View style={[styles.card, style]}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        bottom: 157,
    },
    inputWrapper: {
        width: '100%',
    },
});