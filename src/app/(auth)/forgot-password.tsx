import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";


export default function ForgotPassword(){
    return(
        <View className="flex-1 items-center px-4">
            <Header>
                <Link replace href={"/(auth)"}>
                    <Entypo name="chevron-left" size={24} color="black" className="absolute" />
                </Link>
                <Text className="flex-grow text-center subtitulo">
                    Esqueci minha senha
                </Text>
            </Header>
            <Text className="mb-24 mt-20 subtitulo text-center">SEJA BEM-VINDO AO CONDELIVERY</Text>
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
                
                <Button text="Enviar" buttonClassName="py-4 mb-2"/>
            </View>
        </View>
    )
}