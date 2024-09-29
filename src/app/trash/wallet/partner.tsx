import { NavigationBar } from "@/components/navigation-bar";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, StatusBar, ScrollView, Text, Image } from "react-native";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import React from "react";

export default function Partner(){
    return(
    <>
        <View className="flex-1 p-8">
            <StatusBar barStyle='dark-content' />
            <Header title="Parceiros"></Header>

            <Input className="bg-palatinum">
                <Input.Field placeholder="Residencial das Flores"/>
            </Input>

            <View>
                <View>
                    <Image source={{ uri: 'https://github.com/LeonardoSimpldesu.png' }}/>
                    <View>
                        <View>
                            <Text>ID XXXXX</Text>
                            <Text>Alice ferreira</Text>
                            <Text>Bloco A | Apartamento 101</Text>
                            <Text>Artista Plástisca</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <NavigationBar/>
    </>
    )
}