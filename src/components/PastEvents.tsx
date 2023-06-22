import { FBEvent } from "@/lib/types"
import ShortEventCard from "./ShortEventCard"

export default function PastEvents({
  events
}: { events: FBEvent[] }) {
  return (
    <div>
      <div className='flex flex-wrap w-full justify-center mb-12'>
        { events.map(event => {
            return <ShortEventCard key={event.id} {...event}/ >
          })
        }
      </div>
    </div>
  )
}

