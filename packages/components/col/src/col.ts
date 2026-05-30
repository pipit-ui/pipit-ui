export type ColSizeObject = {
  span?: number
  offset?: number
  push?: number
  pull?: number
}

export type ColSize = number | ColSizeObject

export interface ColProps {
  span?: number
  offset?: number
  push?: number
  pull?: number
  tag?: string
  xs?: ColSize
  sm?: ColSize
  md?: ColSize
  lg?: ColSize
  xl?: ColSize
}
