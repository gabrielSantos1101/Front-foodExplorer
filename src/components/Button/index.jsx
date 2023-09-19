import { forwardRef } from 'react'
import { Wrap } from './styles'

export const Button = forwardRef(function Button(
  {
    title,
    isText = false,
    isCenter = false,
    onClick,
    hasIcon = false,
    icon: Icon,
    ...rest
  },
  ref,
) {
  return (
    <Wrap
      $istext={isText}
      $iscenter={isCenter}
      onClick={onClick}
      $hasicon={hasIcon}
      ref={ref}
      {...rest}
    >
      {hasIcon && <Icon />}
      {title}
    </Wrap>
  )
})
