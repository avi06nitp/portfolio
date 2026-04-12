"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const EARNED_CERTIFICATIONS = [
  {
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "October 2025",
    logo: "https://cdn.simpleicons.org/databricks/FF3621",
    credentialUrl: "https://credentials.databricks.com/26d26904-7855-4ea4-9623-a8a65f24b9e3#acc.gvrHTwBu",
    skills: ["Delta Lake", "Apache Spark", "Unity Catalog", "Delta Live Tables", "Lakehouse Federation"]
  },
  {
    title: "AI Agent Fundamentals",
    issuer: "Databricks",
    date: "October 2025",
    logo: "https://cdn.simpleicons.org/databricks/FF3621",
    credentialUrl: "https://credentials.databricks.com/cf7c7d02-7290-44bc-ab47-f34dbdb2894f",
    skills: ["LLM Agents", "MCP Servers", "Tool Use", "AI Orchestration", "RAG"]
  },
  {
    title: "Redis for Java Developers",
    issuer: "Redis University",
    date: "January 2026",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    credentialUrl: "https://university.redis.io/certificate/gbpiqxj9uoxzex",
    skills: ["Redis Clustering", "TTL Invalidation", "Caching Strategies", "Java Redis Client", "Pub/Sub"]
  }
];

const PURSUING_CERTIFICATIONS = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    description: "Extensive production experience with AWS developer services — Lambda, ECS/EKS, EventBridge, SNS/SQS, CloudWatch, and CI/CD integrations. Applying these daily at Visa while working through structured exam preparation.",
    skills: ["AWS Lambda", "ECS/EKS", "EventBridge", "SNS/SQS", "CloudWatch", "CloudFormation"]
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    description: "Actively designing and operating cloud-native systems at scale — spanning compute, networking, storage, and security services across AWS. Focused exam preparation running in parallel with production cloud work.",
    skills: ["EC2", "ALB/ASG", "S3", "IAM", "VPC", "Lake Formation", "Athena", "Glue"]
  },
  {
    title: "Linux Foundation Certified System Administrator",
    issuer: "Linux Foundation",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    description: "Daily Linux usage across production environments for system administration, shell scripting, process management, and security hardening. Preparing to formally validate hands-on expertise built through years of real-world use.",
    skills: ["Shell Scripting", "Process Management", "Networking", "Security Hardening", "File Systems", "Systemd"]
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials in cloud, data engineering, and AI platforms
          </p>
        </div>

        {/* Earned Certifications */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {EARNED_CERTIFICATIONS.map((cert) => (
            <Card key={cert.title} className="hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden p-1.5">
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/80 uppercase tracking-widest">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
                  </div>
                </div>
                <CardTitle className="text-base font-bold leading-snug">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                      View Credential
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Currently Pursuing */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Currently Pursuing</h3>
            </div>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">Exam-ready — actively preparing</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PURSUING_CERTIFICATIONS.map((cert) => (
              <Card key={cert.title} className="hover:shadow-md transition-shadow duration-300 border-dashed">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden p-1.5">
                      <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground/80 uppercase tracking-widest">{cert.issuer}</p>
                      <Badge variant="secondary" className="text-xs font-medium mt-1 px-1.5 py-0">In Progress</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold leading-snug">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}