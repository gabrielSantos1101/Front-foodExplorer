import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styles'

export function Slider({ value, setValue, ...rest }) {
  return (
    <SliderRoot {...rest} onValueChange={(e) => setValue(e)}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  )
}
