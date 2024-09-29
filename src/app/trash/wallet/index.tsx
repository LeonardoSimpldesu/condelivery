import { Header } from "@/components/header";
import { NavigationBar } from "@/components/navigation-bar";
import { FontAwesome6, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View, StatusBar, TouchableOpacity, Text, ScrollView } from "react-native";

export default function Wallet(){
    return(
        <>
        <View className="flex-1 p-8">
            <StatusBar barStyle='dark-content' />
            <Header title="Carteira"></Header>

            <View className="mb-10">
                <View className="w-full flex-row items-end justify-between mb-4">
                    <Text className="uppercase subtitulo-secao">Parceiros salvos</Text>
                    <Link href={'/user'} className="underline">Ver mais</Link>
                </View>
                <ScrollView horizontal>
                    <View className="relative aspect-video h-44 rounded-xl bg-chili-red mr-8">
                        <FontAwesome6 name="pen" size={18} color="white" className="absolute right-4 top-4" />
                    </View>
                    <View className="relative aspect-video h-44 rounded-xl bg-chili-red">
                        <FontAwesome6 name="pen" size={18} color="white" className="absolute right-4 top-4" />
                    </View>
                </ScrollView>
            </View>

            <View>
                <View className="w-full flex-row items-end justify-between mb-4">
                    <Text className="uppercase subtitulo-secao">Histórico de pedidos</Text>
                    <Text className="underline">Ver mais</Text>
                </View>
                <View className="flex-row w-full justify-between items-center">
                    <View>
                        <Text>Café do Bosque</Text>
                        <View className="flex-row gap-2">
                            <Text className="legenda text-silver">01/05/2024</Text>
                            <Text className="legenda text-silver">17:56</Text>
                        </View>
                    </View>
                    <Text>Pendente</Text>
                </View>
            </View>
        </View>
        <NavigationBar/>
    </>
    )
}