import { GTagEvent } from "models/gtag";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }: GTagEvent) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export { GA_TRACKING_ID, pageview, event };
