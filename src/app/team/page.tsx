import { SliceZone } from '@prismicio/react'
import { createClient } from 'prismicio';
import { components } from 'slices';

export default async function OurTeam() {
  const client = createClient();
  const page = await client.getByUID('page', 'team');

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />      
    </>
  )
}
