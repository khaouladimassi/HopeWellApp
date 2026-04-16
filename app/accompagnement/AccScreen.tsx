import { useRouter } from 'expo-router';
import React from 'react';
import SwitchScreen from '../../components/SwitchScreen';

export default function AccScreen() {
    const router = useRouter();
    return (
        <SwitchScreen
            title="accompagnement"
            message="Ces informations resteront confidentielles et nous aideront à mieux veiller sur toi."
            onContinue={() => router.push('/accompagnement/AccScreen2')}
            onLater={() => router.push('/')}
        />
    );
}