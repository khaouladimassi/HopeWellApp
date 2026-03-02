import { useRouter } from 'expo-router';
import React from 'react';
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

export default function SignInScreen() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Pink Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/tay.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* Form Section */}
                <View style={styles.formSection}>
                    <Text style={styles.title}>Quel plaisir de te revoir !</Text>

                    <Text style={styles.label}>Nom</Text>
                    <TextInput
                        placeholder="XXXXXXXXXXX"
                        style={[styles.input, styles.nameInput]}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Mot de passe</Text>

                    <View style={styles.passwordWrapper}>
                        <Text style={styles.icon}>🔒</Text>

                        <TextInput
                            placeholder="Enter your password..."
                            style={styles.passwordInput}
                            secureTextEntry
                            placeholderTextColor="#999"
                        />

                        <TouchableOpacity>
                            <Text style={styles.icon}>👁</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Prêt(e) ? On continue →
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.linksContainer}>
                        <Text style={styles.linkText}>
                            Vous n’avez pas de compte ?{' '}
                            <Text
                                style={styles.highlightText}
                                onPress={() => router.push('/signup')}
                            >
                                Inscrivez-vous
                            </Text>
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>
                                Mot de passe oublié
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

    /* Top Pink Section */
    topSection: {
        width: '100%',
        height: 230,
        backgroundColor: '#e49a95',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
    },

    logo: {
        width: 300,
        height: 230,
        position: 'absolute',
        bottom: -20,
    },

    /* Form */
    formSection: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
        paddingTop: 35,
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 35,
        color: '#2e3241',
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: '#f8f8f8',
        fontSize: 14,
        marginBottom: 22,
    },

    nameInput: {
        borderWidth: 2,
        borderColor: '#b6c48a',
    },

    passwordWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 30,
    },

    passwordInput: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 10,
        fontSize: 14,
    },

    icon: {
        fontSize: 18,
    },

    /* Button */
    button: {
        width: '100%',
        paddingVertical: 18,
        borderRadius: 30, // more rounded like image
        backgroundColor: '#2e3241',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    /* Links */
    linksContainer: {
        alignItems: 'center',
        marginTop: 30,
    },

    linkText: {
        fontSize: 13,
        color: '#555',
    },

    highlightText: {
        color: '#7fa24d',
        fontWeight: '700',
    },

    forgotPassword: {
        fontSize: 13,
        color: '#7fa24d',
        fontWeight: '600',
        marginTop: 10,
    },
});