import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

export default function PasswordScreen() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    >
                    {/* Top — même structure que phone.tsx */}
                    <View style={styles.topSection}>
                        <Image
                            source={require('../../assets/images/pink2.png')}
                            style={styles.pinkImage}
                            resizeMode="cover"
                        />
                        <View style={styles.curve} />
                        <View style={styles.passwordImageWrap}>
                            <Image
                                source={require('../../assets/images/password.png')}
                                style={styles.passwordImage}
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
                        <Text style={styles.title}>
                            Choisissez votre{'\n'}mot de passe
                        </Text>

                        <View style={styles.field}>
                            <Text style={styles.label}>Mot de passe</Text>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.leftIcon}>🔒</Text>
                                <TextInput
                                    placeholder="Votre mot de passe…"
                                    style={styles.input}
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholderTextColor="#9A9A9A"
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Text style={styles.rightIcon}>{showPassword ? '🫣' : '👁'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Confirmez le mot de passe</Text>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.leftIcon}>🔒</Text>
                                <TextInput
                                    placeholder="Confirmez…"
                                    style={styles.input}
                                    secureTextEntry={!showConfirm}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    placeholderTextColor="#9A9A9A"
                                />
                                <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                                    <Text style={styles.rightIcon}>{showConfirm ? '🫣' : '👁'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={() => router.push('/info')}
                        >
                            <Text style={styles.nextButtonText}>Suivant →</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Home Indicator */}
                    <View style={styles.homeBar} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
    scrollContainer: {
        flexGrow: 1,
    },
    topSection: {
        height: '40%',
        backgroundColor: '#de9690',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
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
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2E3241',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 30,
    },
    passwordImageWrap: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 120,
        zIndex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwordImage: {
        width: 120,
        height: 120,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    field: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2e3241',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        backgroundColor: '#ECECEC',
        borderRadius: 25,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        borderColor: '#B7C48B',
    },
    leftIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#1C1C1C',
    },
    rightIcon: {
        fontSize: 18,
        marginLeft: 10,
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
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
    pinkImage: {
        width: 400,
        height: 400,
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
});