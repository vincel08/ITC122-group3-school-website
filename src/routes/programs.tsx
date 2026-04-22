import { createFileRoute } from "@tanstack/react-router";

import { ProgramsPage } from "../pages/ProgramsPage";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs | Jesus S. Cabarrus Elementary School" },
      {
        name: "description",
        content:
          "Explore the academic programs, ALS, ICT education, and co-curricular activities at Jesus S. Cabarrus Elementary School.",
      },
    ],
  }),
});
