import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from 'tailwind-merge'

type ButtonProps = TouchableOpacityProps & {
    type?: 'primary' | 'secondary' | 'destructive'
    className?: string
    children: ReactNode
}

export function Button({ type = 'primary', className, children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity className={twMerge(
            'w-full rounded-lg py-3 px-8 text-center border ',
            type == 'primary' && 'bg-pumpkin border-pumpkin',
            type == 'secondary' && 'bg-white border-davy-gray',
            type == 'destructive' && 'bg-chili-red border-chili-red',
            className,
        )}
        {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}