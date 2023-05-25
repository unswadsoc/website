import Image from 'next/image'

export default function Home() {

  return (
    <main className="bg-stone-100 flex min-h-screen flex-col items-center justify-between">
      <div className="hero min-h-[80vh]" style={{ backgroundImage: `url("/hero.jpeg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white">UNSW Adventure Society</h1>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><Image width={620} height={300} src="https://scontent.fsyd5-1.fna.fbcdn.net/v/t39.30808-6/348815884_807232924130570_6777321065449900218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1091cb&_nc_ohc=nT0Y5SCY6vYAX9XRyFT&_nc_ht=scontent.fsyd5-1.fna&edm=AJKTm1sEAAAA&oh=00_AfBxEc8IFcflbd3lMx_0jFBu2QBCxFgPcxVGp8OYy1JUuA&oe=6472B303" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">
            UNSW ADSOC Presents: ADSOC’s Super Smash Ski Party
          </h2>
          <p>Perisher, Jindabyne</p>
          <p>SEP 4 - SEP 7</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </main>
  )
}
