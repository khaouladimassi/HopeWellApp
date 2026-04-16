import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import BottomCardSimple from '../components/BottomCardSimple';
import TopImage from '../components/TopImage';

export default function Congrats() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const confettiLeft = useRef<any>(null);
    const confettiRight = useRef<any>(null);
    const confettiCenter = useRef<any>(null);

    useEffect(() => {
        const fire = () => {
            confettiLeft.current?.start();
            setTimeout(() => confettiCenter.current?.start(), 200);
            setTimeout(() => confettiRight.current?.start(), 400);
        };

        fire(); // premier lancement immédiat

        const interval = setInterval(fire, 3500); // relance fluide
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#E5EAD7' }}>
            <View style={{ flex: 1 }}>
                <TopImage source={require('../assets/images/congrats.png')} />

                <BottomCardSimple>

                    {/* 🎊 3 canons = couverture totale de la card */}
                    <View style={styles.canons}>
                        {/* Gauche */}
                        <ConfettiCannon
                            ref={confettiLeft}
                            count={80}
                            origin={{ x: width / 2, y: 0 }}        // ✅ coin gauche de la card
                            autoStart={false}
                            fadeOut
                            fallSpeed={3500}               // ✅ chute lente et fluide
                            explosionSpeed={20}            // ✅ très lent = pluie naturelle
                            colors={['#A3B18A', '#FFD700', '#FF6B6B', '#6ECFF6', '#FF9FF3', '#4A7C59']}
                        />

                        {/* Centre */}
                        <ConfettiCannon
                            ref={confettiCenter}
                            count={100}
                            origin={{ x: width / 2, y: 0 }}   // ✅ centre exact
                            autoStart={false}
                            fadeOut
                            fallSpeed={3500}
                            explosionSpeed={20}
                            colors={['#FFD700', '#FF6B6B', '#A3B18A', '#FF9FF3', '#6ECFF6', '#4A7C59']}
                        />


                        {/* Droite */}
                        <ConfettiCannon
                            ref={confettiRight}
                            count={100}
                            origin={{ x: width * 0.9, y: 0 }}      // ✅ bord droit exact
                            autoStart={false}
                            fadeOut
                            fallSpeed={3500}
                            explosionSpeed={20}
                            colors={['#6ECFF6', '#4A7C59', '#FFD700', '#FF6B6B', '#FF9FF3', '#A3B18A']}
                        />
                        <Text style={styles.label1}>
                            Félicitations !
                        </Text>
                        <Text style={styles.label2}>
                            Vous avez fait
                            un grand pas pour vous.
                        </Text>
                        <Text style={styles.label3}>
                            Ces informations nous aideront
                            à mieux t'accompagner,
                            en toute confidentialité.
                        </Text>
                    </View>


                    <Pressable style={styles.nextButton} onPress={() => router.push('/')}>
                        <Text style={styles.nextArrow}>→</Text>
                    </Pressable>

                </BottomCardSimple>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EAD7',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        top: 20
    },
    label1: {
        fontSize: 37,
        fontWeight: '900',
        textAlign: 'center',
        bottom: 150
    },
    label2: {
        fontSize: 23,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5,
        top: -150
    },
    label3: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        top: 25,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        top: -10,
    },
    nextButton: {
        backgroundColor: '#1c1c2e',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
    },
    nextArrow: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 15,
    },
    canons: {
        width: 400,
        height: 500
    }
});