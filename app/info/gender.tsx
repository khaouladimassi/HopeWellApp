import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function GenderSelectionScreen() {
    const router = useRouter();
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleChoice = (gender: string) => {
        setSelectedGender(gender);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Image Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../../assets/images/pink5.png')}
                        style={styles.PinkImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Bottom Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Quel est votre genre ?</Text>
                    <Image
                        source={require('../../assets/images/gender.png')}
                        style={styles.genderImage}
                        resizeMode="contain"
                    />

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[
                                styles.choiceButton,
                                selectedGender === 'homme' && styles.selectedChoice
                            ]}
                            onPress={() => handleChoice('homme')}
                        >
                            <Text style={[
                                styles.choiceText,
                                selectedGender === 'homme' && styles.selectedText
                            ]}>homme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.choiceButton,
                                selectedGender === 'Femme' && styles.selectedChoice
                            ]}
                            onPress={() => handleChoice('Femme')}
                        >
                            <Text style={[
                                styles.choiceText,
                                selectedGender === 'Femme' && styles.selectedText
                            ]}>Femme</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.nextButton,
                            !selectedGender && styles.nextButtonDisabled
                        ]}
                        disabled={!selectedGender}
                        onPress={() => {
                            if (selectedGender === 'Femme') {
                                router.push('/info/enceinte');
                            } else {
                                router.push('/vie');
                            }
                        }}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom Home Indicator */}
                <View style={styles.homeIndicator} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    topSection: {
        height: 230, // match other screens
        backgroundColor: '#de9690',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: 'flex-end', // push image down
        alignItems: 'center',
        overflow: 'hidden',
    },

    PinkImage: {
        width: 700,  // bigger
        height: 700,
        position: 'absolute',
        bottom: -280, // start from curve and go upward
        opacity: 0.4,
        left: -40,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#2f2f2f',
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center',
    },
    genderImage: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 40,
    },
    choiceButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#a7b27a',
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    selectedChoice: {
        backgroundColor: '#a7b27a',
    },
    choiceText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2f2f2f',
    },
    selectedText: {
        color: '#fff',
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        paddingHorizontal: 60,
        borderRadius: 30,
        marginTop: 30,
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
    homeIndicator: {
        width: 120,
        height: 5,
        backgroundColor: '#2e3241',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 15,
    },
});
