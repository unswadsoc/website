import SponsorCard from "@/components/SponsorCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SponsorDeals`.
 */
export type SponsorDealsProps = SliceComponentProps<Content.SponsorDealsSlice>;

/**
 * Component for "SponsorDeals" Slices.
 */
const SponsorDeals = ({ slice }: SponsorDealsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex flex-wrap w-full justify-center'
    >
      { slice.items.map((item: any, i: number) => {
        return <SponsorCard key={i} sponsor={item} />
      })}
    </section>
  );
};

export default SponsorDeals;
