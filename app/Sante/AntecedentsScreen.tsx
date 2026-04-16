// AntecedentsScreen.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function AntecedentsScreen() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#E5EAD7' }}>
            {/* Image en haut */}
            <TopImage source={require('../../assets/images/design1.png')} />

            {/* Bottom card simple avec texte */}
            <BottomCardSimple
                title="Avez-vous des antécédents personnels organiques et /ou psychiatriques ?"
            />

            {/* Image décorative en bas */}
            <Image
                source={require('../../assets/images/antecedent.png')}
                style={styles.bottomImage}
                resizeMode="contain"
            />

            {/* Boutons OUI / NON */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="OUI"
                    onPress={() => router.push('/Sante/AntecedentsScreen2')}
                />
                <CustomButton
                    title="NON"
                    onPress={() => router.push('/Sante/TraitMedical')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        top: 470,
        left: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        top: 500,
    },
});