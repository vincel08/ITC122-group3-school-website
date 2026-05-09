import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { Send, Building2, MapPin, Clock } from "lucide-react";

export function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      lines: [
        "Solid Cement Corp. Compound",
        "Sitio Tagbac, Brgy. San Jose",
        "Antipolo City, Rizal 1870",
        "Telephone No.: 028-731-9957",
      ],
    },
    {
      icon: Clock,
      title: "School Hours",
      lines: ["Monday – Friday", "6:00 AM – 5:00 PM", "(Two shifting scheme)"],
    },
    {
      icon: Building2,
      title: "Division",
      lines: ["DepEd Division of Antipolo", "Region IV-A CALABARZON", "Department of Education"],
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl font-extrabold text-foreground">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We'd love to hear from you. Visit our campus or reach out through the details below.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contactInfo.map((c, i) => (
            <FadeInOnScroll key={c.title} delay={i * 100}>
              <div className="card-lift rounded-xl border border-border bg-card p-6 text-center h-full">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-bold text-card-foreground">{c.title}</h2>
                {c.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Inquiry Form */}
        <FadeInOnScroll>
          <div className="mt-12 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl font-bold text-card-foreground">Send Us a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and we'll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Juan Dela Cruz" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@example.com"
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={sending} className="gap-2">
                  <Send className="h-4 w-4" />
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </FadeInOnScroll>

        {/* Map embed */}
        <FadeInOnScroll>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d121.17!3d14.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBrgy.+San+Jose%2C+Antipolo+City!5e0!3m2!1sen!2sph!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
