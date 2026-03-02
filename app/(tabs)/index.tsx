import QuoteScreen from '@/app/QuoteScreen';
import StartScreen from '@/app/StartScreen';
import WelcomeScreen from '@/app/WelcomeScreen';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [screen, setScreen] = useState<'welcome' | 'quote' | 'start'>('welcome');

  useEffect(() => {
    // ✅ Après 3s → QuoteScreen
    const timer1 = setTimeout(() => {
      setScreen('quote');
    }, 3000);

    // ✅ Après 3s + 2s = 5s → StartScreen
    const timer2 = setTimeout(() => {
      setScreen('start');
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (screen === 'quote') return <QuoteScreen />;
  if (screen === 'start') return <StartScreen onSignIn={() => router.push('/signin')} />;
  return <WelcomeScreen />;
}