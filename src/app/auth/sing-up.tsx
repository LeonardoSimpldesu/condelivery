import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

import Entypo from '@expo/vector-icons/Entypo';
import { Link, Stack } from "expo-router";
import { Image, Text, View } from "react-native";


export default function SignUp(){
    return(
        <View className="flex-1 items-center px-4 bg-white">
            <Stack.Screen options={{ headerTitle: 'Cadastrar' }} />
            <Text className="mb-24 mt-20 subtitulo text-center">SEJA BEM-VINDO AO CONDELIVERY</Text>
            <View className="w-full mb-auto gap-10">
                <View className="w-full items-center">
                    <View className="w-full gap-4">
                        <Input variant="credentials" credencialText="Email">
                            <Input.Field/>
                        </Input> 
                        <Input variant="credentials" credencialText="Senha">
                            <Input.Field/>
                        </Input> 
                        <View className="flex-row gap-6">
                            <Input variant="credentials" credencialText="CPF" className="flex-1">
                                <Input.Field/>
                            </Input> 
                            <Input variant="credentials" credencialText="Telefone" className="flex-1">
                                <Input.Field/>
                            </Input>
                        </View>
                    </View>
                </View>
                
                <Button className="py-4 mb-2">
                    <Text className="text-lg text-white font-bold mx-auto">
                        Entrar
                    </Text>
                </Button>
            </View>
        </View>
    )
}