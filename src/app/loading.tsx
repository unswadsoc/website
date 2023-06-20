import Image from 'next/image'

export default function Loading() {
    // return <span className="loading loading-dots w-24"></span>
    return <Image src='/alpaca.png' width={200} height={200} alt='loading' className="animate-spin"></Image>
}
