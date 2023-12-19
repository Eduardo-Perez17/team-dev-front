import React from 'react'

// commons
import type { PropsChildrenEvent } from '@/commons' 

export const Box = ({ children, className, onClick }: PropsChildrenEvent) => {
  return React.createElement('div', { className: className, onClick }, children)
}

export default Box