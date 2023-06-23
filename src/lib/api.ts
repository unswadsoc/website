import { get, ref } from "firebase/database"
import { app } from "./firebase/firebase"
import { FBEvent } from "./types"

export const getEvents = async (): Promise<FBEvent[]> => {
  try {
    const response = await get(ref(app.db(), '/events'))
    return response.val()
  } catch (error) {
    console.error('Error getting events:\n', error)
    return []
  }
}
