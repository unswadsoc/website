import { getEvents } from "@/lib/api";
import { SliceZone } from "@prismicio/react";
import { createClient } from "prismicio";
import { components } from "slices";

export default async function Events() {
  const client = createClient();
  const page = await client.getByUID('page', 'events');

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
