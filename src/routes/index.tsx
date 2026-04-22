import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Jesus S. Cabarrus Elementary School | DepEd Calabarzon" },
      {
        name: "description",
        content:
          "Official website of Jesus S. Cabarrus Elementary School, Antipolo City — serving quality education since 1977 under DepEd Region IV-A CALABARZON.",
      },
    ],
  }),
});
