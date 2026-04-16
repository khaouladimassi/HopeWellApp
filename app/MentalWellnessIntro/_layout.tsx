import { Stack } from 'expo-router';

export default function MentalWellnessIntroLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" />
            <Stack.Screen name="MentalWellnessIntro1" />
            <Stack.Screen name="MentalWellnessIntro2" />
            <Stack.Screen name="MentalWellnessIntro3" />
            <Stack.Screen name="MentalWellnessIntro4" />
        </Stack>
    );
}
