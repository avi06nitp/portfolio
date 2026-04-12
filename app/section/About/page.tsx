"use client";

import { Card, CardContent } from "@/app/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">

            <CardContent className="p-8 relative">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Career Trajectory</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My career trajectory is focused on evolving toward senior/architect roles with deep expertise
                  in designing large-scale distributed systems. I specialize in building high-performance,
                  reliable microservices architectures that handle millions of transactions daily.
                  My experience spans from hands-on development to system architecture, with a strong
                  focus on scalability, security, and operational excellence.
                </p>
              </div>
            </CardContent>

          </Card>
        </div>
      </div>
    </section>
  );
}
