import { FBEvent } from "@/lib/types"
import LongEventCard from "./LongEventCard"

export default function UpcomingEvents({
  events
}: { events: FBEvent[] }) {
  return (
    <div>
      <div className='flex flex-wrap w-full justify-center'>
        { events.length ? (
            events.map(event => {
              return <LongEventCard key={event.id} {...event}/ >
            })
          ) : (
            <p className="text-lg m-4">Stay tuned for upcoming events!</p>
          )
        }
      </div>
    </div>
  )
}

