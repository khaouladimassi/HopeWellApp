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

export default function ChildrenScreen() {
    const router = useRouter();
    const [hasChildren, setHasChildren] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/enfants.png')}
                        style={styles.mainImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>As-tu des enfants{'\n'}à charge ?</Text>

                    <View style={styles.optionsHorizontal}>
                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => setHasChildren('oui')}
                            activeOpacity={0.7}
                        >
                            <View style={styles.radioCircle}>
                                {hasChildren === 'oui' && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.optionLabel}>oui</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => setHasChildren('non')}
                            activeOpacity={0.7}
                        >
                            <View style={styles.radioCircle}>
                                {hasChildren === 'non' && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.optionLabel}>non</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[styles.nextButton, !hasChildren && styles.nextButtonDisabled]}
                        disabled={!hasChildren}
                        onPress={() => router.push('/signin')}
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
    mainImage: {
        width: 220,
        height: 170,
        position: 'absolute',
        bottom: 30,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: '#e9e9e9', // As per HTML
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2e3241',
        marginBottom: 50,
        textAlign: 'center',
    },
    optionsHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        marginBottom: 60,
    },
    optionItem: {
        alignItems: 'center',
    },
    radioCircle: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#a8bb74',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    radioInner: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#a8bb74',
    },
    optionLabel: {
        fontSize: 16,
        color: '#555',
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
        width: '100%',
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
