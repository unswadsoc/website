import Image from 'next/image'

export default function SponsorCard({ sponsor }: any) {
  return (
    <a href={sponsor.link} target='_blank' rel='noopener noreferrer' className='flex'>
      <Image src={'/sponsors/' + sponsor.image} alt={sponsor.name} 
        height={10}
        width={150}
        className='object-contain'
      />
    </a>
  )
}
