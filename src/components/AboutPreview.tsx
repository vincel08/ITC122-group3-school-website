import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import studentsImg from "../assets/JSCES_1.jpg";
import FadeInOnScroll from "./FadeInOnScroll";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <FadeInOnScroll>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={studentsImg}
              alt="Students in front of school"
              width={1280}
              height={720}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
          <div className="border-l-4 border-gold pl-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Building Futures Since 1977
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jesus S. Cabarrus Elementary School is a non-central school located in the compound of
              Solid Cement Corporation, Sitio Tagbac, Barangay San Jose, Antipolo City. Named after
              Mr. Jesus S. Cabarrus, the school was established through a Deed of Donation and has
              been committed to providing quality education to the community ever since.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              With 79 nationally funded teachers led by Principal Dr. Evangeline R. Quibuyen, the
              school serves over 2,778 pupils across 58 academic classrooms, an ICT room, library,
              and dedicated feeding areas.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read full history
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
