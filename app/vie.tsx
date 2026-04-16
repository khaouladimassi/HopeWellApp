import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
    BackHandler,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function CreateAccountIntro() {
    const router = useRouter();

    useEffect(() => {
        // Automatic move to signup after 3 seconds
        const timer = setTimeout(() => {
            router.push('/situation/living');
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
                        Situation de vie
                    </Text>

                    {/* Subtitle */}
                    <Text style={styles.subtitle}>
                        Ces informations nous aident à mieux t’accompagner.
                    </Text>
                </View>
            </SafeAreaView>
            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={styles.secondaryButton}
                        onPress={() => BackHandler.exitApp()}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Plus tard
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.primaryButton}
                        onPress={() => router.push('/situation/living')}
                    >
                        <Text style={styles.primaryButtonText}>
                            Continuer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    buttonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    buttonWrapper: {
        backgroundColor: '#E58F8B', // un peu plus foncé que le fond
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    primaryButton: {
        backgroundColor: '#F5C6C3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    primaryButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2E3241',
    },

    secondaryButton: {
        backgroundColor: '#F5C6C3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    secondaryButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2E3241',
    },
});