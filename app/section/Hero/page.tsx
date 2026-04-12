"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
} from "lucide-react";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0); // 0: typing name, 1: typing title, 2: erasing title, 3: erasing name

  const fullName = "Avinash Singh";
  const fullTitle = "Software Engineer";

  useEffect(() => {
    let animationInterval: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;

    const runContinuousAnimation = () => {
      let nameIndex = 0;
      let titleIndex = 0;
      let phase = 0;

      const animate = () => {
        animationInterval = setInterval(() => {
          if (phase === 0) {
            // Phase 0: Type name
            if (nameIndex <= fullName.length) {
              setDisplayedName(fullName.substring(0, nameIndex));
              setCurrentPhase(0);
              nameIndex++;
            } else {
              phase = 1;
              setTimeout(() => {}, 300); // Short pause
            }
          } else if (phase === 1) {
            // Phase 1: Type title
            if (titleIndex <= fullTitle.length) {
              setDisplayedTitle(fullTitle.substring(0, titleIndex));
              setCurrentPhase(1);
              titleIndex++;
            } else {
              phase = 2;
              setTimeout(() => {}, 2000); // Pause to show complete text
            }
          } else if (phase === 2) {
            // Phase 2: Erase title
            if (titleIndex > 0) {
              titleIndex--;
              setDisplayedTitle(fullTitle.substring(0, titleIndex));
              setCurrentPhase(2);
            } else {
              phase = 3;
              setTimeout(() => {}, 300); // Short pause
            }
          } else if (phase === 3) {
            // Phase 3: Erase name
            if (nameIndex > 0) {
              nameIndex--;
              setDisplayedName(fullName.substring(0, nameIndex));
              setCurrentPhase(3);
            } else {
              // Reset for next cycle
              phase = 0;
              nameIndex = 0;
              titleIndex = 0;
              setTimeout(() => {}, 500); // Pause before restarting
            }
          }
        }, phase === 0 ? 100 : phase === 1 ? 80 : 60); // Different speeds for typing/erasing
      };

      animate();
    };

    // Start animation after component mounts
    const timer = setTimeout(runContinuousAnimation, 500);

    // Cursor blinking effect
    cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (animationInterval) clearInterval(animationInterval);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, [fullName.length, fullTitle.length]);

  const shouldShowCursor = showCursor;

  return (
      <section id="home" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                {/* Typography Animation */}
                <div className="space-y-2 mt-32">
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-3xl lg:text-5xl font-light text-muted-foreground">
                      Hi I'm{" "}
                    </span>
                  </div>

                  {/* Animated Name */}
                  <div className="relative">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                      <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text ">
                        {displayedName || "\u00A0"}
                      </span>
                      {(currentPhase === 0 || currentPhase === 3) && shouldShowCursor && (
                          <span className="inline-block w-1 h-12 lg:h-16 bg-primary ml-1 animate-pulse" />
                      )}
                    </h1>
                  </div>

                  {/* Animated Title */}
                  <div className="relative min-h-[3rem] lg:min-h-[4rem]">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-primary">
                      <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text ">
                        {displayedTitle || "\u00A0"}
                      </span>
                      {(currentPhase === 1 || currentPhase === 2) && shouldShowCursor && (
                          <span className="inline-block w-1 h-6 lg:h-8 bg-primary ml-1 animate-pulse" />
                      )}
                    </h2>
                  </div>
                </div>
              </div>


              <p className="text-base border-l-2 border-primary pl-4 italic text-muted-foreground max-w-xl mx-auto lg:mx-0">
                I experiment, I go deep, and I care about the last mile, the thing that actually reaches the user.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                I got into software because I believe engineering could shape how people live and work.
                3+ years in, I've architected data governance platforms at Visa and shipped customer infrastructure
                at PhonePe that transform how millions of user interact with our products. I'm most alive when I'm at the intersection
                of a hard technical problem and a real business decision,  figuring out not just how to build it,
                but why it matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href="/AvinashS_Resume.pdf" download="AvinashS_Resume.pdf">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button>
                </a>
                <a href="https://github.com/avi06nitp" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group border-muted-foreground hover:bg-muted hover:text-muted-foreground w-full sm:w-auto">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/avinash2001/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full sm:w-auto">
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 overflow-hidden">
                  <img
                      src="/hero.jpg"
                      alt="Professional Photo"
                      className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}