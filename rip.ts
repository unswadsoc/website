// import { RichTextField } from '@prismicio/client';
// import { PrismicNextImage } from '@prismicio/next';
// import { PrismicLink, PrismicText } from '@prismicio/react';
// import { LinkField } from '@prismicio/types';
// import Link from 'next/link';
// import { createClient } from 'prismicio';
// import { NavBarLinkSlice } from 'prismicio-types';

// export default async function Navigation() {
//   const client = createClient();
//   const navigation = await client.getSingle('navigation');

//   return (
//     <nav className="navbar bg-stone-200 bg-opacity-0 absolute">
//       <div className="navbar-start w-1/4">
//         <Link href='/'>
//           <PrismicNextImage
//             field={navigation.data.logo}
//             width={160}
//             height={50}
//             className='object-contain pl-4 dark:invert'
//           />
//         </Link>
//       </div>
//       <div className="navbar-end hidden lg:flex w-3/4">
//         <ul className="menu menu-horizontal px-1">
//           {/* Renders top-level links. */}
//           {navigation.data.slices.map((slice) => {
//             return (
//               <li tabIndex={0} className='mx-1' key={slice.id}>
//                 { slice.items.length > 0 ? (
//                     <details>
//                       <Content slice={slice} hasChildren/>
//                     </details>
//                   ) : (
//                     <Content slice={slice} />
//                   )
//                 }
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//       <div className="dropdown navbar-end flex lg:hidden w-3/4">
//         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:invert" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//         </label>
//         <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 top-0">
//           {/* Renders top-level links. */}
//           {navigation.data.slices.map((slice) => {
//             return (
//               <li className='mx-1' key={slice.id}>
//                 <CustomLink link={slice.primary.link} text={slice.primary.name}/>

//                 {/* Renders child links, if present. */}
//                 {slice.items.length > 0 && (
//                   <ul>
//                     {slice.items.map((item) => {
//                       return (
//                         <li key={JSON.stringify(item)}>
//                           <CustomLink link={item.child_link} text={item.child_name} />
//                         </li>
//                       )
//                     })}
//                   </ul>
//                 )}
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// function Content({ slice, hasChildren }: { slice: NavBarLinkSlice, hasChildren?: boolean }) {
//   return (
//     <>
//       <summary className={`text-white after:text-white ${!hasChildren && 'after:content-[]'} after:relative after:right-3`}>
//         <CustomLink link={slice.primary.link} text={slice.primary.name} className='text-white text-base' />
//       </summary>

//       {/* Renders child links, if present. */}
//       {slice.items.length > 0 && (
//         <ul>
//           {slice.items.map((item) => {
//             return (
//               <li key={JSON.stringify(item)}>
//                 <CustomLink link={item.child_link} text={item.child_name} />
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     </>
//   )
// }

// function CustomLink({ className, link, text }: { className?: string, link: LinkField, text: RichTextField }) {
//   return (
//     <div className={`font-semibold ${className ?? ''}`}>
//       { link.link_type === 'Any' ? (
//         <PrismicText field={text} />
//       ) : (
//         <PrismicLink field={link}>
//           <PrismicText field={text} />
//         </PrismicLink>
//       )}
//     </div>
//   )
// }
