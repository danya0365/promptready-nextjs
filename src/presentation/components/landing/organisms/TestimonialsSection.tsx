import { Star } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Alex Chen",
    role: "Senior Frontend Developer",
    content:
      "PromptReady completely changed how I interact with AI agents. The prompt templates alone saved me 10+ hours per week. My Cursor output went from mediocre to production-grade.",
    rating: 5,
  },
  {
    name: "Sarah Kim",
    role: "Full-Stack Engineer @ Startup",
    content:
      "The agent skills are incredibly well-crafted. I dropped them into my Windsurf config and the AI immediately started following my architecture patterns. Game changer.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Tech Lead",
    content:
      "We rolled this out to our entire team. Consistency across AI-generated code improved dramatically. The workflow patterns are worth the price alone.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Loved by"
          highlight="Developers"
          description="See what developers are saying about PromptReady."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass rounded-2xl p-6 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-warning fill-warning"
                  />
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/60 to-secondary/60" />
                <div>
                  <p className="text-sm font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
