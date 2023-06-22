import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SideContent`.
 */
export type SideContentProps = SliceComponentProps<Content.SideContentSlice>;

/**
 * Component for "SideContent" Slices.
 */
const SideContent = ({ slice }: SideContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`w-full justify-between max-w-4xl flex flex-col items-center md:flex-row my-8 px-4 ${slice.variation === 'rightContent' && 'md:flex-row-reverse'}`}
    >
      <PrismicNextImage
        field={slice.primary.image}
        fallbackAlt=''
        className="object-contain rounded-lg overflow-hidden mb-4"
        width={400}
        height={150}
      />
      <div className="flex flex-col text-center gap-y-4 max-w-sm">
        <PrismicRichText field={slice.primary.text} />
        <PrismicLink field={slice.primary.link}>
          <button className="btn btn-outline mt-4 hover:scale-105">
            { slice.primary.buttontext }
          </button>
        </PrismicLink> 
      </div>
    </section>
  );
};

export default SideContent;
