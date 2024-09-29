import { Button } from '@/components/button';
import { colors } from '@/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function Collaborator() {
    return (
        <SafeAreaView className="flex-1 px-6 pb-6 bg-white">
            <ScrollView className='flex-1'>
                <View className='border border-slate-300 p-4 rounded-lg mt-4'>
                    <View className='flex-row justify-between'>
                        <View className=''>
                            <Text className='font-semibold text-lg'>João Silva</Text>
                            <Text className='text-silver'>Bloco A, Apt 101</Text>
                        </View>
                        <View className=''>
                            <View className='bg-pumpkin h-fit px-4 py-1 rounded-full'>
                                <Text className='text-white font-semibold text-sm'>Em Andamento</Text>
                            </View>
                        </View>
                    </View>
                    <View className='flex-row gap-2 mt-4'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="package-variant-closed" size={16} color="black" />
                            <Text className='font-bold'>Origem do Pedido:</Text>
                        </View>
                        <Text>iFood</Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="timer-outline" size={16} color="black" />
                            <Text className='font-bold'>Previsão de entrega:</Text>
                        </View>
                        <Text>30 min</Text>
                    </View>
                    <Link href={'/support'} asChild>
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 px-8 mt-2 text-center border bg-white border-pumpkin">
                            <MaterialCommunityIcons name="chat" size={16} color={colors.pumpkin} />
                            <Text className='text-pumpkin font-semibold'>Conversar com morador</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className='border border-slate-300 p-4 rounded-lg mt-4'>
                    <View className='flex-row justify-between'>
                        <View className=''>
                            <Text className='font-semibold text-lg'>João Silva</Text>
                            <Text className='text-silver'>Bloco A, Apt 101</Text>
                        </View>
                        <View className=''>
                            <View className='bg-pumpkin h-fit px-4 py-1 rounded-full'>
                                <Text className='text-white font-semibold text-sm'>Pendente</Text>
                            </View>
                        </View>

                    </View>
                    <View className='flex-row gap-2 mt-4'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="package-variant-closed" size={16} color="black" />
                            <Text className='font-bold'>Origem do Pedido:</Text>
                        </View>
                        <Text>iFood</Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="timer-outline" size={16} color="black" />
                            <Text className='font-bold'>Previsão de entrega:</Text>
                        </View>
                        <Text>30 min</Text>
                    </View>
                    <Button className='flex-row gap-2 mt-4 justify-center items-center' activeOpacity={0.7}>
                        <MaterialCommunityIcons name="key-variant" size={16} color={'white'} />
                        <Text className='text-white font-semibold'>Solicitar código</Text>
                    </Button>
                    <Link href={'/support'} asChild>
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 px-8 mt-2 text-center border bg-white border-pumpkin">
                            <MaterialCommunityIcons name="chat" size={16} color={colors.pumpkin} />
                            <Text className='text-pumpkin font-semibold'>Conversar com morador</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className='border border-slate-300 p-4 rounded-lg mt-4'>
                    <View className='flex-row justify-between'>
                        <View className=''>
                            <Text className='font-semibold text-lg'>João Silva</Text>
                            <Text className='text-silver'>Bloco A, Apt 101</Text>
                        </View>
                        <View className=''>
                            <View className='bg-pumpkin h-fit px-4 py-1 rounded-full'>
                                <Text className='text-white font-semibold text-sm'>Em Andamento</Text>
                            </View>
                        </View>
                    </View>
                    <View className='flex-row gap-2 mt-4'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="package-variant-closed" size={16} color="black" />
                            <Text className='font-bold'>Origem do Pedido:</Text>
                        </View>
                        <Text>iFood</Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <View className='flex-row items-center'>
                            <MaterialCommunityIcons name="timer-outline" size={16} color="black" />
                            <Text className='font-bold'>Previsão de entrega:</Text>
                        </View>
                        <Text>30 min</Text>
                    </View>
                    <Link href={'/support'} asChild>
                        <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 px-8 mt-2 text-center border bg-white border-pumpkin">
                            <MaterialCommunityIcons name="chat" size={16} color={colors.pumpkin} />
                            <Text className='text-pumpkin font-semibold'>Conversar com morador</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </ScrollView>
            <Link href={'/orders/active'} asChild>
                <TouchableOpacity className="flex-row items-center justify-center gap-2 w-full rounded-lg py-3 mt-4 px-8 text-center border bg-pumpkin border-pumpkin">
                    <MaterialCommunityIcons name="package-variant-closed" size={16} color={'white'} />
                    <Text className="text-white">Listar pedidos ativos</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    )
}