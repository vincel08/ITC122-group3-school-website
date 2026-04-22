import { Link } from "@tanstack/react-router";
import { BookOpen, Monitor, GraduationCap, UtensilsCrossed } from "lucide-react";
import activitiesImg from "../assets/school-activities.jpg";
import FadeInOnScroll from "./FadeInOnScroll";

const programs = [
  {
    icon: BookOpen,
    title: "K-12 Curriculum",
    desc: "Full kindergarten to Grade 6 program aligned with DepEd's K-12 framework.",
  },
  {
    icon: Monitor,
    title: "ICT Education",
    desc: "Dedicated ICT room providing digital literacy and 21st-century skills.",
  },
  {
    icon: GraduationCap,
    title: "ALS A&E Classes",
    desc: "Alternative Learning System Accreditation & Equivalency program for out-of-school youth.",
  },
  {
    icon: UtensilsCrossed,
    title: "Feeding Program",
    desc: "School-based supplementary feeding to support pupil nutrition and well-being.",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Our Programs</h2>
          </div>
        </FadeInOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <FadeInOnScroll key={p.title} delay={i * 100}>
              <div className="card-lift rounded-xl border border-border bg-card p-6 text-center h-full">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

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

        <div className="mt-8 text-center">
          <Link
            to="/programs"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
