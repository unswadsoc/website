import Image from 'next/image'

export default function Loading() {
    return <Image src='/alpaca.png' width={200} height={200} alt='loading' className="animate-spin"></Image>
}
