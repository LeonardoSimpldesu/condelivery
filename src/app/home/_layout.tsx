import { Slot } from "expo-router"

import { StatusBar, View } from "react-native"
import { NavigationBar } from "@/components/navigation-bar"
import { Header } from "@/components/header"

export default function Layout() {

    return (
        <View className="flex-1">
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <View className="px-6 pt-6">
                <Header title="Home"></Header>
            </View>
            <Slot />
            <NavigationBar/>
        </View>
    )
}