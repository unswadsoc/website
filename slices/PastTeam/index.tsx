import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PastTeam`.
 */
export type PastTeamProps = SliceComponentProps<Content.PastTeamSlice>;

/**
 * Component for "PastTeam" Slices.
 */
const PastTeam = ({ slice }: PastTeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full max-w-2xl px-4'
    >
      { slice.items.map(item => {
        return (
          <div key={JSON.stringify(item)} className='collapse collapse-plus bg-base-300 my-4'>
            <input type='checkbox' /> 
            <div className='collapse-title'>
              <PrismicRichText field={item.year} />
            </div>
            <div className='collapse-content'> 
              <PrismicRichText field={item.members} />
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default PastTeam;
