import PastEvents from "@/components/PastEvents";
import UpcomingEvents from "@/components/UpcomingEvents";
import { FBEvent, Tense } from "@/lib/types";
import { filterEvents } from "@/lib/util";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FacebookEvents`.
 */
export type FacebookEventsProps =
  SliceComponentProps<Content.FacebookEventsSlice>;

/**
 * Component for "FacebookEvents" Slices.
 */
const FacebookEvents = ({ slice, context }: FacebookEventsProps): JSX.Element => {
  const events = (context as { events: FBEvent[]}).events

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-4xl"
    >
      { slice.variation === "upcoming" &&
        <UpcomingEvents events={filterEvents(events, Tense.UPCOMING)} />
      }
      { slice.variation === "past" &&
        <PastEvents events={filterEvents(events, Tense.PAST)} />
      }
    </section>
  );
};

export default FacebookEvents;
