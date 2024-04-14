

import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { EventGalleryCardSliceDefaultItem } from 'prismicio-types'

export default function EventGalleryCard({
  image,
  eventname,
  eventgallery
}: EventGalleryCardSliceDefaultItem) {
  return (
    <PrismicLink
      field={eventgallery}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-base-100 shadow-md m-4 w-150 transition ease-in-out hover:scale-105 cursor-pointer no-underline"
    >
      <figure>
        <PrismicNextImage
          field={image}
          fallbackAlt=''
          className="p-2 object-contain"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body justify-around p-4 text-center">
      <PrismicRichText field={eventname} />
      </div>
    </PrismicLink>
  )
}
