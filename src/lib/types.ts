declare global {
  interface Window { CustomSubstackWidget: SubstackWidget; }
}

type SubstackWidget = {
  substackUrl: string
  placeholder: string
  buttonText: string
  theme: string
  colors: {
    primary: string
    input: string
    email: string
    text: string
  }
}

export enum Tense {
  UPCOMING,
  PAST
}

// https://developers.facebook.com/docs/graph-api/reference/

export type FBEvent = {
  id: string
  name: string
  description: string
  start_time: string
  end_time?: string
  created_time: string
  updated_time: string
  cover?: CoverPhoto
  place?: Place
  attending_count: number
  maybe_count: number
}

type CoverPhoto = {
  id: string
  offset_x: number
  offset_y: number
  source: string
}

type Place = {
  name: string
  id?: string
  location?: Location
}

type Location = any
