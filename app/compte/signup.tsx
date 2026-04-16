import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignupScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* PINK HERO SECTION */}
            <View style={styles.hero}>

                {/* Background Image (cropped like previous screen) */}
                <Image
                    source={require('../../assets/images/pink1.png')}
                    style={styles.heroImage}
                    resizeMode="contain"
                />

                {/* White Curve (same style as green screen) */}
                <View style={styles.curve} />

                {/* Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Ionicons name="arrow-back" size={28} color="#1a1a1a" />
                </TouchableOpacity>
            </View>

            {/* FORM CONTENT */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.contentWrapper}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.formSection}>
                        <Text style={styles.title}>Comment vous appelez-vous ?</Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Nom *</Text>
                            <TextInput
                                placeholder="XXXXXXXXXXX"
                                style={styles.input}
                                placeholderTextColor="#999"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Prénom *</Text>
                            <TextInput
                                placeholder="XXXXXXXXXXX"
                                style={styles.input}
                                placeholderTextColor="#999"
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.arrowBtn}
                                onPress={() => router.push('/compte/email')}
                                activeOpacity={0.8}
                            >
                                <Ionicons name="arrow-forward" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        {/* Home Indicator */}
                        <View style={styles.homeBar} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f0eb',
    },

    /* HERO SECTION (Same Logic as Green Screen) */
    hero: {
        height: '40%',
        backgroundColor: '#de9690',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // 🔥 crops image
    },

    heroImage: {
        position: 'absolute',
        width: 600,
        height: 600,
        bottom: -250,
        opacity: 0.45,
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
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40 : 16, // Adjust for status bar
        left: 20,
        zIndex: 10,
    },

    contentWrapper: {
        flex: 1,
    },

    scrollContainer: {
        flexGrow: 1,
    },
    homeBar: {
        width: 120,
        height: 5,
        backgroundColor: '#2e3241',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    formSection: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 30,
        paddingBottom: 40,
    },

    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1a1a1a',
        marginBottom: 35,
        textAlign: 'center',
    },

    inputGroup: {
        marginBottom: 20,
    },

    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 8,
        marginLeft: 5,
    },

    input: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#d6dab5ff',
        backgroundColor: '#fff',
        fontSize: 14,
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30,
    },

    arrowBtn: {
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: '#1e2235',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#1e2235',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 18,
        elevation: 10,
    },
});