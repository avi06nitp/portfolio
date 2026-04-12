"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aparna Usha Tomsan",
    role: "Account Manager · Share.Market by PhonePe",
    relationship: "Worked on the same team",
    avatar: "/testimonials/aparna-ut.jpg",
    linkedin: "https://www.linkedin.com/in/aparna-ut/",
    quote: "I had the pleasure of working closely with Avinash during his time on the CX Automation team, and I can confidently say he was an invaluable partner whenever we needed to automate processes within customer tickets. What stood out most was his willingness to collaborate — he didn't just implement our ideas, he added to them, offering thoughtful suggestions that often made the final solutions even better. One of his standout contributions was helping set up the automation infrastructure for the Share.Market team from the ground up. If you're looking for someone who brings technical expertise, collaborative energy, and startup-style agility to the table, Avinash is that person."
  },
  {
    name: "Saumya Chopra",
    role: "Customer Experience · PhonePe | ISB",
    relationship: "Worked on the same team",
    avatar: "/testimonials/saumya-chopra.jpg",
    linkedin: "https://www.linkedin.com/in/saumyachopra29/",
    quote: "Avinash is a passionate and dedicated professional with strong technical acumen and a sharp problem-solving mindset. He excels at visualizing work, understanding customer pain points, and delivering impactful solutions. His hard work, initiative, and user-focused approach make him a valuable asset to any team."
  },
  {
    name: "Vasu Garg",
    role: "Product · Myntra | Ex-PhonePe | IIT Dhanbad",
    relationship: "Senior colleague at PhonePe",
    avatar: "/testimonials/vasu-garg.jpg",
    linkedin: "https://www.linkedin.com/in/vasu-garg-074515149/",
    quote: "Avinash is an excellent individual with a collaborative spirit and a strong commitment to continuous learning. He excels at creating solutions using various technologies, including Spring Boot, RESTful APIs, and Microservices, always selecting the most suitable tools for each project. New challenges excite him, and he approaches them with an innovative mindset, thoroughly analyzing current scenarios to develop outside-the-box solutions. I am confident that Avinash will achieve great things in his career."
  },
  {
    name: "Saket Srivastava",
    role: "Software Engineer · Atlassian | NITP '22",
    relationship: "Mentor",
    avatar: "/testimonials/saket-srivastava.jpg",
    linkedin: "https://www.linkedin.com/in/saket-srivastava-157a10196/",
    quote: "I have worked with Avinash for over two years. I was impressed by his eagerness to learn and his exceptional problem-solving skills. His positive attitude and enthusiasm for tackling challenges are truly commendable. Avinash's soft skills make him an excellent communicator and a supportive team member. Anyone would be lucky to have Avinash as a colleague — he is always available to help when needed, strives for excellence, and is a valuable team player."
  },
  {
    name: "Pankaj Tripathi",
    role: "Program Manager · Amazon",
    relationship: "Worked on the same team",
    avatar: "/testimonials/pankaj-tripathi.jpg",
    linkedin: "https://www.linkedin.com/in/pankaj-tripathi-351563105/",
    quote: "Avinash Singh is unmatched at developing and optimizing web applications. He is ordered, meticulous, and a swift learner. These qualities were significant when trying to enhance workflow automation and integrate diverse systems at PhonePe. Being quick at learning allowed him to comprehend the market fit and wisely choose the optimum path to success. It was a pleasure to work with Avinash."
  }
];

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            What Colleagues Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from teammates, mentors, and cross-functional partners I've worked with
          </p>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div className="flex gap-6 w-max testimonials-track">
          {doubled.map((testimonial, index) => (
            <div key={index} className="w-[380px] flex-shrink-0">
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {testimonial.name}
                      </a>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground/50 mt-0.5">{testimonial.relationship}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <Quote className="w-4 h-4 text-muted-foreground/30 mb-2" />
                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonials-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: testimonials-scroll 40s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}