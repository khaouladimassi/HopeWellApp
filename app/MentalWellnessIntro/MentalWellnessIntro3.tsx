import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomCard from '../../components/BottomCard';
import TopImage from '../../components/TopImage';

export default function MentalWellnessIntro3() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#CDCDCD' }}>
            <View style={{ flex: 1 }}>
                <TopImage source={require('../../assets/images/designintro3.png')} />
                <BottomCard
                    title={"Profitez de <highlight>séances de thérapie</highlight> avec des spécialistes à l'écoute."}
                    highlightColor="#CDCDCD"
                    onNextPress={() => router.push('/MentalWellnessIntro/MentalWellnessIntro4')}
                    onSkipPress={() => router.push('/onboarding')}
                />
            </View>
        </View>
    );
}