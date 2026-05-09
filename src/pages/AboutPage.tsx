import studentsImg from "../assets/JSCES_1.jpg";
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
              <strong className="text-foreground"> Dr. Evangeline R. Quibuyen</strong> with
              seventy-nine (79) nationally funded teachers who are committed to giving quality
              education to the pupils, one (1) Volunteer Teacher teaching kindergarten classes, two
              (2) Utility Workers, two (2) OPSS Guards, and one (1) personal security guard funded
              through MOOE.
            </p>
            <p>
              The school is composed of fifty-eight (58) rooms — thirty-two (32) rooms used for
              academic purposes and five (5) rooms used as non-academic facilities including a
              library, two (2) feeding areas, an ICT room, and the principal's office.
            </p>
            <p>
              At present, the school has a total enrollment of{" "}
              <strong className="text-foreground">2,778 pupils</strong>. The school employs a
              two-shifting scheme to address the need for additional classrooms. Likewise, the
              school also delivers special programs including ALS A&E Classes (Alternative Learning
              System — Accreditation & Equivalency).
            </p>
          </div>
        </FadeInOnScroll>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeInOnScroll>
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h2 className="text-xl font-bold text-primary">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To protect and promote the right of every Filipino to quality, equitable,
                culture-based, and complete basic education where: Students leam in a
                child-friendly, gender sensitive, safe and motivating environment Teachers
                facilitate leaming and constantly nurture every leamer Administrators and staff, as
                stewards of the institution, ensure an enabling and supportive environment for
                effective learning to happen Family, community and other stakeholders are actively
                engaged and share responsibility for developing lifelong learners
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h2 className="text-xl font-bold text-primary">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We dream of Filipinos who passionately love their country and whose competencies and
                values enable them to realize their full potential and contribute meaningfully to
                building the nation. As a leamer-centered public institution, the Department of
                Education continuously improves itself to better service its stakeholders.
              </p>
              <br></br>
              <h2 className="text-xl font-bold text-primary">Core Values</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Maka-Diyos</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Maka-tao</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Makakalikasan</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Makabansa</p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
}
