import { Button } from "@/components/button";
import { Text, View } from "react-native";


export default function Index(){
    return(
        <View className="flex-1 justify-center items-center ">
            <Text className="titulo-destaque text-pumpkin">Hello World!</Text>
            <Button text="Entrar"/>
        </View>
    )
}