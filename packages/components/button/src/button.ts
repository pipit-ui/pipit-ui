export const ButtonTypes = ['default', 'primary', 'success', 'warning', 'danger', 'info'] as const
export type ButtonType = (typeof ButtonTypes)[number]

export const ButtonSizes = ['large', 'default', 'small'] as const
export type ButtonSize = (typeof ButtonSizes)[number]

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
  plain?: boolean
  text?: boolean
}
