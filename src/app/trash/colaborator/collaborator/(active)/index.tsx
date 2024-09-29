import { Button } from '@/components/button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function Collaborator(){
    return(
        <SafeAreaView className="flex-1 px-6 pb-6">
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
                    <Button className='flex-row gap-2 mt-4 justify-center items-center' activeOpacity={0.7}>
                        <MaterialCommunityIcons name="chat" size={16} color={'white'} />
                        <Text className='text-white font-semibold'>Conversar com morador</Text>
                    </Button>
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
                    <Button className='flex-row gap-2 mt-4 justify-center items-center' activeOpacity={0.7}>
                        <MaterialCommunityIcons name="chat" size={16} color={'white'} />
                        <Text className='text-white font-semibold'>Conversar com morador</Text>
                    </Button>
                </View>
           </ScrollView>
           <Link href={'/(colaborator)/collaborator/finished'} asChild>
                <Button className='flex-row justify-center'>
                    <Text className='text-white font-semibold'>Listar pedidos finalizados</Text>
                </Button>
           </Link>
        </SafeAreaView>
    )
}