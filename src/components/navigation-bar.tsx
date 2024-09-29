import { Feather } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from "expo-router";
import { Text, View } from "react-native";

export function NavigationBar(){
    return (
        <View className="flex-row w-full border-t-[0.5px] border-silver">
        <View className="justify-center items-center flex-1 py-4">
            <Feather name="home" size={18}></Feather>
            <Text className="font-medium text-sm">Home</Text>
        </View>
        <View className="justify-center items-center flex-1 py-4">
            <FontAwesome6 name="building" size={16} color="black" />
            <Text className="font-medium text-sm">Condomínio</Text>
        </View>
        <View className="justify-center items-center flex-1 py-4">
            <Feather name="package" size={18}></Feather>
            <Text className="font-medium text-sm">Pedidos</Text>
        </View>
        <View className="justify-center items-center flex-1 py-4">
            <Feather name="user" size={18}></Feather>
            <Text className="font-medium text-sm">Perfil</Text>
        </View>
    </View>
    )
}