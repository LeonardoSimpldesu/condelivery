import { Text, TouchableOpacity } from "react-native";
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    text: string
    type?: 'primary' | 'secondary'
    buttonClassName?: string
    textClassName?: string
}

export function Button({ text, type = 'primary', buttonClassName, textClassName }: ButtonProps) {
    return (
        <TouchableOpacity className={twMerge(
            'w-full rounded-lg py-3 px-8 text-center border ',
            type == 'primary' && 'bg-pumpkin border-pumpkin',
            type == 'secondary' && 'bg-white border-davy-gray',
            buttonClassName,
        )}>
            <Text className={twMerge(
                "mx-auto subtitulo-secao",
                type == 'primary' && 'text-white',
                type == 'secondary' && 'text-smoky-black',
                textClassName,
            )}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}