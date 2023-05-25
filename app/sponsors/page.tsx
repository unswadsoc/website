import useSWR from 'swr';
import SponsorCard from '../../components/SponsorCard';
import { createClient } from '../../prismicio';
// import { createClient } from "@/prismicio";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// type Sponsor = {
//   name: string,
//   link: string
//   image: string
// }

// type Response = {
//   data: {
//     sponsors: [
//       Sponsor
//     ]
//   }
//   error: any
// }

export default async function Sponsors() {
  // const { data, error } = useSWR('/api/staticdata', fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  const client = createClient();
  const page = await client.getSingle('sponsors');

  return (
    <main className="flex flex-col items-center justify-around prose-base p-8 min-h-[80vh]">
      <h1>Sponsors</h1>
      
      <div className='flex flex-wrap-reverse gap-x-20 gap-y-6 justify-center max-w-5xl'>
        { page.data.slices.map((s: any) => {
          return (
            <SponsorCard key={s.link} sponsor={s.primary} />
          )
        })}
        {/* { JSON.parse(data).sponsors.map((s: any) => {
          return (
            <SponsorCard key={s.link} sponsor={s} />
          )
        })} */}
      </div>
    </main>
  );
}
