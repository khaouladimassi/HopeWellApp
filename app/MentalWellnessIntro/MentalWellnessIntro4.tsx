import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomCard from '../../components/BottomCard';
import TopImage from '../../components/TopImage';

export default function MentalWellnessIntro4() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#B74A40' }}>
            <View style={{ flex: 1 }}>
                <TopImage source={require('../../assets/images/designintro4.png')} />
                <BottomCard
                    title={"Rejoignez une <highlight>communauté chaleureuse</highlight> et pleine de soutien."}
                    highlightColor="#B74A40"
                    onNextPress={() => router.push('/Sante/Santescreen')}
                    onSkipPress={() => router.push('/')}
                />
            </View>
        </View>
    );
}