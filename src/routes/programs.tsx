import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Monitor,
  GraduationCap,
  UtensilsCrossed,
  Library,
  Trophy,
} from "lucide-react";
import activitiesImg from "@/assets/school-activities.jpg";
import FadeInOnScroll from "@/components/FadeInOnScroll";

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

const programs = [
  {
    icon: BookOpen,
    title: "K-12 Basic Education Curriculum",
    desc: "Comprehensive kindergarten through Grade 6 program following DepEd's Enhanced K-12 curriculum, ensuring every learner acquires foundational literacy, numeracy, and life skills.",
  },
  {
    icon: Monitor,
    title: "ICT-Integrated Learning",
    desc: "Our dedicated ICT room equips pupils with digital literacy — from basic computer operations to internet research skills — preparing them for the demands of the 21st century.",
  },
  {
    icon: GraduationCap,
    title: "ALS Accreditation & Equivalency",
    desc: "The Alternative Learning System (ALS) A&E program provides out-of-school youth and adults the opportunity to complete basic education through flexible learning pathways.",
  },
  {
    icon: UtensilsCrossed,
    title: "School-Based Feeding Program",
    desc: "A supplementary feeding initiative that ensures pupils receive proper nutrition to support their physical and cognitive development throughout the school year.",
  },
  {
    icon: Library,
    title: "Library & Reading Program",
    desc: "Our school library fosters a love for reading through curated collections, reading challenges, and storytelling sessions aimed at building strong literacy foundations.",
  },
  {
    icon: Trophy,
    title: "Co-Curricular Activities",
    desc: "Sports, arts, scouting, and other extra-curricular programs that promote teamwork, discipline, creativity, and holistic child development.",
  },
];

function ProgramsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Academic Excellence
            </span>
            <h1 className="mt-2 text-4xl font-extrabold text-foreground">
              Our Programs
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a well-rounded education experience that goes beyond the
              classroom, nurturing the intellectual, physical, and social growth
              of every learner.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={activitiesImg}
              alt="School activities"
              width={1280}
              height={720}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </FadeInOnScroll>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <FadeInOnScroll key={p.title} delay={i * 80}>
              <div className="card-lift group rounded-xl border border-border bg-card p-6 h-full transition-colors hover:border-gold/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-gold/20 group-hover:text-gold-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-card-foreground">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
