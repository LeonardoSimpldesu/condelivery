import { FontAwesome6 } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Feather size={24} name="home" color={color} 
                    />,
                }}
            />
            <Tabs.Screen
                name="condominium"
                options={{
                    title: 'Condominio',
                    tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="building" color={color} />,
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: 'Pedidos',
                    tabBarIcon: ({ color }) => <Feather size={24} name="package" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Feather size={24} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}