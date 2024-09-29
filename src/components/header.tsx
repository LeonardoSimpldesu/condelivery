import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";

type HeaderProps = {
    title: string
}

export function Header({ title }:HeaderProps){
    return(
        <View className="w-full flex-row items-center justify-between py-8">
            <FontAwesome6 name="bars" size={24} />
            <Text className="uppercase text-xl text-smoky-black font-bold">{title}</Text>
            <View className="relative">
                <FontAwesome6 name="bell" size={24} />
                <View className="absolute size-4 bg-chili-red border-2 border-white rounded-full -bottom-1 -right-1" />
            </View>
        </View>
    )
}