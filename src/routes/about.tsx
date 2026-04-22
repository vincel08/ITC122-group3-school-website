import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Jesus S. Cabarrus Elementary School" },
      {
        name: "description",
        content:
          "Learn about the history, mission, and vision of Jesus S. Cabarrus Elementary School in Antipolo City, Rizal.",
      },
    ],
  }),
});
