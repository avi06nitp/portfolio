"use client";

import { Button } from "@/app/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
} from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <a href="/AvinashS_Resume.pdf" download="AvinashS_Resume.pdf">
        <Button variant="outline" size="sm" className="hidden sm:flex group border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Resume
        </Button>
      </a>
      <a href="https://github.com/avi06nitp" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="group hover:bg-muted hover:text-muted-foreground transition-all duration-300">
          <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/avinash2001/" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="group hover:bg-blue-500 hover:text-white transition-all duration-300">
          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </a>
    </div>
  );
}