import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';

export default function AccScreen2() {
    const router = useRouter();

    // ✅ STATE MODAL
    const [showModal, setShowModal] = useState(false);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TopImage source={require('../../assets/images/design1.png')} />

            <BottomCardSimple>

                <View style={styles.content}>
                    <Text style={styles.label1}>
                        Pour être toujours là pour toi,
                        ajoute deux membres proches de ta famille.
                    </Text>

                    <Text style={styles.label2}>
                        Si l’une n’est pas disponible,
                        l’autre pourra l’être.
                    </Text>

                    <Text style={styles.label3}>
                        Avez-vous au moins deux contacts de soutien ?
                    </Text>
                </View>

                {/* BUTTONS */}
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="OUI"
                        onPress={() => router.push('/accompagnement/SupportContactForm')}
                    />

                    <CustomButton
                        title="NON"
                        onPress={() => setShowModal(true)}
                    />
                </View>

            </BottomCardSimple>

            {/* ================= MODAL ================= */}
            <Modal
                visible={showModal}
                transparent
                animationType="fade"
            >
                <View style={styles.modalOverlay}>

                    <View style={styles.modalBox}>

                        {/* close button */}
                        <TouchableOpacity
                            style={styles.closeBtn}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={{ fontSize: 18 }}>✕</Text>
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>
                            Ce n’est pas grave.
                        </Text>

                        <Text style={styles.modalText}>
                            Vous pourrez en ajouter une plus tard.
                        </Text>

                    </View>

                </View>
            </Modal>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EAD7',
    },

    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        top: -120
    },

    label1: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10
    },
    label2: {
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 5
    },
    label3: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        top: 79,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        top: -10,
    },

    // ========== MODAL ==========
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.67)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalBox: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10
    },

    modalText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#555'
    },

    closeBtn: {
        position: 'absolute',
        right: 15,
        top: 10
    }
});