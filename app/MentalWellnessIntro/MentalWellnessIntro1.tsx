import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomCard from '../../components/BottomCard';
import TopImage from '../../components/TopImage';

export default function MentalWellnessIntro1() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#E5EAD7' }}>
      <View style={{ flex: 1 }}>
        <TopImage source={require('../../assets/images/designintro1.png')} />
        <BottomCard
          title={"Personnalisez votre bien-être mental <highlight>des activités fun et utiles.</highlight>"}
          highlightColor="#8da55c"
          onNextPress={() => router.push('/MentalWellnessIntro/MentalWellnessIntro2')}
          onSkipPress={() => router.push('/onboarding')}
        />
      </View>
    </View>
  );
}