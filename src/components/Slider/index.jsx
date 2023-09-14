import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './styles'

export function Slider({ value = 50 }) {
  return (
    <SliderRoot defaultValue={[value]} max={100} step={1}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  )
}
