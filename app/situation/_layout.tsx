import { Stack } from 'expo-router';

export default function SituationLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="situation" />
            <Stack.Screen name="children" />
            <Stack.Screen name="living" />
        </Stack>
    );
}
