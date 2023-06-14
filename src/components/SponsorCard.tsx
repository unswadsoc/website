import Image from 'next/image'

export default function SponsorCard({ sponsor }: any) {
  return (
    <a href={sponsor.link.url} target='_blank' rel='noopener noreferrer' className='flex'>
      <Image
        src={sponsor.logo.url}
        alt={sponsor.logo.alt}
        height={10}
        width={150}
        className='object-contain'
      />
    </a>
  )
}
