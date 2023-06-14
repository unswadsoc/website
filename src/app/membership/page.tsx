import { createClient } from 'prismicio';

export default async function Membership() {
  const client = createClient();
  const page = await client.getByUID('page', 'membership');

  return (
    <>
      Membership
    </>
  );
}
