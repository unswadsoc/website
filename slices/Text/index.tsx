import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.PageTextSlice>;

const components = {

}

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-4xl p-4"
    >
      <PrismicRichText
        field={slice.primary.text}
        components={{
          paragraph: ({ children }) => <p className='my-4'>{children}</p>,
        }}
      />
    </section>
  );
};

export default Text;
