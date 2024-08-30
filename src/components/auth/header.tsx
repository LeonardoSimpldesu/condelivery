import { ReactNode } from "react";
import { Text, View } from "react-native";


type HeaderProps = {
    children: ReactNode
}

export function Header({children}: HeaderProps){
    return (
        <View className="flex-row w-full py-6 justify-between items-center relative">
            {children}
        </View>
    )
}