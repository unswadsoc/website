import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost">
          <Image
            src="/icons/logo.svg"
            alt="ADSOC Logo"
            className="dark:invert"
            width={100}
            height={30}
            priority
          />
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/events'>Events</Link></li>
          <li><Link href='/our-team'>Our team</Link></li>
          <li><Link href='/sponsors'>Sponsors</Link></li>
        </ul>
      </div>
      <div className="dropdown navbar-end flex md:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-24 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href='/events'>Events</Link></li>
          <li><Link href='/our-team'>Our team</Link></li>
          <li><Link href='/sponsors'>Sponsors</Link></li>
        </ul>
      </div>
    </div>
  )
}
