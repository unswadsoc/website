import { get, ref } from "firebase/database"
import { app } from "./firebase/firebase"
import { FBEvent, Tense } from "./types"
import { parseDate } from "./util"

export const getUpcomingEvents = (events: FBEvent[], tense: Tense) => {
  return events.filter(event => {
      const filterKey = event.end_time ?? event.start_time
      return parseDate(filterKey) >= new Date()
  })
}

export const getEvents = async (): Promise<FBEvent[]> => {
  try {
    const response = await get(ref(app.db(), '/events'))
    return response.val()
  } catch (error) {
    console.error('Error getting events:\n', error)
    return []
  }
}
