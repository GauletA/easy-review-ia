import { createFileRoute } from '@tanstack/react-router'
import LearnWithHidden from '../../components/templates/LearnWithHidden'

export const Route = createFileRoute('/learn/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LearnWithHidden />
}
