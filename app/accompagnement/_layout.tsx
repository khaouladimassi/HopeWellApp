import { Stack } from 'expo-router';

export default function AccompagnementLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AccScreen" />
            <Stack.Screen name="AccScreen2" />
            <Stack.Screen name="Acceptanceinfosharing" />
            <Stack.Screen name="Acceptanceinfosharing2" />
            <Stack.Screen name="SupportContactForm" />
            <Stack.Screen name="SupportContactForm2" />
        </Stack>
    );
}
