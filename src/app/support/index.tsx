import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function SupportPage(){
    return(
        <SafeAreaView className="flex-1">
            <Stack.Screen options={{ headerTitle: 'Chat' }} />
            <View className="flex-1 bg-slate-200">
                <View className="flex-1 px-4 py-8">
                    <View className="flex-row justify-start">
                        <View>
                            <Text className="bg-pumpkin px-2 py-3 text-white text-lg rounded-2xl rounded-tl-none">Bom dia! Como posso ajudar?</Text>
                            <Text className="text-sm text-silver">14:37</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-end">
                        <View>
                            <Text className="bg-pumpkin/30 px-2 py-3 text-black text-lg rounded-2xl rounded-tr-none">Bom dia! Já recebeu meu pedido?</Text>
                            <Text className="text-sm text-silver ml-auto">14:37</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row items-center bg-white py-4 px-6">
                    <TextInput
                    className="flex-1"
                      placeholder="Escreva sua mensagem"
                    />
                    <MaterialCommunityIcons name="send" size={24} color={colors.pumpkin}/>
                </View>
            </View>
        </SafeAreaView>
    )
}