import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function PersonalInformation() {

    function handleDeleteAccount() {
        return (
            Alert.alert("Cuidado!", "Você está preste a apagar sua conta, deseja prosseguir?", [
                {
                    text: "Continuar"
                },
                {
                    text: "Cancelar",
                    style: 'cancel'
                }
            ], { cancelable: true })
        )
    }

    return (
        <View className="flex-1 pt-4 px-6 bg-white">
            <StatusBar barStyle='dark-content' />
            <Stack.Screen options={{headerTitle: 'Informações Pessoais'}} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.7} >
                    <Image source={{ uri: 'https://github.com/LeonardoSimpldesu.png' }} className="w-32 h-32 rounded-full mx-auto" />
                </TouchableOpacity>
                <View className=" gap-4">
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Nome</Text>
                        <Input>
                            <Input.Field placeholder="Leonardo de Souza Almeida" />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">E-mail</Text>
                        <Input>
                            <Input.Field placeholder="leonardodesouzaalmeidas@gmail.com" keyboardType="email-address" />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">CPF</Text>
                        <Input>
                            <Input.Field placeholder="157.896.856.29" keyboardType="number-pad"/>
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Celular</Text>
                        <Input>
                            <Input.Field placeholder="(31) 99999-9999" keyboardType="number-pad"/>
                        </Input>
                    </View>
                </View>
                <View className="w-full mt-10 gap-4">
                    <Button activeOpacity={0.8} type="secondary">
                        <Text className="mx-auto font-bold text-lg">Alterar Senha</Text>
                    </Button>
                    <Link href={'/support'} asChild>
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 px-8 mt-2 text-center border bg-white border-chili-red">
                            <Text className='text-chili-red border-chili-red font-semibold'>Apagar sua conta</Text>
                        </TouchableOpacity>
                    </Link>
                    {/* <TouchableOpacity activeOpacity={0.8} className="w-full h-14 bg-honolulu_blue rounded-xl items-center justify-center border-honolulu_blue">
                        
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={handleDeleteAccount} className="w-full h-14 bg-white rounded-xl items-center justify-center border border-chill_red">
                        <Text className="font-boldw text-lg text-chill_red">Apagar sua conta</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    )
}