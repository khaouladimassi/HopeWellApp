import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function EmailScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/mail.png')}
                        style={styles.mailImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Quelle est{'\n'}ton adresse e-mail ?</Text>

                    <TextInput
                        placeholder="xxxxxxx@gmail.com"
                        style={styles.input}
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/password')}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>
                </View>

                {/* Home Indicator */}
                <View style={styles.homeBar} />
            </ScrollView>
        </KeyboardAvoidingView>
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
        height: 250,
        backgroundColor: '#de9690',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mailImage: {
        width: 140,
        height: 140,
        bottom: -6,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2e3241',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 16,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#a8bb74',
        backgroundColor: '#fff',
        fontSize: 14,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        paddingHorizontal: 60,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '80%',
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
    },
});
