// import Script from 'next/script';
import { createClient } from '../../prismicio';
import { getEvents } from '../lib/api';
import { SliceZone } from '@prismicio/react';
import { components } from 'slices';
// import { substackConfig } from '@/lib/substack';

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID('page', 'home');

  const events = await getEvents()

  return (
    <>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ events }}
      />
    </>
  )
}
