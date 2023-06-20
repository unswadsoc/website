

import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

export default function SponsorCard({ sponsor }: any) {
  return (
    <PrismicLink
      field={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-base-100 shadow-md m-4 w-64 transition ease-in-out hover:scale-105 cursor-pointer no-underline"
    >
      <figure>
        <PrismicNextImage
          field={sponsor.image}
          alt=""
          className="min-h-[150px] p-2 object-contain"
          width={150}
          height={150}
        />
      </figure>
      <div className="card-body justify-around p-4">
      <PrismicRichText field={sponsor.description} />
      </div>
    </PrismicLink>
  )
}
