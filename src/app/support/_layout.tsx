import { Slot } from "expo-router"

import { StatusBar, View } from "react-native"
import { NavigationBar } from "@/components/navigation-bar"

export default function Layout() {

    return (
        <View className="flex-1">
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Slot />
            <NavigationBar/>
        </View>
    )
}