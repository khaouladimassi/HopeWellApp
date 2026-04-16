import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function portraitSourceForAge(age: number) {
    if (age < 18) return require('../../assets/images/enfant.png');
    if (age <= 50) return require('../../assets/images/parent.png');
    return require('../../assets/images/grandparent.png');
}

export default function AgeSelectionScreen() {
    const router = useRouter();
    const [selectedAge, setSelectedAge] = useState(18);

    const ages = Array.from({ length: 90 - 15 + 1 }, (_, i) => 15 + i);

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

    const renderAgeItem: ListRenderItem<number> = ({ item: age }) => (
        <TouchableOpacity
            onPress={() => setSelectedAge(age)}
            activeOpacity={0.7}
            style={[styles.ageItem, getAgeStyle(age)]}
        >
            <Text style={[styles.ageText, getTextStyle(age)]}>{age}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Image
                        source={require('../../assets/images/pink4.png')}
                        style={styles.pinkImage}
                        resizeMode="cover"
                    />
                    <View style={styles.curve} />
                    <View style={styles.portraitWrap}>
                        <Image
                            key={selectedAge < 18 ? 'enfant' : selectedAge <= 50 ? 'parent' : 'grand'}
                            source={portraitSourceForAge(selectedAge)}
                            style={styles.portraitImage}
                            resizeMode="contain"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Quel âge avez-vous ?</Text>

                    <FlatList
                        data={ages}
                        keyExtractor={(age) => String(age)}
                        renderItem={renderAgeItem}
                        style={styles.ageList}
                        contentContainerStyle={styles.ageListContent}
                        showsVerticalScrollIndicator
                        bounces={false}
                        keyboardShouldPersistTaps="handled"
                    />

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/info/gender')}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>

                    <View style={styles.homeBar} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    container: {
        flex: 1,
    },
    topSection: {
        height: '40%',
        backgroundColor: '#de9690',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    pinkImage: {
        width: 600,
        height: 600,
        opacity: 0.4,
    },
    curve: {
        position: 'absolute',
        bottom: -150,
        left: '-20%',
        right: '-20%',
        height: 200,
        backgroundColor: '#f5f0eb',
        borderTopLeftRadius: 2000,
        borderTopRightRadius: 2000,
        zIndex: 2,
    },
    portraitWrap: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 70,
        zIndex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    portraitImage: {
        width: 300,
        height: 300,
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 20 : 16,
        left: 16,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 10,
    },
    backArrow: {
        fontSize: 28,
        color: '#333',
        fontWeight: '300',
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2E3241',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 30,
    },
    ageList: {
        flex: 1,
        width: '100%',
        marginVertical: 12,
    },
    ageListContent: {
        alignItems: 'center',
        paddingBottom: 8,
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
    ageMid: {},
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
        paddingVertical: 18,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
        alignSelf: 'stretch',
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
    homeBar: {
        width: 134,
        height: 5,
        backgroundColor: Platform.OS === 'ios' ? '#1C1C1C' : '#E0E0E0',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 12,
    },
});
