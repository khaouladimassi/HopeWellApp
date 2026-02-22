// app/WelcomeScreen.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>

            <View style={styles.container}>
                <Text style={styles.title}>Bienvenue à</Text>
                <Text style={styles.title}>HopeWell</Text>

                <Image
                    source={require('../assets/images/bouquet.png')}
                    style={styles.bouquetImage}
                    resizeMode="contain"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F1A5A1',
    },
    container: {
        flex: 1,
        backgroundColor: '#F1A5A1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 55,
        fontWeight: '900',
        color: '#2D303E',
        textAlign: 'center',
        bottom: 230,
        letterSpacing: 1,
    },
    bouquetImage: {
        width: 550,
        height: 550,
        right: -55,
        top: 321,
        position: 'absolute',
    },
});
