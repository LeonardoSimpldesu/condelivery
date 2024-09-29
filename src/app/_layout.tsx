import "@/styles/global.css"
import { Slot } from "expo-router"
import { Stack } from 'expo-router/stack';
import { StatusBar, View } from "react-native"
import {
    useFonts,
    Inter_900Black,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
} from "@expo-google-fonts/inter"

import { Loading } from "@/components/loading"


export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        </Stack>
    )
}