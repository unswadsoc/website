import SponsorCard from "@/components/SponsorCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Sponsor`.
 */
export type SponsorProps = SliceComponentProps<Content.SponsorSlice>;

/**
 * Component for "Sponsor" Slices.
 */
const Sponsor = ({ slice }: SponsorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex flex-wrap-reverse gap-x-20 gap-y-6 justify-center max-w-5xl'
    >         
      { slice.items.map((s: any) => {
        return (
          <SponsorCard key={s.link} sponsor={s} />
        )
      })}
    </section>
  );
};

export default Sponsor;
