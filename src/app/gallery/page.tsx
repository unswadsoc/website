import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import { components } from 'slices';

export default async function Gallery() {
  const client = createClient();
  const page = await client.getByUID('page', 'gallery');

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
