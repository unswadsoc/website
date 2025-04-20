import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import { components } from 'slices';

export default async function Community() {
  const client = createClient();
  const page = await client.getByUID('page', 'community');

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
