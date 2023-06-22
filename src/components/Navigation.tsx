import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import Link from 'next/link';
import { createClient } from 'prismicio';

export default async function Navigation() {
  const client = createClient();
  const navigation = await client.getSingle('navigation');

  return (
    <nav className="navbar bg-opacity-0 absolute">
      <div className="navbar-start w-1/3">
        <Link href='/'>
          <PrismicNextImage
            field={navigation.data.logo}
            width={160}
            height={50}
            className='object-contain pl-4 dark:invert'
            fallbackAlt=''
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex w-2/3">
        <ul className="menu menu-horizontal px-1">
          {navigation.data.slices.map((slice) => {
            return (
              <li className='mx-1' key={slice.id}>
                <PrismicLink className='font-semibold text-base' field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="dropdown navbar-end flex lg:hidden w-2/3">
        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 top-0">
          {navigation.data.slices.map((slice) => {
            return (
              <li className='mx-1' key={slice.id}>
                <PrismicLink className='font-semibold' field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
