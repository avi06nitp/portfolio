"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-black dark:text-slate-300 max-w-2xl mx-auto">
            Let's discuss your next project or explore opportunities to work together
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
                <p className="text-muted-foreground">
                  I'm always interested in discussing new opportunities,
                  challenging projects, and innovative solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:avinash06nitp@gmail.com">
                  <Button size="lg" className="group">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/avinash2001/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/avi06nitp" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}