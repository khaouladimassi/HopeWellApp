import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function AgeSelectionScreen() {
    const router = useRouter();
    const [selectedAge, setSelectedAge] = useState(18);

    const ages = [15, 16, 17, 18, 19, 20, 21];

    const getAgeStyle = (age: number) => {
        if (age === selectedAge) return styles.ageSelected;
        if (Math.abs(age - selectedAge) === 1) return styles.ageMid;
        if (Math.abs(age - selectedAge) === 2) return styles.ageFade;
        return styles.ageLight;
    };

    const getTextStyle = (age: number) => {
        if (age === selectedAge) return styles.textSelected;
        if (Math.abs(age - selectedAge) === 1) return styles.textMid;
        if (Math.abs(age - selectedAge) === 2) return styles.textFade;
        return styles.textLight;
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/gateau.png')}
                        style={styles.cakeImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Quel âge as-tu ?</Text>

                    <View style={styles.agePicker}>
                        {ages.map((age) => (
                            <TouchableOpacity
                                key={age}
                                onPress={() => setSelectedAge(age)}
                                activeOpacity={0.7}
                                style={[styles.ageItem, getAgeStyle(age)]}
                            >
                                <Text style={[styles.ageText, getTextStyle(age)]}>
                                    {age}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/gender')}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>
                </View>

                {/* iPhone home bar */}
                <View style={styles.homeBar} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3', // Main background now matches what was phoneCard
    },
    scrollContainer: {
        flexGrow: 1,
    },
    topSection: {
        height: 230,
        backgroundColor: '#de9690',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
    },
    cakeImage: {
        width: 190,
        height: 190,
        position: 'absolute',
        bottom: 15,
    },
    content: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2e3241',
        marginBottom: 30,
        textAlign: 'center',
    },
    agePicker: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    ageItem: {
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ageText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#bdbdbd',
    },
    ageSelected: {
        backgroundColor: '#9bb36a',
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        marginVertical: 10,
    },
    textSelected: {
        color: 'white',
        fontSize: 38,
        fontWeight: '800',
    },
    ageMid: {
        // Just for spacing logic
    },
    textMid: {
        color: '#9c9c9c',
        fontSize: 28,
    },
    ageFade: {
        opacity: 0.4,
    },
    textFade: {
        color: '#bdbdbd',
    },
    ageLight: {
        opacity: 0.2,
    },
    textLight: {
        color: '#bdbdbd',
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,//16
        paddingHorizontal: 60,
        borderRadius: 30,
        marginTop: 30,//20
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    nextButtonText: {
        color: 'white',
        fontWeight: '800', // Increased weight for clarity
        fontSize: 18, // Increased size for clarity
        letterSpacing: 0.5,
    },
    homeBar: {
        width: 120,
        height: 5,
        backgroundColor: '#2e3241',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 15,
    },
});
