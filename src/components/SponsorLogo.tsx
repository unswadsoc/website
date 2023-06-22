import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
import { SponsorSliceDefaultItem } from 'prismicio-types'

export default function SponsorLogo({
  link,
  logo
}: SponsorSliceDefaultItem) {
  return (
    <PrismicLink
      field={link}
      target='_blank'
      rel='noopener noreferrer'
      className='flex'
    >
      <PrismicNextImage
        field={logo}
        height={10}
        width={150}
        className='object-contain'
      />
    </PrismicLink>
  )
}
