import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function Psychiatre() {
    const router = useRouter();
    const [showTextInput, setShowTextInput] = useState(false);
    const [dose, setDose] = useState('');
    const [inputHeight, setInputHeight] = useState(50);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                {/* Top image */}
                <TopImage source={require('../../assets/images/design2.png')} />

                {/* Card — no overflow:hidden so content won't be clipped */}
                <BottomCardSimple
                    title="Avez-vous été diagnostiqué(e) comme étant atteint d'une pathologie psychiatrique ?"
                    style={styles.card}
                >
                    <View style={styles.inner}>

                        {/* OUI / NON buttons */}
                        <View style={styles.buttonRow}>
                            <CustomButton
                                title="OUI"
                                onPress={() => setShowTextInput(true)}
                            />
                            <CustomButton
                                title="NON"
                                onPress={() => router.push('/Sante/Psychiatre2')}
                            />
                        </View>

                        {/* Text input + Continuer — shown only after OUI */}
                        {showTextInput && (
                            <>
                                <TextInput
                                    style={[styles.textInput, { height: inputHeight }]}
                                    placeholder="Décrivez votre pathologie…"
                                    placeholderTextColor="#aaa"
                                    value={dose}
                                    onChangeText={setDose}
                                    multiline
                                    onContentSizeChange={(e) =>
                                        setInputHeight(Math.max(50, e.nativeEvent.contentSize.height))
                                    }
                                />

                                <View style={styles.continuerRow}>
                                    <CustomButton
                                        title="Continuer"
                                        onPress={() => router.push('/Sante/Psychiatre2')}
                                    />
                                </View>
                            </>
                        )}

                    </View>
                </BottomCardSimple>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    /* Override card so it never clips children */
    card: {
        position: 'relative',
        marginTop: 280,
        bottom: 0,
        overflow: 'visible',       // ← key fix: never clip children
        alignItems: 'center',
    },

    inner: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 40,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginTop: -100,           // pull buttons up under the title
        marginBottom: 20,
    },

    textInput: {
        width: '100%',
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
        marginBottom: 20,
    },

    continuerRow: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});