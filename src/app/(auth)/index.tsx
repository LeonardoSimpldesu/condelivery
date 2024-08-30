import { Header } from "@/components/auth/header";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";


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
                        </Input> 
                    </View>
                    <Link href={'/(auth)/forgot-password'} className="mt-6 text-silver font-light">Esqueci minha senha</Link>
                </View>

                <View className="w-full mt-auto gap-4 text-center items-center">
                    <Button text="Entrar" buttonClassName="py-4 mb-2"/>
                    <Button text="Google" type="secondary"/>
                    <Button text="Facebook" type="secondary"/>
                    <Link href={'/(auth)/sing-up'} className="mt-8 text-silver font-light">Não possui uma conta? Cadastrar</Link>
                </View>
            </View>
        </View>
    )
}