import { CardSkeleton } from '../CardSkeleton'
import { Wrap } from './styles'

export function LoadSection() {
  return (
    <Wrap>
      <h2></h2>
      <section>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </section>
    </Wrap>
  )
}
