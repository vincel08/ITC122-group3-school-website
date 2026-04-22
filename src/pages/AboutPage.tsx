import studentsImg from "../assets/students-classroom.jpg";
import FadeInOnScroll from "../components/FadeInOnScroll";

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <FadeInOnScroll>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">About Us</span>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground">Our School History</h1>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={studentsImg}
              alt="Students"
              width={1280}
              height={720}
              className="w-full object-cover"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="mt-10 space-y-6 border-l-4 border-gold pl-6 leading-relaxed text-muted-foreground">
            <p>
              Jesus S. Cabarrus Elementary School is a non-central school located in the compound of
              Solid Cement Corporation, formerly Island Cement, Sitio Tagbac, Barangay San Jose,
              Antipolo City, with an approximate distance of 8 kilometers away from the city proper.
            </p>
            <p>
              This school was established in <strong className="text-foreground">1977</strong> with
              a total land area of 4,199 sq. meters acquired through a Deed of Donation of the plant
              owner of Island Cement Corporation —
              <strong className="text-foreground"> Mr. Jesus S. Cabarrus</strong>, where the name of
              the school was taken from.
            </p>
            <p>
              The school is managed and supervised by a principal in the person of
              <strong className="text-foreground"> Mrs. Mary Jane G. Halili</strong> with fifty-two
              (52) nationally funded teachers who are committed to giving quality education to the
              pupils, one (1) Volunteer Teacher teaching kindergarten classes, two (2) Utility
              Workers, two (2) OPSS Guards, and one (1) personal security guard funded through MOOE.
            </p>
            <p>
              The school is composed of thirty-seven (37) rooms — thirty-two (32) rooms used for
              academic purposes and five (5) rooms used as non-academic facilities including a
              library, two (2) feeding areas, an ICT room, and the principal's office.
            </p>
            <p>
              At present, the school has a total enrollment of{" "}
              <strong className="text-foreground">2,456 pupils</strong> — 1,276 boys and 1,180
              girls. The school employs a two-shifting scheme to address the need for additional
              classrooms. Likewise, the school also delivers special programs including ALS A&E
              Classes (Alternative Learning System — Accreditation & Equivalency).
            </p>
          </div>
        </FadeInOnScroll>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeInOnScroll>
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h2 className="text-xl font-bold text-primary">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To provide quality, accessible, relevant, and liberating basic education for all
                through a responsive curriculum, effective teaching, and community partnerships.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h2 className="text-xl font-bold text-primary">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We dream of Filipinos who passionately love their country and whose values and
                competencies enable them to realize their full potential and contribute meaningfully
                to building the nation.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
}
