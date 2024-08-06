export function Main({permitted}: { permitted: boolean }) {
  return (
    permitted ? <span>Pick the cider of your choice!</span> :
      <span>Please come back when you&apos;re 21</span>
  )
}