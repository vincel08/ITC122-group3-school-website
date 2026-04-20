import { Link } from "@tanstack/react-router";
import { MapPin, Clock, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">
              Jesus S. Cabarrus Elementary School
            </h3>
            <div className="mt-3 flex items-start gap-2 text-sm opacity-80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <p>Sitio Tagbac, Brgy. San Jose, Antipolo City, Rizal</p>
            </div>
            <p className="mt-1 pl-6 text-sm opacity-80">
              DepEd Region IV-A — CALABARZON
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:opacity-100">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">School Hours</h4>
            <div className="mt-2 flex items-start gap-2 text-sm opacity-80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p>Monday – Friday</p>
                <p>6:00 AM – 5:00 PM</p>
              </div>
            </div>
            <p className="mt-3 text-sm opacity-80">
              <a
                href="https://depedcalabarzon.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:opacity-100"
              >
                DepEd Calabarzon Official Website
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-navy-foreground/20 pt-6">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Jesus S. Cabarrus Elementary School.
            All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 rounded-full border border-navy-foreground/20 px-3 py-1.5 text-xs opacity-60 transition-opacity hover:opacity-100"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3 w-3" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
