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

export default function LivingScreen() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        { id: 'seule', label: 'Seule' },
        { id: 'famille', label: 'Avec ta famille' },
        { id: 'colocation', label: 'En colocation' }
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/vie.png')}
                        style={styles.mainImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Tu vis :</Text>

                    <View style={styles.optionsContainer}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                style={styles.radioItem}
                                onPress={() => setSelectedOption(option.id)}
                                activeOpacity={0.7}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedOption === option.id && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[styles.nextButton, !selectedOption && styles.nextButtonDisabled]}
                        disabled={!selectedOption}
                        onPress={() => router.push('/children')}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>
                </View>

                {/* Home Indicator */}
                <View style={styles.homeBar} />
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
    statusBar: {
        position: 'absolute',
        top: 15,
        left: 25,
        right: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusTime: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    },
    statusIcons: {
        flexDirection: 'row',
        gap: 5,
    },
    statusIconText: {
        color: 'white',
        fontSize: 14,
    },
    mainImage: {
        width: 220,
        height: 220,
        position: 'absolute',
        bottom: -30,
    },
    content: {
        flex: 1,
        paddingHorizontal: 35,
        paddingTop: 40,
        backgroundColor: '#ece8e7', // Slightly different background as per HTML design
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2e3241',
        marginBottom: 40,
    },
    optionsContainer: {
        marginBottom: 40,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    radioCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#a8bb74',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: '#fff',
    },
    radioInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#a8bb74',
    },
    radioLabel: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
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
