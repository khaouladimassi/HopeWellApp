import { Stack } from 'expo-router';

export default function SanteLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Santescreen" />
            <Stack.Screen name="AntecedentsScreen" />
            <Stack.Screen name="AntecedentsScreen2" />
            <Stack.Screen name="Psychiatre" />
            <Stack.Screen name="Psychiatre2" />
            <Stack.Screen name="Psychiatre3" />
            <Stack.Screen name="TraitMedical" />
            <Stack.Screen name="TraitMedical2" />
        </Stack>
    );
}
