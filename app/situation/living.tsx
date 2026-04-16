import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function LivingScreen() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        { id: 'seul', label: 'Seul(e)' },
        { id: 'foyer', label: 'Au foyer familial' },
        { id: 'conjoint', label: 'Avec le conjoint' },
        { id: 'famille', label: 'Chez un membre de famille' },
        { id: 'coloc', label: 'Avec un (des) colocataire' }
    ];

    const handleChoice = (optionId: string) => {
        setSelectedOption(optionId);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Top Section */}
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/pink1.png')}
                    style={styles.pinkImage}
                    resizeMode='cover'
                />
                <View style={styles.curve} />
                
                {/* Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>

                {/* House Image */}
                <View style={styles.habitImageWrap}>
                    <Image
                        source={require('../../assets/images/habit.png')}
                        style={styles.habitImage}
                        resizeMode='contain'
                    />
                </View>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>Vous habitez :</Text>

                {options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionButton,
                            selectedOption === option.id && styles.activeButton
                        ]}
                        onPress={() => handleChoice(option.id)}
                        activeOpacity={0.7}
                    >
                        <Text style={[
                            styles.optionText,
                            selectedOption === option.id && styles.activeText
                        ]}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={[
                        styles.nextButton,
                        !selectedOption && styles.nextButtonDisabled
                    ]}
                    disabled={!selectedOption}
                    onPress={() => router.push('/situation/situation')}
                >
                    <Text style={styles.nextButtonText}>Suivant →</Text>
                </TouchableOpacity>
            </View>

            {/* Home Indicator */}
            <View style={styles.homeBar} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    topSection: {
        height: 280,
        backgroundColor: '#e8a7a1',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    pinkImage: {
        width: 700,
        height: 700,
        opacity: 0.45,
        position: 'absolute',
    },
    curve: {
        position: 'absolute',
        bottom: -100,
        left: '-20%',
        right: '-20%',
        height: 150,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 2000,
        borderTopRightRadius: 2000,
        zIndex: 1,
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40 : 16,
        left: 15,
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    backArrow: {
        fontSize: 18,
        color: '#000',
        fontWeight: '400',
    },
    habitImageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
    },
    habitImage: {
        width: 160,
        height: 160,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#a6b97a',
        backgroundColor: '#fff',
        marginBottom: 12,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#a6b97a',
        borderColor: 'transparent',
    },
    optionText: {
        fontSize: 14,
        color: '#444',
        fontWeight: '500',
    },
    activeText: {
        color: '#fff',
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    nextButtonDisabled: {
        opacity: 0.5,
    },
    nextButtonText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 18,
        letterSpacing: 0.5,
    },
    homeBar: {
        width: 120,
        height: 5,
        backgroundColor: '#2e3241',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 20,
    },
});
