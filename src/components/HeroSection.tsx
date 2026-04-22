import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import heroImg from "../assets/hero-school.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <img
        src={heroImg}
        alt="Jesus S. Cabarrus Elementary School campus"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold">
          DepEd Calabarzon · Antipolo City
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground drop-shadow-lg sm:text-5xl md:text-6xl">
          Jesus S. Cabarrus
          <br />
          Elementary School
        </h1>
        <p className="mt-4 max-w-xl text-base text-primary-foreground/80 drop-shadow-md sm:text-lg">
          Nurturing young minds with quality education since 1977 — building a brighter future for
          every child.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
}
