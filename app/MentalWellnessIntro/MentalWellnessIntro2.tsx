import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomCard from '../../components/BottomCard';
import TopImage from '../../components/TopImage';


export default function MentalWellnessIntro2() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#EFA53C' }}>
            <View style={{ flex: 1 }}>
                <TopImage source={require('../../assets/images/designintro2.png')} />
                <BottomCard
                    title={"Des <highlight>ressources</highlight> bien pensées pour vous faire sourire chaque jour."}
                    highlightColor="#EFA53C"
                    onNextPress={() => router.push('/MentalWellnessIntro/MentalWellnessIntro3')}
                    onSkipPress={() => router.push('/')}
                />
            </View>
        </View>
    );
}