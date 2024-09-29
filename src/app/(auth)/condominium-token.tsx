import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function CondominiumToken() {
    return (
        <View className="flex-1 items-center px-4">
            <Header>
                <Link replace href={"/(auth)"}>
                    <Entypo name="chevron-left" size={24} color="black" className="absolute" />
                </Link>
                <Text className="flex-grow text-center subtitulo">
                    Condomínio
                </Text>
            </Header>
            <Text className="mb-24 mt-20 subtitulo text-center">DIGITE O CÓDIGO TOKEN DE SEU CONDOMÍNIO</Text>
            <View className="w-full mb-auto gap-10">
                <View className="w-full items-center">
                    <View className="w-full gap-4">
                        <Input variant="credentials" credencialText="Código Token">
                            <Input.Field />
                        </Input>
                        <Text className="legenda text-silver">
                            Insira o código token enviado para o seu e-mail registrado para confirmar o seu condomínio. Você receberá um e-mail do colaborador do condomínio.
                        </Text>
                    </View>
                </View>

                <Button className="py-4 mb-2">
                    <Text className="text-lg text-white font-bold mx-auto">
                        Enviar
                    </Text>
                </Button>
            </View>
            <View className="mt-8">
                <Text className="text-silver font-light text-center">
                    Não recebeu o código?
                </Text>
                <Text className="text-silver font-light text-center">
                    Contate o colaborador do condomínio.
                </Text>
            </View>
        </View>
    )
}