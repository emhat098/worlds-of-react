/* eslint-disable @next/next/no-img-element */
import { HOST_API } from '@/fake.api'

const getData = (): Promise<Coffee[] | any> =>
  new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      const res = await fetch(HOST_API)
      const coffeeList = await res.json()
      return resolve(coffeeList)
    }, 3000)
  })

interface Coffee {
  title: string
  description: string
  ingredients: string[]
  image: string
  id: number
}

interface AsyncCoffeeProps {}

const AsyncCoffee: React.FC<AsyncCoffeeProps> = async () => {
  const coffeeList = await getData()
  return (
    <div className={'flex flex-col gap-1'}>
      {coffeeList?.length > 0 &&
        coffeeList.map((coffee: Coffee) => (
          <div
            key={coffee.id}
            className={
              'w-40 p-4 flex flex-col items-center gap-2 rounded-lg border-2 border-slate-500 hover:bg-slate-300 transition-all duration-150 ease-in cursor-pointer'
            }
          >
            <img
              src={coffee.image}
              alt={coffee.title}
              width={100}
              height={100}
              className={'rounded-md h-20 w-20 object-cover'}
            />
            <p>{coffee.title}</p>
          </div>
        ))}
    </div>
  )
}

export const CoffeeItemSkeleton: React.FC = () => {
  return (
    <div className={'flex flex-col gap-1'}>
      {Array.from({ length: 5 }, (_, index) => index + 1).map(index => (
        <div
          key={index}
          className={
            'animate-pulse bg-slate-50 w-40 p-4 flex flex-col items-center gap-2 rounded-lg border-2 border-slate-500 '
          }
        >
          <div
            className={
              'animate-pulse bg-slate-200 rounded-md h-20 w-20 object-cover'
            }
          />
          <div
            className={'animate-pulse bg-slate-200 h-4 w-full rounded-md'}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default AsyncCoffee
