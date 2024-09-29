import { ReactNode } from "react"
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  Platform,
  Text,
} from "react-native"
import { twMerge } from 'tailwind-merge'

type Variants = "primary" | "credentials" | "tertiary"

type InputProps = ViewProps & {
  children: ReactNode
  variant?: Variants
  credencialText?: string
  disable?: boolean
}

function Input({
  children,
  variant = "primary",
  disable = false,
  credencialText,
  className,
  ...rest
}: InputProps) {
  return (
    <View
      className={twMerge(
        "min-h-16 w-full flex-col justify-center relative",
        variant == "primary" && "px-4 py-2 border border-palatinum rounded-lg",
        variant == "credentials" && "px-4 py-2 min-h-[4rem] justify-between border border-palatinum rounded-lg",
        disable && "bg-silver border-palatinum",
        className
      )}
      {...rest}
    >
        {variant == "credentials" && <Text className="text-davy-gray">{credencialText}</Text>}
        {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-smoky-black text-lg font-regular"
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }