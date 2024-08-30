import { Slot } from "expo-router"
import { Text, View } from "react-native"

export default function AuthLayout(){
    return (
        <View className="flex-1 py-10">
            <Slot />
        </View>        
    )
}