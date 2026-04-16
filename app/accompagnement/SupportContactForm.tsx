// app/Sante/SupportContactForm.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import BottomCardSimple from '../../components/BottomCardSimple';
import CustomButton from '../../components/CustomButton';
import TopImage from '../../components/TopImage';
const OPTIONS = ["Mère", "Père", "Sœur", "Frère", "Fille", "Fils", "Conjoint"];

// ✅ Regex validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+216)?\d{8}$/;

export default function SupportContactForm() {
    const router = useRouter();

    const [selected, setSelected] = useState("Mère");
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // erreurs
    const [errors, setErrors] = useState<any>({});

    // ✅ Validation en temps réel
    const validate = () => {
        let newErrors: any = {};

        if (!name.trim()) {
            newErrors.name = "Nom obligatoire";
        }

        if (!phone.trim()) {
            newErrors.phone = "Numéro obligatoire";
        } else if (!phoneRegex.test(phone.trim())) {
            newErrors.phone = "Numéro invalide (ex: 20123456 ou +21620123456)";
        }

        if (email.trim() && !emailRegex.test(email.trim())) {
            newErrors.email = "Email invalide";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const isFormFilled =
        name.trim().length > 0 &&
        phoneRegex.test(phone.trim()) &&
        (email.trim() === '' || emailRegex.test(email.trim()));

    const handleSubmit = () => {
        if (validate()) {
            console.log("Formulaire valide ✔");
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TopImage source={require('../../assets/images/design2.png')} />

            <BottomCardSimple>
                <View style={styles.forum}>
                    <Text style={styles.sectionTitle}>
                        Un contact de soutien 1/2
                    </Text>

                    {/* Dropdown */}
                    <Text style={styles.label}>Lien de parenté</Text>
                    <TouchableOpacity
                        style={styles.dropdown}
                        onPress={() => setOpen(!open)}
                    >
                        <Text>{selected}</Text>
                        <Text>{open ? '▲' : '▼'}</Text>
                    </TouchableOpacity>

                    {open && (
                        <View style={styles.dropdownList}>
                            {OPTIONS.map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    style={styles.optionItem}
                                    onPress={() => {
                                        setSelected(item);
                                        setOpen(false);
                                    }}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    {/* NAME */}
                    <Text style={styles.label}>Nom et Prénom</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            if (errors.name) validate();
                        }}
                        placeholder="Nom "
                    />
                    {!!errors.name && (
                        <Text style={styles.error}>{errors.name}</Text>
                    )}

                    {/* PHONE */}
                    <Text style={styles.label}>Numéro de téléphone</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={(text) => {
                            setPhone(text);
                            if (errors.phone) validate();
                        }}
                        placeholder="+216xxxxxxx"
                        keyboardType="phone-pad"
                    />
                    {!!errors.phone && (
                        <Text style={styles.error}>{errors.phone}</Text>
                    )}

                    {/* EMAIL */}
                    <Text style={styles.label}>Email (optionnel)</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            if (errors.email) validate();
                        }}
                        placeholder="exemple@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {!!errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                    )}

                    {isFormFilled && (
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                title="Continuer"
                                onPress={() => router.push('/accompagnement/Acceptanceinfosharing')}
                            />
                        </View>
                    )}
                </View>
            </BottomCardSimple>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EAD7',
    },
    forum: {
        width: 350,
        bottom: 140,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2D4A1E',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 19,
        fontWeight: '500',
        marginTop: 12,
    },
    input: {
        backgroundColor: '#F7F9F3',
        borderRadius: 15,
        padding: 12,
        borderWidth: 1,
        borderColor: '#A3B18A',
        marginTop: 6,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
    dropdown: {
        backgroundColor: '#F7F9F3',
        padding: 12,
        borderRadius: 15,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#A3B18A',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownList: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        fontsize: 20,
    },
    optionItem: {
        padding: 10,

    },
    buttonContainer: {
        alignItems: 'center',
        top: 40,
    },

    buttonDisabled: {
        backgroundColor: '#A5A5A5',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
    }
});