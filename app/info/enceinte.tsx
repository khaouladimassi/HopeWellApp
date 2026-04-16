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
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default function PhoneScreen() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleChoice = (option: string) => {
        setSelectedOption(option);
    };
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
                        {/* Top Pink Image Section */}
                        <View style={styles.topSection}>
                            <Image
                                source={require('../../assets/images/pink5.png')}
                                style={styles.pinkImage}
                                resizeMode="cover"
                            />
                            <View style={styles.curve} />
                            {/* Back Button */}
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => router.back()}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.backArrow}>←</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Content */}
                 <View style={styles.content}>
                     <Text style={styles.title}>Êtes-vous enceinte ?</Text>
                     <Image
                        source={require('../../assets/images/enceinte.png')}
                        style={styles.enceinteImage}
                        resizeMode="contain"
                    />
                     <View style={styles.buttonsContainer}>
                         <TouchableOpacity
                             style={[
                                 styles.choiceButton,
                                 selectedOption === 'oui' && styles.selectedChoice
                             ]}
                             onPress={() => handleChoice('oui')}
                         >
                             <Text style={[
                                 styles.choiceText,
                                 selectedOption === 'oui' && styles.selectedText
                             ]}>Oui</Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                             style={[
                                 styles.choiceButton,
                                 selectedOption === 'non' && styles.selectedChoice
                             ]}
                             onPress={() => handleChoice('non')}
                         >
                             <Text style={[
                                 styles.choiceText,
                                 selectedOption === 'non' && styles.selectedText
                             ]}>Non</Text>
                         </TouchableOpacity>
                     </View>

                     <TouchableOpacity
                         style={[
                             styles.nextButton,
                             !selectedOption && styles.nextButtonDisabled
                         ]}
                         disabled={!selectedOption}
                         onPress={() => router.push({ pathname: '/vie' as any })}
                     >
                         <Text style={styles.nextButtonText}>Suivant →</Text>
                     </TouchableOpacity>
                 </View>

                        {/* Home Indicator (optional) */}
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

    /* Pink Top */
    topSection: {
        height: '40%',
        backgroundColor: '#de9690',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // 🔥 crops image
    },
    pinkImage: {
        width: 500,
        height: 500,
        opacity: 0.6,
        left: 0,
    },
    enceinteImage: {
        width: 120,
        height: 120,
        marginBottom: 30,
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

    /* Back Button - simplified */
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 20 : 16, // adjust for status bar
        left: 16,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // no border, just arrow
    },
    backArrow: {
        fontSize: 28,
        color: '#333', // or white if the image is dark
        fontWeight: '300',
    },

    /* Content */
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2E3241',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 30,
    },
    genderImage: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },

    /* Input */
    input: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ECECEC',
        borderWidth: 1.5,
        borderColor: '#B7C48B', // light green from your code
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#1C1C1C',
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

    /* Home Indicator */
    homeBar: {
        width: 134,
        height: 5,
        backgroundColor: Platform.OS === 'ios' ? '#1C1C1C' : '#E0E0E0',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 40,
    },
    choiceButton: {
         paddingVertical: 12,
         paddingHorizontal: 30,
         borderRadius: 30,
         borderWidth: 2,
         borderColor: '#a7b27a',
         backgroundColor: '#f5f5f5',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.1,
         shadowRadius: 4,
         elevation: 2,
     },
     selectedChoice: {
         backgroundColor: '#a7b27a',
     },
     choiceText: {
         fontSize: 18,
         fontWeight: '600',
         color: '#2f2f2f',
     },
     selectedText: {
         color: '#fff',
     },
});