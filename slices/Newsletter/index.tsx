'use client'

import { substackConfig } from "@/lib/substack";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Script from "next/script";

/**
 * Props for `Newsletter`.
 */
export type NewsletterProps = SliceComponentProps<Content.NewsletterSlice>;

/**
 * Component for "Newsletter" Slices.
 */
const Newsletter = ({ slice }: NewsletterProps): JSX.Element => {
  if (typeof window !== "undefined") {
    window.CustomSubstackWidget = substackConfig;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 text-center flex flex-col gap-y-4 w-full"
    >
      <PrismicRichText field={slice.primary.text}/>
      <div id="custom-substack-embed" className="w-72 md:w-96 m-auto"/>
      <Script src='https://substackapi.com/widget.js'></Script>
    </section>
  );
};

export default Newsletter;
