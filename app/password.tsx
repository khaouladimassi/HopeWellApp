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

export default function PasswordScreen() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/images/password.png')}
                        style={styles.passwordImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>

                    {/* Choose Password */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Choisis ton mot de passe</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.leftIcon}>🔒</Text>
                            <TextInput
                                placeholder="Enter your password..."
                                style={styles.input}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#999"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Text style={styles.rightIcon}>{showPassword ? '🫣' : '👁'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Confirm Password */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Confirme ton mot de passe</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.leftIcon}>🔒</Text>
                            <TextInput
                                placeholder="Enter your password..."
                                style={styles.input}
                                secureTextEntry={!showConfirm}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholderTextColor="#999"
                            />
                            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                                <Text style={styles.rightIcon}>{showConfirm ? '🫣' : '👁'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/living')}
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
        left: 25,
        right: 25,
        bottom: -10,
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
    passwordImage: {
        width: 220,
        height: 220,
        position: 'absolute',
        bottom: -30,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    field: {
        marginBottom: 25,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2e3241',
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#a8bb74',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    leftIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 14,
        color: '#333',
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
        width: 120,
        height: 5,
        backgroundColor: '#2e3241',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
});
