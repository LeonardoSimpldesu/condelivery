import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
    const renderStars = (rating: number) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <MaterialCommunityIcons name="star" size={16} key={i} color={`${i < Math.floor(rating) ? colors.pumpkin : colors.silver}`} />
            ))
    }
    return (
        <SafeAreaView className="flex-1 px-6 bg-white">
            <View className="flex-1">
                <View className="mb-4">
                    <Text className="text-xl font-semibold">Seus Pedidos Ativos</Text>
                    <Text className="text-silver">Estes são seus pedidos ativos</Text>
                </View>
                <ScrollView className="flex-1">
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4">
                        <View className="flex-row p-6 pb-4 gap-4">
                            <View className="flex-row flex-1 overflow-hidden items-center">
                                <Image source={require('@/assets/home/bag.png')} className="size-14" resizeMode="contain" />
                                <View className="">
                                    <Text>Pedido #1456</Text>
                                    <Text className="text-silver text-sm">iFood - Restaurante Sabor Caseiro</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-full py-1 bg-pumpkin">
                            <Text className="text-white mx-auto text-sm font-semibold">Pendente</Text>
                        </View>
                    </View>
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4">
                        <View className="flex-row p-6 pb-4 gap-4">
                            <View className="flex-row flex-1 overflow-hidden items-center">
                                <Image source={require('@/assets/home/bag.png')} className="size-14" resizeMode="contain" />
                                <View className="">
                                    <Text>Pedido #1456</Text>
                                    <Text className="text-silver text-sm">iFood - Restaurante Sabor Caseiro</Text>
                                </View>
                            </View>

                        </View>
                        <View className="w-full py-1 bg-red-500">
                            <Text className="text-white mx-auto text-sm font-semibold">Em Andamento</Text>
                        </View>
                    </View>
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4">
                        <View className="flex-row p-6 pb-4 gap-4">
                            <View className="flex-row flex-1 overflow-hidden items-center">
                                <Image source={require('@/assets/home/bag.png')} className="size-14" resizeMode="contain" />
                                <View className="">
                                    <Text>Pedido #1456</Text>
                                    <Text className="text-silver text-sm">iFood - Restaurante Sabor Caseiro</Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-full py-1 bg-green-500">
                            <Text className="text-white mx-auto text-sm font-semibold">Finalizado</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View className="w-full h-1 bg-slate-300 my-4" />
            <View className="flex-1">
                <View className="mb-4">
                    <Text className="text-xl font-semibold">Colaboradores Ativos</Text>
                    <Text className="text-silver">Estes são os colaboradores ativos no condominio</Text>
                </View>
                <ScrollView className="flex-1">
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4 p-4">
                        <View className="flex-row items-center gap-4">
                            <View className="size-14 justify-center items-center bg-slate-200 rounded-full">
                                <Text className="text-xl font-semibold">LS</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-lg">Leonardo de Souza</Text>
                                <View className="flex-row items-center">
                                    {renderStars(4)}
                                    <Text className="ml-2">{(4).toFixed(1)}</   Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="chevron-right" className="ml-auto" size={24} />
                        </View>
                    </View>
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4 p-4">
                        <View className="flex-row items-center gap-4">
                            <View className="size-14 justify-center items-center bg-slate-200 rounded-full">
                                <Text className="text-xl font-semibold">LS</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-lg">Leonardo de Souza</Text>
                                <View className="flex-row items-center">
                                    {renderStars(4)}
                                    <Text className="ml-2">{(4).toFixed(1)}</   Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="chevron-right" className="ml-auto" size={24} />
                        </View>
                    </View>
                    <View className="overflow-hidden border border-slate-300 rounded-lg mb-4 p-4">
                        <View className="flex-row items-center gap-4">
                            <View className="size-14 justify-center items-center bg-slate-200 rounded-full">
                                <Text className="text-xl font-semibold">LS</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-lg">Leonardo de Souza</Text>
                                <View className="flex-row items-center">
                                    {renderStars(4)}
                                    <Text className="ml-2">{(4).toFixed(1)}</Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="chevron-right" className="ml-auto" size={24} />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Link href={'/orders/active'} asChild>
                <TouchableOpacity className="flex-row items-center justify-center gap-2 my-6 w-full rounded-lg py-3 px-8 text-center border bg-pumpkin border-pumpkin">
                    <MaterialCommunityIcons name="package-variant-closed" size={16} color={'white'} />
                    <Text className="text-white">Listar pedidos ativos</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    )
}