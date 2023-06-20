import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const height = slice.variation === "default" && '80vh'
  // const height = slice.variation === 'small' && '50vh'
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`hero min-h-[${height}]`}
      style={{ backgroundImage: `url('${slice.primary.image.url}')` }}
    >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-2xl'>
            <h1 className='mb-5 text-5xl font-bold text-white'>{slice.primary.title}</h1>
          </div>
        </div>
    </section>
  );
};

export default Hero;
