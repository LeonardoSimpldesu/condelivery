import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Alert, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Notifications() {

    function handleSilenceNotifications() {
        return (
            Alert.alert("Silenciar", "Deseja silenciar todas as notificações?", [
                {
                    text: 'Sim'
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ], { cancelable: true })
        )
    }

    return (
        <View className="flex-1 p-8">
            <StatusBar barStyle='dark-content' />
            <View className="w-full flex-row items-center justify-between py-8">
                <Link href='/' asChild>
                    <FontAwesome6 name="chevron-left" size={18} color={colors["smoky-black"]} />
                </Link>
                <Text className="text-xl text-black_olive font-boldw">Notificações</Text>
                <FontAwesome6 name="check" size={18} color={"#ffffff"} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="w-full">
                <View className="mt-6">
                    <Text className="text-xl font-boldw">Entregas e pedidos</Text>
                    <View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação quando um colaborar receber seu pedido</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["forest-green"]} name="mail" size={28} />
                                <Feather color={colors["smoky-black"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação quando seu pedido estiver à caminho</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["forest-green"]} name="mail" size={28} />
                                <Feather color={colors["smoky-black"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação quando seu pedido mudar de situação</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["smoky-black"]} name="mail" size={28} />
                                <Feather color={colors["forest-green"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sobre novos pedidos</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["smoky-black"]} name="mail" size={28} />
                                <Feather color={colors["smoky-black"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação quando um novo colaborador for contratado</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["smoky-black"]} name="mail" size={28} />
                                <Feather color={colors["forest-green"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sobre mudanças em seu condominio</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["smoky-black"]} name="mail" size={28} />
                                <Feather color={colors["forest-green"]} name="smartphone" size={28} />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-xl font-boldw">Segurança</Text>
                    <View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação ao realizar um novo login</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["forest-green"]} name="mail" size={28} />
                                <Feather color={colors["smoky-black"]} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sovre atualizações no seu perfil</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors["smoky-black"]} name="mail" size={28} />
                                <Feather color={colors["smoky-black"]} name="smartphone" size={28} />
                            </View>
                        </View>
                    </View>
                </View>
                <Button activeOpacity={0.8} onPress={handleSilenceNotifications}>
                    <Text className="font-bold text-lg text-white mx-auto">Silenciar Notificações</Text>
                </Button>
            </ScrollView>
        </View>
    )
}