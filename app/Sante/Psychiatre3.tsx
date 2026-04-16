// AntecedentsScreen2.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function Psychiatre3Screen() {
    const router = useRouter();
    const [text, setText] = useState('');
    const [inputHeight, setInputHeight] = useState(50); // Hauteur initiale
    const isFormFilled = text.trim().length > 0;

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#d7e3ea' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Image en haut */}
                <TopImage source={require('../../assets/images/design2.png')} />

                {/* Bottom card simple avec texte */}
                <BottomCardSimple title="Précisez l’identité 
du médécin psychiatre : " />

                {/* Zone de texte */}
                <TextInput
                    style={[styles.textInput, { height: inputHeight }]}
                    placeholder="Écrivez ici..."
                    value={text}
                    onChangeText={setText}
                    multiline
                    onContentSizeChange={(event) =>
                        setInputHeight(event.nativeEvent.contentSize.height)
                    }
                />

                {/* Bouton s'affiche seulement si formulaire rempli */}
                {isFormFilled && (
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            title="Continuer"
                            onPress={() => router.push('/accompagnement/AccScreen')}
                        />
                    </View>
                )}



            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 40,
        top: 450,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        fontSize: 18,
        textAlignVertical: 'top',
        borderWidth: 2,           // bordure / stroke
        borderColor: '#9BB168',   // couleur du stroke
        shadowColor: '#9BB168',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
        top: 600,
    },

});