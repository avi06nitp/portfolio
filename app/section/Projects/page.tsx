"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ExternalLink, Server, Database, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "thecodetheory.co.in",
    url: "https://thecodetheory.co.in/",
    description: "Ed-tech Platform",
    details: "Comprehensive ed-tech platform teaching software engineering concepts to 1000+ students. Built with microservices architecture for scalability and real-time learning analytics.",
    technologies: ["Next.js", "Spring Boot", "MySQL", "AWS"],
    icon: Server,
  },
  {
    title: "irl.ai",
    url: null,
    description: "Personal AI Assistant",
    details: "AI-powered personal assistant leveraging machine learning for productivity optimization. Handles 1M+ API calls monthly with intelligent routing and caching.",
    technologies: ["Next.js", "Java", "Spring Boot", "Redis", "MySQL", "OpenAI"],
    icon: Zap,
  },
  {
    title: "nutreno.fin",
    url: null,
    description: "Algo Trading Platform",
    details: "High-frequency algorithmic trading data platform processing real-time market data. Engineered for sub-millisecond latency with distributed computing architecture.",
    technologies: ["Next.js", "FastAPI", "WebSockets", "InfluxDB", "Spring Boot", "Kafka"],
    icon: Database,
  }
];

const TECH_LOGOS: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "OpenAI": "https://cdn.simpleicons.org/openai/ffffff",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "WebSockets": "https://cdn.simpleicons.org/websocket/ffffff",
  "Kafka": "https://cdn.simpleicons.org/apachekafka/ffffff",
  "InfluxDB": "https://cdn.simpleicons.org/influxdb/22ADF6",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications serving thousands of users and processing millions of requests
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="hover:shadow-md transition-shadow duration-300 group">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-lg font-bold">
                    <span>{project.title}</span>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                    ) : (
                      <ExternalLink className="w-4 h-4 text-border" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-foreground/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const logo = TECH_LOGOS[tech];
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground border border-border/40"
                        >
                          {logo && (
                            <img
                              src={logo}
                              alt={tech}
                              className="w-3.5 h-3.5 object-contain flex-shrink-0"
                              loading="lazy"
                            />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}