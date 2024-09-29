import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link, Stack } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function SignIn() {
    return (
        <View className="flex-1 items-center px-4 bg-white">
            <Stack.Screen options={{ headerTitle: 'Login' }} />
            <Image source={require('@/assets/logo-titulo.png')} className="h-14 mt-20 mb-24" resizeMode="contain" />

            <View className="w-full gap-14">
                <View className="w-full items-center">
                    <View className="w-full gap-4">
                        <Input variant="credentials" credencialText="CPF">
                            <Input.Field />
                        </Input>
                        <Input variant="credentials" credencialText="Senha">
                            <Input.Field />
                            <Feather name="eye" size={24} color="black" className="absolute right-4 top-5" />
                        </Input>
                    </View>
                    <Link href={'/auth/forgot-password'} className="mt-6 text-silver font-light">Esqueci minha senha</Link>
                </View>

                <View className="w-full mt-auto gap-4 text-center items-center">
                    <Link href={'/(tabs)/home'} asChild>
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 px-8 text-center border bg-pumpkin border-pumpkin">
                            <Text className="text-lg text-white font-bold">Entrar</Text>
                        </TouchableOpacity>
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
                    <Link href={'/auth/sing-up'} className="mt-8 text-silver font-light">Não possui uma conta? Cadastrar</Link>
                </View>
            </View>
        </View>
    )
}