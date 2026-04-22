import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../pages/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Jesus S. Cabarrus Elementary School" },
      {
        name: "description",
        content:
          "Get in touch with Jesus S. Cabarrus Elementary School — location, school hours, and contact information.",
      },
    ],
  }),
});
