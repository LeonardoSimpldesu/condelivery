import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

import Entypo from '@expo/vector-icons/Entypo';
import { Link, Stack } from "expo-router";
import { Image, Text, View } from "react-native";


export default function ForgotPassword(){
    return(
        <View className="flex-1 items-center px-4 bg-white">
            <Stack.Screen options={{ headerTitle: 'Esqueci minha senha' }} />

            <Text className="mb-24 mt-20 subtitulo text-center">DIGITE SEU E-MAIL PARA REDEFINIR SUA SENHA</Text>
            <View className="w-full mb-auto gap-10">
                <View className="w-full items-center">
                    <View className="w-full gap-4">
                        <Input variant="credentials" credencialText="Email">
                            <Input.Field/>
                        </Input> 
                        <Text className="legenda text-silver">
                            Insira o endereço de e-mail que você usou para se registrar no Condelivery. Você receberá um e-mail para definir uma nova senha.
                        </Text>
                    </View>
                </View>
                
                <Button className="py-4 mb-2">
                        <Text className="text-lg text-white font-bold mx-auto">
                            Enviar
                        </Text>
                    </Button>
            </View>
        </View>
    )
}