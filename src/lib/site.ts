export const SITE = {
  title: "roldy blog",
  description:
    "Practical notes from a home server, the road, and whatever I learn next.",
  author: "Harold Choo"
};

export const withBase = (path = "/") => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);

export const tagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
