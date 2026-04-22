import { createRootRoute } from "@tanstack/react-router";

import { RootShell, RootComponent, NotFoundComponent } from "./-__root-layout";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jesus S. Cabarrus Elementary School" },
      {
        name: "description",
        content:
          "Official website of Jesus S. Cabarrus Elementary School — DepEd Calabarzon, Antipolo City",
      },
      { name: "author", content: "Jesus S. Cabarrus Elementary School" },
      { property: "og:title", content: "Jesus S. Cabarrus Elementary School" },
      {
        property: "og:description",
        content: "Quality education since 1977 — DepEd Region IV-A CALABARZON",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
