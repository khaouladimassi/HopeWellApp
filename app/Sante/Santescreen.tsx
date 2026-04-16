import { useRouter } from 'expo-router';
import React from 'react';
import SwitchScreen from '../../components/SwitchScreen';

export default function SanteScreen() {
    const router = useRouter();
    return (
        <SwitchScreen
            title="Santé"
            message="Ces informations nous aident à mieux prendre soin de toi."
            onContinue={() => router.push('/Sante/AntecedentsScreen')}
            onLater={() => router.push('/')}
        />
    );
}