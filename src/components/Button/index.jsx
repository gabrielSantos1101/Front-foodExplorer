import { Wrap } from './styles'

export function Button({
  title,
  isText = false,
  isCenter = false,
  onClick,
  hasIcon = false,
  icon: Icon,
  ...rest
}) {
  return (
    <Wrap
      $istext={isText}
      $iscenter={isCenter}
      onClick={onClick}
      $hasicon={hasIcon}
      {...rest}
    >
      {hasIcon && <Icon />}
      {title}
    </Wrap>
  )
}
