import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import { components } from 'slices';

export default async function Membership() {
  const client = createClient();
  const page = await client.getByUID('page', 'membership');

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
