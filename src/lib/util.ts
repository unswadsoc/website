import dayjs from "dayjs"
import { FBEvent, Tense } from "./types"

export const parseDate = (date: string): Date => {
    return new Date(date)
}

export const filterEvents = (events: FBEvent[], tense: Tense) => {
    return events.filter(event => {
        const filterKey = event.end_time ?? event.start_time
        const currentDate = new Date()
        if (tense == Tense.UPCOMING) return parseDate(filterKey) >= currentDate
        if (tense == Tense.PAST) return parseDate(filterKey) < currentDate
    })
}

export const displayDate = (startTime: string, endTime?: string) => {
    const start = dayjs(startTime)

    if (!endTime) {
        return start.format('ddd D MMM, h:mmA')
    }

    const end = dayjs(endTime)
    const duration = end.diff(start, 'hour')

    return duration <= 24
      ? `${start.format('ddd D MMM, h:mmA')} - ${end.format('h:mmA')}`
      : `${start.format('ddd D MMM')} - ${end.format('ddd D MMM')}`
}
