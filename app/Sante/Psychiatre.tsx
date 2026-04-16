// AntecedentsScreen2.tsx
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Keyboard,
    KeyboardAvoidingView,
    PanResponder,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function Psychiatre() {
    const router = useRouter();
    const [text, setText] = useState('');
    const [showTextInput, setShowTextInput] = useState(false);
    const [inputHeight, setInputHeight] = useState(50);
    const [molecule, setMolecule] = useState('');
    const [dose, setDose] = useState('');
    const [inputHeight2, setInputHeight2] = useState(50);



    const translateY = useRef(new Animated.Value(0)).current;
    const isFormFilled = dose.trim().length > 0;


    // 🔥 Animation automatique avec clavier
    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => {
            Animated.spring(translateY, {
                toValue: -150,
                useNativeDriver: true,
            }).start();
        });

        const hideSub = Keyboard.addListener('keyboardDidHide', () => {
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        });

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    // 🔥 Drag manuel
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const newY = Math.max(gestureState.dy, -150);
                if (newY <= 0) {
                    translateY.setValue(newY);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                Animated.spring(translateY, {
                    toValue: gestureState.dy < -100 ? -150 : 0,
                    useNativeDriver: true,
                }).start();
            },
        })
    ).current;
    const handleFocus = () => {
        Animated.spring(translateY, {
            toValue: -150, // décalage vers le haut
            useNativeDriver: true,
        }).start();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                {/* Image */}
                <TopImage source={require('../../assets/images/design2.png')} />

                {/* Carte animée */}
                <Animated.View
                    style={{ transform: [{ translateY }] }}
                    {...panResponder.panHandlers}
                    pointerEvents="box-none"
                >
                    <BottomCardSimple
                        title="Avez-vous été diagnostiqué(e) comme étant atteint d’une pathologie psychiatrique ?"
                        style={{
                            position: 'relative',
                            marginTop: 300,
                            bottom: 0,
                            overflow: 'hidden',
                            alignItems: 'center',


                        }}
                    >
                        <View style={{ width: '100%' }}>


                            <View style={styles.buttonContainer}>
                                <CustomButton
                                    title="OUI"
                                    onPress={() => setShowTextInput(true)}
                                />
                                <CustomButton
                                    title="NON"
                                    onPress={() => router.push('/')}
                                />
                            </View>

                            {showTextInput && (
                                <TextInput
                                    style={[styles.textInput, { height: inputHeight2 }]}
                                    placeholder="|"
                                    value={dose}
                                    onChangeText={setDose}
                                    multiline
                                    onFocus={handleFocus} // 👈 fait glisser la carte
                                    onContentSizeChange={(e) =>
                                        setInputHeight2(Math.max(50, e.nativeEvent.contentSize.height))
                                    }
                                />
                            )}

                            {/* Bouton continuer */}
                            {isFormFilled && (
                                <View style={styles.buttonContainer2}>
                                    <CustomButton
                                        title="Continuer"
                                        onPress={() => router.push('/Sante/Psychiatre2')}
                                    />
                                </View>
                            )}
                        </View>




                    </BottomCardSimple>

                </Animated.View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },

    textInput: {
        marginHorizontal: -40,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 17,
        fontSize: 18,
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: '#9BB168',
        shadowColor: '#9BB168',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 45,
        top: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginTop: -120,
        alignItems: 'center'
    },

    buttonContainer2: { marginTop: 20, alignItems: 'center' },

});