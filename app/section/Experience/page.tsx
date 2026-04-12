"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ChevronRight, X, Calendar, MapPin, Users, Trophy } from "lucide-react";
import Image from "next/image";

interface DetailedWork {
  title: string;
  description: string;
  technologies: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  duration: string;
  location: string;
  type: string;
  team: string;
  responsibilities: string[];
  detailedWork: DetailedWork[];
  achievements: string[];
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software Engineer, Data & AI Platforms",
      company: "Visa",
      logo: "/visa.png",
      duration: "Apr 2025 – Present",
      location: "Bengaluru, India (Hybrid)",
      type: "Current",
      team: "Data Platform as a Service",
      responsibilities: [
        "Led end-to-end development of Unified Access Manager, standardizing access control across AWS, Databricks & on-premises Hadoop systems, securing enterprise-wide data sharing across 3000+ databases",
        "Architected the core policy evaluation engine enabling fine-grained permissions at table, row & column levels across 600K+ tables; optimized pipeline to process 2M+ access rules with p99 latency under 50ms",
        "Re-engineered Active Directory sync & lookup jobs for 50K+ AD group members using connection pooling & batched LDAP queries, cutting runtime from 30–40 minutes to under 30 seconds"
      ],
      detailedWork: [
        {
          title: "Unified Access Manager",
          description: "Governance platform standardizing access control across AWS, Databricks & on-premises Hadoop systems. Integrated with Unity Catalog, Lake Formation, and Apache Ranger using RESTful APIs & event-driven architecture, enabling seamless cross-platform policy synchronization & centralized audit logging.",
          technologies: ["Java", "Spring Boot", "AWS Lake Formation", "Databricks Unity Catalog", "Apache Ranger", "Apache Kafka", "PostgreSQL"]
        },
        {
          title: "Policy Evaluation Engine",
          description: "Architected the core authorization workflow enabling fine-grained permissions at table, row & column levels across 600K+ tables. Optimized policy execution pipeline to process 2M+ access rules with p99 latency under 50ms, ensuring compliance & enforcement consistency in distributed data environments.",
          technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Apache Kafka", "Docker", "Kubernetes"]
        },
        {
          title: "Active Directory Sync Optimization",
          description: "Re-engineered AD sync & lookup jobs for 50K+ AD group members, introducing connection pooling, batched LDAP queries & retry-safe execution. Maintained 85% test coverage with <0.5% duplication and remediated 20+ legacy Checkmarx vulnerabilities including SQL injection & privacy violations.",
          technologies: ["Java", "LDAP", "Spring Boot", "Jenkins", "SonarQube", "Checkmarx", "Sonatype"]
        }
      ],
      achievements: [
        "Secured enterprise-wide data sharing across 3000+ databases with standardized access control",
        "Processed 2M+ access rules with p99 latency under 50ms",
        "Cut Active Directory sync runtime from 30–40 minutes to under 30 seconds",
        "Maintained 85% test coverage with <0.5% duplication across the codebase",
        "Remediated 20+ legacy Checkmarx vulnerabilities including SQL injection & privacy violations"
      ]
    },
    {
      id: 2,
      title: "Product Solutions Engineer (Backend)",
      company: "PhonePe",
      logo: "/phonepe.png",
      duration: "Jul 2023 – Mar 2025",
      location: "Bengaluru, India",
      type: "Full-time",
      team: "Share.Market",
      responsibilities: [
        "Architected & delivered Agent Console Platform with event-driven processing, supporting 5000+ agents & 500K+ daily interactions with 99.95% availability",
        "Built Agent Assistance system with MCP servers integrating GenAI & in-house models, reducing average handle time by 25% across 2M+ monthly conversations",
        "Developed distributed caching strategy with Redis clustering & TTL-based invalidation, reducing database load by 60% across microservices"
      ],
      detailedWork: [
        {
          title: "Unified Agent Console Platform",
          description: "Architected & delivered a highly scalable platform enabling real-time ticket routing & adaptive PII masking using event-driven processing. Supported 5000+ agents & 500K+ daily interactions with 99.95% availability.",
          technologies: ["Java", "Spring Boot", "Apache Kafka", "Redis", "MySQL", "Docker", "Kubernetes"]
        },
        {
          title: "Agent Assistance System (MCP + GenAI)",
          description: "Architected system with MCP servers integrating GenAI & in-house models, providing real-time response suggestions & customer context retrieval. Reduced average handle time by 25% across 2M+ monthly conversations.",
          technologies: ["Java", "Spring Boot", "MCP Servers", "GenAI APIs", "Redis", "MySQL", "RabbitMQ"]
        },
        {
          title: "Customer Chatbot Backend",
          description: "Engineered chatbot backend with horizontal auto-scaling supporting 20K+ concurrent sessions. Integrated with 20+ backend services via async APIs with p95 latency under 200ms. Designed rule-driven SLA orchestration engine cutting average resolution time by 35%.",
          technologies: ["Java", "Spring WebFlux", "Apache Kafka", "Redis", "MySQL", "AWS ECS", "Docker"]
        }
      ],
      achievements: [
        "99.95% availability across 500K+ daily interactions with 5000+ agents",
        "Reduced average handle time by 25% across 2M+ monthly conversations",
        "Cut average resolution time by 35% via rule-driven SLA orchestration engine",
        "Reduced database load by 60% through Redis clustering & TTL-based invalidation",
        "p95 latency under 200ms across 20K+ concurrent chatbot sessions"
      ]
    },
    {
      id: 3,
      title: "Graduate Trainee – Intern",
      company: "PhonePe",
      logo: "/phonepe.png",
      duration: "Jan 2023 – Jun 2023",
      location: "Bengaluru, India",
      type: "Internship",
      team: "Share.Market",
      responsibilities: [
        "Designed & implemented an RBAC Console with hierarchical role inheritance & in-memory caching, integrating seamlessly across 20+ microservices",
        "Enabled secure authorization for 5,000+ users with sub-10ms permission checks & 99.99% availability, improving access governance & system reliability"
      ],
      detailedWork: [
        {
          title: "RBAC Console",
          description: "Designed & implemented a Role-Based Access Control Console with hierarchical role inheritance & in-memory caching. Integrated seamlessly across 20+ microservices, enabling secure authorization for 5,000+ users with sub-10ms permission checks & 99.99% availability.",
          technologies: ["Java", "Spring Boot", "Redis", "MySQL", "Docker", "Jenkins"]
        }
      ],
      achievements: [
        "Integrated RBAC system across 20+ microservices without disruption",
        "Sub-10ms permission checks with 99.99% availability for 5,000+ users",
        "Improved access governance & system reliability across the platform"
      ]
    }
  ];

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building scalable systems and high-performance platforms across fintech and data infrastructure
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                className="hover:shadow-md transition-shadow duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openModal(experience)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-white rounded-lg border shadow-sm flex items-center justify-center overflow-hidden">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-semibold text-sm">
                            {experience.company}
                          </p>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm ml-16">
                        {experience.duration} · {experience.location}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant={experience.type === "Current" ? "default" : "secondary"}>
                        {experience.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Click for details</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="ml-16">
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in">
          <div className="glass-modal rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            <div className="sticky top-0 glass-header border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg border flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedExperience.logo}
                    alt={`${selectedExperience.company} logo`}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white/95">{selectedExperience.title}</h2>
                  <p className="text-blue-200 text-sm font-medium">{selectedExperience.company} · {selectedExperience.duration}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-300 flex-shrink-0" />
                    <span className="text-sm text-white/90">{selectedExperience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                    <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
                    <span className="text-sm text-white/90">{selectedExperience.location}</span>
                  </div>
                  <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                    <Users className="w-4 h-4 text-blue-300 flex-shrink-0" />
                    <span className="text-sm text-white/90">{selectedExperience.team}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-4 text-white/95">Projects & Work</h3>
                  <div className="space-y-4">
                    {selectedExperience.detailedWork.map((work, index) => (
                      <div key={index} className="glass-work-card border border-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-blue-200 mb-2 text-base">{work.title}</h4>
                        <p className="text-white/80 mb-3 leading-relaxed text-sm">{work.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-white/10 text-white/90 border-white/20 hover:bg-white/15">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-white/95">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 glass-achievement p-3 rounded-lg">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                        <span className="text-white/85 leading-relaxed text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .glass-modal {
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        .glass-header {
          background: rgba(20, 30, 48, 0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }

        .glass-info-card {
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-work-card {
          background: rgba(51, 65, 85, 0.6);
        }

        .glass-achievement {
          background: rgba(51, 65, 85, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out both;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out both;
        }
      `}</style>
    </>
  );
}