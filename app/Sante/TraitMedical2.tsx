import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Animated,
    KeyboardAvoidingView,
    PanResponder,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function TraitMedicalScreen2() {
    const router = useRouter();

    const [molecule, setMolecule] = useState('');
    const [dose, setDose] = useState('');
    const [inputHeight1, setInputHeight1] = useState(50);
    const [inputHeight2, setInputHeight2] = useState(50);

    const isFormFilled = molecule.trim().length > 0 && dose.trim().length > 0;

    // Valeur animée pour le déplacement de la carte
    const translateY = useRef(new Animated.Value(0)).current;

    // PanResponder pour glisser manuellement
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                // 🔥 autoriser seulement vers le haut et limiter
                const newY = Math.max(gestureState.dy, -150); // limite max vers le haut
                if (newY <= 0) {
                    translateY.setValue(newY);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                Animated.spring(translateY, {
                    toValue: gestureState.dy < -100 ? -200 : 0,
                    useNativeDriver: true,
                }).start();
            },
        })
    ).current;

    // Fonction pour faire glisser automatiquement la carte quand focus sur un input
    const handleFocus = () => {
        Animated.spring(translateY, {
            toValue: -150, // décalage vers le haut
            useNativeDriver: true,
        }).start();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* TopImage fixe */}
                <TopImage source={require('../../assets/images/design2.png')} />

                {/* Carte glissable */}
                <Animated.View
                    style={{ transform: [{ translateY }] }}
                    {...panResponder.panHandlers}
                    pointerEvents="box-none"
                >
                    <BottomCardSimple
                        style={{
                            position: 'relative',
                            marginTop: 300,
                            bottom: 0,
                            overflow: 'hidden',
                            alignItems: 'center',


                        }}
                    >
                        <View style={{ width: '100%' }}>
                            <Text style={styles.label}>Précisez la molécule préscrite :</Text>
                            <TextInput
                                style={[styles.textInput, { height: inputHeight1 }]}
                                placeholder="|"
                                value={molecule}
                                onChangeText={setMolecule}
                                multiline
                                onFocus={handleFocus}
                                onContentSizeChange={(e) =>
                                    setInputHeight1(Math.max(50, e.nativeEvent.contentSize.height))
                                }
                            />

                            <Text style={styles.label}>Sa dose :</Text>
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
                        </View>

                        {/* Bouton continuer */}
                        {isFormFilled && (
                            <View style={styles.buttonContainer}>
                                <CustomButton
                                    title="Continuer"
                                    onPress={() => router.push('/Sante/Psychiatre')}
                                />
                            </View>
                        )}
                    </BottomCardSimple>
                </Animated.View>


            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },
    label: { fontSize: 20, fontWeight: '700', marginBottom: 8, marginTop: -20, top: -90, left: -20 },
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
        top: -88,
    },
    buttonContainer: { marginTop:-90, alignItems: 'center' },
});