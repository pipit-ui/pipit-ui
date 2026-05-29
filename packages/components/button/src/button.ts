export const ButtonTypes = ['default', 'primary', 'success', 'warning', 'danger', 'info'] as const
export type ButtonType = (typeof ButtonTypes)[number]

export const ButtonSizes = ['large', 'default', 'small'] as const
export type ButtonSize = (typeof ButtonSizes)[number]

export const NativeTypes = ['button', 'submit', 'reset'] as const
export type NativeType = (typeof NativeTypes)[number]

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  disabled?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
  plain?: boolean
  text?: boolean
}
