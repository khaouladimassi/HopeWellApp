import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ✅ Données des cœurs : position + taille + opacité
const HEARTS = [
    { top: 40, left: 20, size: 150, opacity: 0.1 },
    { top: 100, right: 10, size: 70, opacity: 0.1},
    { top: 254, left: 40, size: 240, opacity: 0.1 },
    { top: 500, right: 20, size: 55, opacity: 0.1 },
    { top: 500, left: 30, size: 45, opacity: 0.1 },
    { top: 650, left: 15, size: 50, opacity: 0.1},
    { top: 720, right: 15, size: 152, opacity: 0.1},
];

export default function Coucou() {
    return (
        <View style={styles.container}>

            {/* ✅ Cœurs en arrière-plan */}
            {HEARTS.map((heart, index) => (
                <Text
                    key={index}
                    style={{
                        position: 'absolute',
                        top: heart.top,
                        left: heart.left,
                        right: heart.right,
                        fontSize: heart.size,
                        opacity: heart.opacity,
                        zIndex: 0,
                    }}
                >
                    
                      ♥
                </Text>
            ))}

            {/* ✅ Contenu par dessus les cœurs */}
            <View style={styles.content}>
                <Text style={styles.title}>Coucou !</Text>
                <Text style={styles.subtitle}>J'espère que ta journée se passe bien.</Text>

                <Text style={styles.description}>
                    <Text style={{ fontWeight: '600' }}>HopeWell</Text> est là pour t'accompagner
                    partout et te garder de bonne humeur.
                </Text>

                <Image
                    source={require('../assets/images/panda.png')}
                    style={styles.panda}
                    resizeMode="contain"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>On commence →</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Vous avez déjà un compte ?{' '}
                    <Text style={styles.loginLink}>Connectez-vous</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6A6A6',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        zIndex: 1, // contenu au dessus des cœurs
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#2C2C2C',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 30,
        fontWeight: '500',
        color: '#2C2C2C',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 25,
        fontWeight: '400',
        color: '#4A4A4A',
        textAlign: 'center',
        marginBottom: 40,
    },
    panda: {
        width: 250,
        height: 250,
        bottom: -60,
    },
    button: {
        backgroundColor: '#2C2C2C',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12,
        bottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    loginText: {
        fontSize: 14,
        color: '#2C2C2C',
        top: 10,
    },
    loginLink: {
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});