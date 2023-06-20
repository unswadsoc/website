import Image from 'next/image'
import { FBEvent } from '@/lib/types'
import { displayDate } from '@/lib/util'

export default function ShortEventCard({ event }: { event: FBEvent }) {
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
      className="card bg-base-100 shadow-md m-4 w-64 transition ease-in-out hover:scale-105 cursor-pointer no-underline">
      <figure>
        <Image
          src={cover ? cover.source : '/default-calendar.jpeg'}
          alt={name}
          width={400}
          height={200}
          className='h-full'
        />
      </figure>
      <div className="card-body justify-around p-4">
        <h2 className="card-title text-lg">
          { name }
        </h2>
        <p>
          {place && place.name}
        </p>
        <p>
          { displayDate(start_time, end_time) }
        </p>
      </div>
    </a>
  )
}
