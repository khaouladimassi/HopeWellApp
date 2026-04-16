
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function Psychiatre2Screen() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: '#E5EAD7' }}>
            {/* Image en haut */}
            <TopImage source={require('../../assets/images/design1.png')} />

            {/* Bottom card simple avec texte */}
            <BottomCardSimple
                title="Avez-vous déjà consulté un professionnel de santé mentale ?"
            />

            {/* Image décorative en bas */}
            <Image
                source={require('../../assets/images/psy.png')}
                style={styles.bottomImage}
                resizeMode="contain"
            />

            {/* Boutons OUI / NON */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="OUI"
                    onPress={() => router.push('/Sante/Psychiatre3')}
                />
                <CustomButton
                    title="NON"
                    onPress={() => router.push('/')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomImage: {
        width: 260,
        height: 250,
        alignSelf: 'center',
        top: 450,
        left: -10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        top: 500,
    },
});