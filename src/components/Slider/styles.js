import * as SliderPrimitive from '@radix-ui/react-slider'
import styled from 'styled-components'

export const SliderRoot = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 12.5rem;
  height: 1.25rem;
`

export const SliderTrack = styled(SliderPrimitive.Track)`
  background-color: ${({ theme }) => theme.LIGHT.L500};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 0.1875rem;
`

export const SliderRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: ${({ theme }) => theme.LIGHT.L100};
  border-radius: 9999px;
  height: 100%;
`

export const SliderThumb = styled(SliderPrimitive.Thumb)`
  display: block;
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({ theme }) => theme.LIGHT.L100};
  box-shadow: 0 2px 10px black;
  border-radius: 10px;
`
