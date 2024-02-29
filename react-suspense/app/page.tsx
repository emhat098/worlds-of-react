import { Suspense } from 'react'
import AsyncCoffee, { CoffeeItemSkeleton } from './components/AsyncCoffee'
import { ErrorBoundary } from 'react-error-boundary'

export default function Home() {
  return (
    <main className={'p-10'}>
      <h1 className={'text-3xl'}>
        <code>{`<Suspense />`}</code>
      </h1>
      <hr />
      <div className={'py-6'}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Suspense fallback={<CoffeeItemSkeleton />}>
            <AsyncCoffee />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  )
}
