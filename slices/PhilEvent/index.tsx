import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type PhilEventProps = SliceComponentProps<Content.PhilEventSlice>;

const PhilEvent = ({ slice }: PhilEventProps): JSX.Element => {
  const eventPhotos = slice.items
    .map((item) => item.eventphoto)
    .filter((photo) => photo?.url);

  const charityPhotos = slice.items
    .map((item) => item.charityphoto)
    .filter((logo) => logo?.url);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Text Column */}
        <div className="space-y-6 flex flex-col items-center text-center">
          <PrismicRichText
            field={slice.primary.eventname}
            components={{
              heading1: ({ children }) => (
                <h2 className="text-3xl font-bold">{children}</h2>
              ),
              paragraph: ({ children }) => (
                <h2 className="text-3xl font-bold">{children}</h2> // fallback if not heading
              ),
            }}
          />

          <PrismicRichText field={slice.primary.eventdescription} />

          {/* Charity Logos */}
          {charityPhotos.length > 0 && (
            <div className="flex flex-wrap gap-6 justify-center pt-2">
              {charityPhotos.map((logo, idx) => (
                <div
                  key={idx}
                  className="h-16 sm:h-20 max-w-[200px] sm:max-w-[240px]"
                >
                  <PrismicNextImage
                    field={logo}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Column */}
        {eventPhotos[0] && (
          <div className="h-full flex items-center justify-center">
            <div className="aspect-[2796/1290] w-full overflow-hidden rounded-xl">
              <PrismicNextImage
                field={eventPhotos[0]}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhilEvent;
