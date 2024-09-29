import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function SignIn(){
    return(
        <View className="flex-1 items-center px-4">
            <Header>
                <Text className="flex-grow text-center">
                    LOGIN
                </Text>
            </Header>
            <Image source={require('@/assets/logo-titulo.png')} className="h-14 mt-20 mb-24" resizeMode="contain" />

            <View className="w-full gap-14">
                <View className="w-full items-center">
                    <View className="w-full gap-4">
                        <Input variant="credentials" credencialText="CPF">
                            <Input.Field/>
                        </Input> 
                        <Input variant="credentials" credencialText="Senha">
                            <Input.Field/>
                            <Feather name="eye" size={24} color="black" className="absolute right-4 top-5"/>
                        </Input> 
                    </View>
                    <Link href={'/(auth)/forgot-password'} className="mt-6 text-silver font-light">Esqueci minha senha</Link>
                </View>

                <View className="w-full mt-auto gap-4 text-center items-center">
                    <Link href='/home' asChild>
                        <Button className="py-4 mb-2">
                            <Text className="text-lg text-white font-bold mx-auto">
                                Entrar
                            </Text>
                        </Button>
                    </Link>
                    <Button type="secondary">
                        <Text className="text-lg font-bold mx-auto">
                            Google
                        </Text>
                    </Button>
                    <Button type="secondary">
                        <Text className="text-lg font-bold mx-auto">
                            Facebook
                        </Text>
                    </Button>
                    <Link href={'/(auth)/sing-up'} className="mt-8 text-silver font-light">Não possui uma conta? Cadastrar</Link>
                    {/* <Link href={'/(auth)/condominium-token'} className="mt-8 text-silver font-light">Condoiminio</Link> */}
                </View>
            </View>
        </View>
    )
}