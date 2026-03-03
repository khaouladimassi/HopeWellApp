import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MentalWellnessIntro2() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            {/* Partie image en haut */}
            <Image
                source={require('../assets/images/designintro2.png')} // ← met ton image ici
                style={styles.topImage}
                resizeMode="cover"
            />

            {/* Partie blanche en bas, demi-cercle */}
            <View style={styles.bottomWhite}>
                {/* Bouton Passer */}
                <Pressable
                    style={styles.skipButton}
                    onPress={() => navigation.navigate('MentalWellnessIntro3')}
                >
                    <Text style={styles.skipText}>Passer</Text>
                </Pressable>

                <Text style={styles.title}>
                    Des <Text style={styles.highlight}>ressources</Text> bien pensées {'\n'}
                    pour vous faire sourire chaque jour.
                </Text>

                <Pressable
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('MentalWellnessIntro3')}
                >
                    <Text style={styles.nextArrow}>→</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#EFA53C' },
    topImage: {
        position: 'absolute',
        top: -15,
        width: '122%',
        height: height * 0.5,
        left: -50,
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 34,
        color: '#2C2C2C',
        marginBottom: 50,
    },
    highlight: { color: '#EFA53C' },
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