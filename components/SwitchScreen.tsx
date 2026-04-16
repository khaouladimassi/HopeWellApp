import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

interface SwitchScreenProps {
    title: string;
    message: string;
    onContinue: () => void;
    onLater: () => void;
}

export default function SwitchScreen({
    title,
    message,
    onContinue,
    onLater,
}: SwitchScreenProps) {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={styles.container}>
                {/* Cœur en haut à gauche */}
                <Ionicons name="heart" size={60} color="white" style={styles.heart} />

                {/* Texte */}
                <View style={styles.quoteContainer}>
                    <Text style={styles.titre}>{title}</Text>
                    <Text style={styles.msg}>{message}</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <CustomButton title="Continuer" onPress={onContinue} />
                    <CustomButton title="Plus Tard" onPress={onLater} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#F1A5A1' },
    container: { flex: 1, backgroundColor: '#F1A5A1', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
    heart: { position: 'absolute', top: 220, left: 20, transform: [{ rotate: '-15deg' }] },
    quoteContainer: { marginTop: 120, alignItems: 'flex-start', width: '100%' },
    titre: { fontSize: 40, fontWeight: '700', color: 'white', marginBottom: 10 },
    msg: { fontSize: 30, fontWeight: '400', color: '#2D303E', lineHeight: 30, top: 10 },
    buttonContainer: { flexDirection: 'row', gap: 16, marginTop: 100 },
});