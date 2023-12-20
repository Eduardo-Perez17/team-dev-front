import React from 'react'

// commons
import type { PropsTitle } from '@/commons/interface'

// constants
import { sizeElement } from '@/constants'

export const Title = ({ children, className, title } : PropsTitle) => {

  return React.createElement(sizeElement[title] || 'h1', {className: className}, children)
}

export default Title