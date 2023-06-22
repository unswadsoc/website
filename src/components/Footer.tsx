import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { createClient } from 'prismicio';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-12">
      <div>
        <PrismicNextImage
          field={footer.data.logo}
          fallbackAlt=''
          width={200}
          height={30}
          priority
          className="dark:invert"
        />
      </div>

      { footer.data.slices.map(parent => {
        return (
          <div key={JSON.stringify(parent)}>
            <span className='footer-title'>
              <PrismicRichText field={parent.primary.name}/>
            </span>
            <div className={`flex gap-4 ${parent.variation === 'default' && 'flex-col'}`}>
              { parent.items.map(child => {
                return (
                  <PrismicLink
                    key={JSON.stringify(child)}
                    field={child.child_link}
                    target={child.newtab ? '_blank' : ''}
                    rel={child.newtab ? 'noopener noreferrer' : ''}
                  >
                    { child.icon.url ? (
                      <PrismicNextImage
                        field={child.icon}
                        fallbackAlt=''
                        width={30}
                        className='dark:invert'
                      />  
                    ) : (
                      <PrismicRichText field={child.child_name}/>
                    )}
                  </PrismicLink>
                )
              }) }
            </div>
          </div>
        )
      })}
    </footer>
  )
}
