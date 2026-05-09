import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  BookOpen,
  Monitor,
  GraduationCap,
  UtensilsCrossed,
  Users,
  UsersRound,
  Sprout,
  AlertTriangle,
  Wrench,
  ClipboardList,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import activitiesImg from "../assets/JSCES_2.jpg";
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
    title: "School Based Feeding Program (SBFP)",
    desc: "School-based supplementary feeding to support pupil nutrition and well-being.",
  },
  {
    icon: Users,
    title: "In-Service Training (INSET)",
    desc: "Continuous professional development for teachers to improve instruction.",
  },
  {
    icon: UsersRound,
    title: "Gender and Development (GAD) Training",
    desc: "Promotes gender equality and awareness in school programs and activities.",
  },
  {
    icon: Sprout,
    title: "Gulayan sa Paaralan",
    desc: "School gardening program promoting sustainability and nutrition awareness.",
  },
  {
    icon: AlertTriangle,
    title: "Disaster Risk Reduction and Management (DRRM)",
    desc: "Prepares learners and staff for emergencies and disaster response.",
  },
  {
    icon: Wrench,
    title: "Brigada Eskwela",
    desc: "Community-led school maintenance and preparation before class openings.",
  },
  {
    icon: ClipboardList,
    title: "ARAL Program",
    desc: "Academic remediation and learning support for struggling learners.",
  },
  {
    icon: Users,
    title: "Supreme Elementary Learner Government (SELG)",
    desc: "Student leadership body that develops responsibility and governance skills.",
  },
  {
    icon: Shield,
    title: "18-Day Campaign to End Violence Against Women",
    desc: "Awareness program promoting safety, respect, and protection of women and children.",
  },
  {
    icon: Heart,
    title: "Health Program",
    desc: "School health initiatives including wellness, hygiene, and medical support.",
  },
];

export default function ProgramsPreview() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

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

        <div className="mt-12 relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            ref={carouselRef}
            className="flex gap-6 min-h-[300px] overflow-x-auto scroll-smooth px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programs.map((p, i) => (
              <div key={p.title} className="w-[300px] flex-shrink-0">
                <FadeInOnScroll delay={i * 100}>
                  <div className="card-lift min-h-[250px] rounded-xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <p.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 font-semibold text-card-foreground">{p.title}</h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </FadeInOnScroll>
              </div>
            ))}
          </div>
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
