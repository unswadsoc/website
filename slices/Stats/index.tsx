import { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Stats`.
 */
export type StatsProps = SliceComponentProps<Content.StatsSlice>;

/**
 * Component for "Stats" Slices.
 */
const Stats = ({ slice }: StatsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex flex-col md:flex-row gap-16 my-16'
    >
      { slice.items.map((s: any, index: number) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <PrismicRichText field={s.stat} />
            <PrismicLink
              field={s.link}
              target={s.newtab && '_blank'}
              rel={s.newtab && 'noopener noreferrer'}
            >
              <button className="btn btn-outline mt-4 hover:scale-105">
                {s.buttontext}
              </button>
            </PrismicLink> 
          </div>
        )
      })}
    </section>
  );
};

export default Stats;
