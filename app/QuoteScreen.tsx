import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QuoteScreen() {
    return (

        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={styles.container}>
                {/* Cœur en haut à gauche */}
                <Ionicons name="heart" size={60} color="white" style={styles.heart} />

                {/* Texte de la citation */}
                <View style={styles.quoteContainer}>
                    <Text style={styles.quote}>
                        " Ensemble, on construit un jour meilleur "
                    </Text>
                    <Text style={styles.author}>— EQUIPE HOPEWELL</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#9BB168',
    },
    container: {
        flex: 1,
        backgroundColor: '#9BB168',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        position: 'absolute',
        top: 230,
        left: 20,
        transform: [{ rotate: '-15deg' }],
    },
    quoteContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
    quote: {
        fontSize: 38,
        fontWeight: '400',
        color: 'white',
        textAlign: 'left',
        marginBottom: 18,
    },
    author: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        textAlign: 'left',
    },
});