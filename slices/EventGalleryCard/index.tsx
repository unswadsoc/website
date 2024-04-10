import GalleryCard from "@/components/GalleryCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EventGalleryCard`.
 */
export type EventGalleryCardProps =
  SliceComponentProps<Content.EventGalleryCardSlice>;

/**
 * Component for "EventGalleryCard" Slices.
 */
const EventGalleryCard = ({ slice }: EventGalleryCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex flex-wrap w-full justify-center'
    >
      { slice.items.map(item => {
        return <GalleryCard key={JSON.stringify(item)} {...item} />
      })}
    </section>
  );
};

export default EventGalleryCard;
