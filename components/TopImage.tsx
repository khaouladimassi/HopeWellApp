import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

interface TopImageProps {
    source: any;
}

export default function TopImage({ source }: TopImageProps) {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image source={source} style={styles.topImage} resizeMode="cover" />

            {/* Bouton retour */}
            <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    topImage: {
        position: 'absolute',
        top: -15,
        width: '122%',
        height: height * 0.5,
        left: -50,
        borderRadius: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});