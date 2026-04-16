import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" />
            <Stack.Screen name="QuoteScreen" />
            <Stack.Screen name="MentalWellnessIntro" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="compte" />
            <Stack.Screen name="Congrats" />
            <Stack.Screen name="SharingInfoDoc" />
            <Stack.Screen name="info" />
            <Stack.Screen name="vie" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="accompagnement" />
            <Stack.Screen name="Sante" />
            <Stack.Screen name="situation" />
        </Stack>
    );
}
