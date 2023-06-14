import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamMember`.
 */
export type TeamMemberProps = SliceComponentProps<Content.TeamMemberSlice>;

/**
 * Component for "TeamMember" Slices.
 */
const TeamMember = ({ slice }: TeamMemberProps): JSX.Element => {
  return (
    <figure className={`flex flex-col md:flex-row rounded-lg p-6 w-full max-w-3xl ${slice.variation === 'teamMemberRightProfile' && 'md:flex-row-reverse md:justify-between'}`}>
      <div className={`flex md:flex-col items-center text-center md:w-1/4 ${slice.variation === 'teamMemberRightProfile' && 'flex-row-reverse'}`}>
        <PrismicNextImage
          field={slice.primary.profile}
          className="rounded-full"
          width={150}
          height={150}
          imgixParams={{ ar:'1:1', fit: 'crop', crop: ['faces'] }}
        />
          <div className={`mt-4 mx-4 md:mx-0 md:text-center text-start ${slice.variation === 'teamMemberRightProfile' && 'text-end'}`}>
            <PrismicRichText field={slice.primary.name} />
            <PrismicRichText field={slice.primary.position} />
          </div>
      </div>
      <div className="m-4 md:w-3/4 leading-8">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </figure>
  );
};

export default TeamMember;
