import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavBarLink`.
 */
export type NavBarLinkProps = SliceComponentProps<Content.NavBarLinkSlice>;

/**
 * Component for "NavBarLink" Slices.
 */
const NavBarLink = ({ slice }: NavBarLinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_bar_link (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavBarLink;
