import '/styles/index.css'

import Image from 'next/image'
import { FBEvent } from '@/lib/types'
import { displayDate } from '@/lib/util'

export default function LongEventCard({ event }: { event: FBEvent }) {
  const {
    id,
    name,
    cover,
    place,
    start_time,
    end_time,
  } = event

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.facebook.com/events/${id}`}
      className="card bg-base-100 shadow-md m-4 transition ease-in-out hover:scale-105 cursor-pointer w-4/5 md:h-44 md:w-full md:card-side">
      <figure className='md:w-2/5'>
        <Image
          src={cover ? cover.source : '/default-calendar.jpeg'}
          alt={name}
          width={400}
          height={200}
          className='h-full w-full'
        />
      </figure>
      <div className="card-body justify-around p-6 md:w-3/5">
        <h2 className="card-title">
          { name }
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className='mb-2'>
              {place && place.name}
            </p>
            <p>
              { displayDate(start_time, end_time) }
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}
