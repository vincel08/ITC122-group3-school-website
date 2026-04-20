import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import ProgramsPreview from "@/components/ProgramsPreview";

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

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ProgramsPreview />
    </>
  );
}
