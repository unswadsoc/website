import { PrismicNextImage } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import Link from 'next/link';
import { createClient } from 'prismicio';

export default async function Navigation() {
  const client = createClient();
  const navigation = await client.getSingle('navigation');

  return (
    <nav className="navbar bg-stone-200">
      <div className="navbar-start">
        <Link href='/'>
          <PrismicNextImage
            field={navigation.data.logo}
            width={140}
            height={50}
            className='object-contain pl-4'
          />
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Renders top-level links. */}
          {navigation.data.slices.map((slice) => {
            return (
              <li key={slice.id}>
                <Link href={slice.primary.link || ''}>
                  <PrismicText field={slice.primary.name} />
                </Link>

                {/* Renders child links, if present. */}
                {slice.items.length > 0 && (
                  <ul>
                    {slice.items.map((item) => {
                      return (
                        <li key={JSON.stringify(item)}>
                          <Link href={item.child_link || ''}>
                            <PrismicText field={item.child_name} />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
      {/* <div className="dropdown navbar-end flex md:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-24 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href='/events'>Events</Link></li>
          <li><Link href='/our-team'>Our Team</Link></li>
          <li><Link href='/sponsors'>Sponsors</Link></li>
        </ul>
      </div> */}
    </nav>
  )
}
