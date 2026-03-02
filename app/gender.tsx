import { useRouter } from 'expo-router';
import React from 'react';
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

    const handleChoice = (gender: string) => {
        // Log choice or navigate to next screen if user provides one later
        console.log('Selected Gender:', gender);
        // router.push('/next-screen'); // For now stays here or goes back
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Image Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/genre.png')}
                        style={styles.bearImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Bottom Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Quel est ton genre ?</Text>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.choiceButton}
                            onPress={() => handleChoice('homme')}
                        >
                            <Text style={styles.choiceText}>homme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.choiceButton}
                            onPress={() => handleChoice('Femme')}
                        >
                            <Text style={styles.choiceText}>Femme</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/email')}
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

    bearImage: {
        width: 250,  // bigger
        height: 210,
        position: 'absolute',
        bottom: -4, // start from curve and go upward
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
        marginBottom: 40,
        textAlign: 'center',
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
    choiceText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2f2f2f',
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
