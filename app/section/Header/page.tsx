"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const NAVIGATION_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAVIGATION_ITEMS.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3 shadow-sm'
          : 'bg-background/80 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="group cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-black bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary transition-all duration-300 group-hover:scale-105">
                  Av
                </span>
                <span className="text-2xl font-black text-primary group-hover:rotate-12 transition-transform duration-300">
                  Av!
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-sm font-medium transition-all duration-300 group px-3 py-2 rounded-lg ${
                      isActive
                        ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      )}
                    </span>
                    <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-105' : ''
                    }`} />
                    <span className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 ${
                      isActive
                        ? 'w-2/3 left-1/6 opacity-100'
                        : 'w-0 group-hover:w-1/2 group-hover:left-1/4 opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/AvinashS_Resume.pdf" download="AvinashS_Resume.pdf">
                <Button
                  size="sm"
                  className="hidden lg:flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 text-primary-foreground font-medium group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Resume
                </Button>
              </a>

              <div className="flex items-center space-x-2">
                <a href="https://github.com/avi06nitp" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/avinash2001/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-3"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-primary/10 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-4 space-y-3 border-t border-border">
                  <a href="/AvinashS_Resume.pdf" download="AvinashS_Resume.pdf" className="block">
                    <Button
                      className="w-full justify-start hover:scale-105 transition-transform duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </a>

                  <div className="flex space-x-2">
                    <a href="https://github.com/avi06nitp" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/avinash2001/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
