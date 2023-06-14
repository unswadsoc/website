import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import { components } from 'slices';

export default async function Sponsors() {
  const client = createClient();
  const page = await client.getByUID('page', 'sponsors');

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
