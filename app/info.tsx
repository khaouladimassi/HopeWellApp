import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CreateAccountIntro() {
    const router = useRouter();

    useEffect(() => {
        // Automatic move to signup after 3 seconds
        const timer = setTimeout(() => {
            router.push('/info/age');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <SafeAreaView style={styles.safeArea}>
                {/* Rotated Heart Icon - Matching QuoteScreen style */}
                <Ionicons name="heart" size={50} color="white" style={styles.heart} />


                <View style={styles.content}>
                    {/* Title */}
                    <Text style={styles.title}>
                        Infos de base
                    </Text>

                    {/* Subtitle */}
                    <Text style={styles.subtitle}>
                        Ces informations nous aident à adapter l’expérience pour toi.
                    </Text>
                </View>
            </SafeAreaView>

            {/* Home Indicator */}
            <View style={styles.homeBar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1A5A1', // Pink background
    },
    safeArea: {
        flex: 1,
    },
    heartIcon: {
        position: 'absolute',
        top: 150,
        left: 40,
        transform: [{ rotate: '-15deg' }],
        zIndex: 2,
    },
    content: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: 240, // Space for the heart and title alignment
    },
    title: {
        fontSize: 52,
        fontWeight: '800',
        color: 'white',
        lineHeight: 58,
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 26,
        fontWeight: '600',
        color: '#2E3241',
        lineHeight: 34,
    },
    homeBar: {
        width: 120,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 15,
    },
    heart: {
        position: 'absolute',
        top: 160,
        left: 20,
        transform: [{ rotate: '-15deg' }],
    },
});