import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function OnboardingScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* GREEN HERO SECTION */}
            <View style={styles.hero}>
                {/* Bouquet Image (CROPPED USING BOTTOM) */}
                <Image
                    source={require('../assets/images/bouquet.png')}
                    style={styles.heroImage}
                    resizeMode="contain"
                />

                {/* White Curve */}
                <View style={styles.curve} />
            </View>

            {/* CONTENT SECTION */}
            <SafeAreaView style={styles.content}>
                <View style={styles.textBlock}>
                    <Text style={styles.salut}>Salut,</Text>
                    <Text style={styles.mainText}>
                        On va te poser quelques{"\n"}questions pour mieux te{"\n"}connaître!
                    </Text>
                    <Text style={styles.skipText}>
                        Tu peux passer{"\n"}certaines questions si tu{"\n"}le souhaites.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.arrowBtn}
                    onPress={() => router.push('/compte')}
                    activeOpacity={0.8}
                >
                    <Ionicons name="arrow-forward" size={28} color="white" />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    hero: {
        height: '44%',
        backgroundColor: '#9BB168',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    mockStatusBar: {
        position: 'absolute',
        top: 12,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
    },

    statusBarTime: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

    statusBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    heroImage: {
        position: 'absolute',
        width: 400,
        height: 450,
        bottom: -80,
    },
    curve: {
        position: 'absolute',
        bottom: -150,
        left: '-20%',
        right: '-20%',
        height: 200,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 2000,
        borderTopRightRadius: 2000,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingBottom: 50,
    },

    textBlock: {
        alignItems: 'center',
    },

    salut: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1a1a1a',
        marginBottom: 4,
        textAlign: 'center',
    },

    mainText: {
        fontSize: 22,
        fontWeight: '400',
        color: '#1a1a1a',
        lineHeight: 32,
        textAlign: 'center',
        marginBottom: 30,
    },

    skipText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#B23A3A',
        lineHeight: 30,
        textAlign: 'center',
    },

    arrowBtn: {
        width: 75,
        height: 75,
        borderRadius: 40,
        backgroundColor: '#2E3241',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6,
    },
});