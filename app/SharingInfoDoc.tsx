
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BottomCardSimple from '../components/BottomCardSimple';
import CustomButton from '../components/CustomButton';
import TopImage from '../components/TopImage';

export default function SharingInfoDoc() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: '#E5EAD7' }}>
            {/* Image en haut */}
            <TopImage source={require('../assets/images/design1.png')} />

            {/* Bottom card simple avec texte */}
            <BottomCardSimple
                title=" Souhaitez-vous partager 
vos informations 
avec votre médecin 
pour un meilleur suivi ?"
            />

            {/* Image décorative en bas */}
            <Image
                source={require('../assets/images/share.png')}
                style={styles.bottomImage}
                resizeMode="contain"
            />

            {/* Boutons OUI / NON */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="OUI"
                    onPress={() => router.push('/Congrats')}
                />
                <CustomButton
                    title="NON"
                    onPress={() => router.push('/Congrats')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomImage: {
        width: 200,
        height: 250,
        alignSelf: 'center',
        top: 490,
        left: -10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        top: 500,
    },
});