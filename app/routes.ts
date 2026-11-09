import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("venues", "routes/venues.tsx"),
  route("booking", "routes/booking.tsx"),
  route("visualizer", "routes/visualizer.tsx"),
  route("catering", "routes/catering.tsx"),
  route("discussions", "routes/discussions.tsx"),
  route("planner", "routes/planner.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
