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

export default function SignupScreen() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
                {/* Top Pink Section */}
                <View style={styles.topSection}>

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Bienvenue dans{'\n'}HopeWell</Text>
                    </View>

                    <Image
                        source={require('../assets/images/panda.png')}
                        style={styles.pandaImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Bottom Content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Comment tu t’appelles ?</Text>

                    <Text style={styles.label}>Nom *</Text>
                    <TextInput
                        placeholder="XXXXXXXXXXX"
                        style={styles.input}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Prenom *</Text>
                    <TextInput
                        placeholder="XXXXXXXXXXX"
                        style={styles.input}
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/age')}
                    >
                        <Text style={styles.nextButtonText}>Suivant →</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            {/* iPhone Home Bar */}
            <View style={styles.homeBar} />
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
        height: 230, // smaller like design
        backgroundColor: '#de9690',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        paddingHorizontal: 30,
        paddingTop: 50,
        justifyContent: 'flex-start',
        overflow: 'hidden', // important for clean curve
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
    headerTextContainer: {
        marginTop: 17,
    },

    headerText: {
        fontSize: 35,
        fontWeight: '800',
        color: '#2e3241',
        lineHeight: 40,
    },
    pandaImage: {
        position: 'absolute',
        right: 4,
        bottom: -36,
        width: 240,
        height: 170,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2e3241',
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginTop: 15,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#a8bb74',
        backgroundColor: '#f8f8f8', // softer gray
        fontSize: 14,
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#2e3241',
        paddingVertical: 18,
        borderRadius: 30, // 🔥 more rounded
        alignItems: 'center',
        marginTop: 30,
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
        marginTop: 40,
        alignSelf: 'center',
        marginBottom: 15,
    },
});
