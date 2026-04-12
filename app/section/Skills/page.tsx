"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Code, Network, Radio, Database, Cloud, ShieldCheck, Box, Webhook, Layers, Activity, Shield } from "lucide-react";

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Microservices":        Box,
  "Event-Driven Systems": Webhook,
  "Distributed Caching":  Layers,
  "High Availability":    Activity,
  "Fault Tolerance":      Shield,
};

const AWS = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
const DATABRICKS = "https://cdn.simpleicons.org/databricks/FF3621";

const SKILL_LOGOS: Record<string, string> = {
  // Backend & Frameworks
  "Java":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Python":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Spring Boot":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "Spring WebFlux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  // Messaging & Streaming
  "Apache Kafka": "https://cdn.simpleicons.org/apachekafka/ffffff",
  "RabbitMQ":     "https://cdn.simpleicons.org/rabbitmq/FF6600",
  "AWS SNS":      AWS,
  "AWS SQS":      AWS,
  // Databases & Caching
  "MySQL":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "PostgreSQL":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Redis":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
  // Cloud & Data Platforms — AWS
  "AWS EC2":       AWS,
  "ECS/EKS":       AWS,
  "S3":            AWS,
  "Lambda":        AWS,
  "EventBridge":   AWS,
  "CloudWatch":    AWS,
  "Lake Formation":AWS,
  "Glue":          AWS,
  "Athena":        AWS,
  // Cloud & Data Platforms — Databricks
  "Databricks Unity Catalog": DATABRICKS,
  "Delta Lake":               DATABRICKS,
  "Delta Live Tables":        DATABRICKS,
  "Lakehouse Federation":     DATABRICKS,
  // DevOps & Security
  "Linux":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Git":            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Docker":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Kubernetes":     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  "Jenkins":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "SonarQube":      "https://cdn.simpleicons.org/sonarqube/4E9BCD",
};

const SKILLS_CATEGORIES = [
  {
    title: "Backend & Frameworks",
    icon: Code,
    iconColor: "text-blue-400",
    skills: ["Java", "Python", "Spring Boot", "Spring WebFlux"],
    description: "Core languages and backend frameworks"
  },
  {
    title: "Architecture & Design",
    icon: Network,
    iconColor: "text-slate-300",
    skills: ["Microservices", "Event-Driven Systems", "Distributed Caching", "High Availability", "Fault Tolerance"],
    description: "System design and distributed architecture"
  },
  {
    title: "Messaging & Streaming",
    icon: Radio,
    iconColor: "text-green-400",
    skills: ["Apache Kafka", "RabbitMQ", "AWS SNS", "AWS SQS"],
    description: "Async messaging and event streaming"
  },
  {
    title: "Databases & Caching",
    icon: Database,
    iconColor: "text-purple-400",
    skills: ["MySQL", "PostgreSQL", "Redis", "Memcached", "Elasticsearch"],
    description: "Data storage, caching, and search"
  },
  {
    title: "Cloud & Data Platforms",
    icon: Cloud,
    iconColor: "text-orange-400",
    skills: [
      "AWS EC2", "ECS/EKS", "S3", "Lambda", "EventBridge", "CloudWatch",
      "Lake Formation", "Glue", "Athena",
      "Databricks Unity Catalog", "Delta Lake", "Delta Live Tables", "Lakehouse Federation"
    ],
    description: "AWS services and Databricks ecosystem"
  },
  {
    title: "DevOps & Security",
    icon: ShieldCheck,
    iconColor: "text-rose-400",
    skills: ["Linux", "Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "SonarQube", "Checkmarx", "Sonatype"],
    description: "CI/CD, containerization, and SAST/SCA"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building reliable, high-performance distributed systems with a focus on scalability and security.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-base font-bold">
                    <div className="p-2 rounded-lg bg-secondary">
                      <IconComponent className={`w-4 h-4 ${category.iconColor}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-xs">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const logo = SKILL_LOGOS[skill];
                      const LucideIcon = SKILL_ICONS[skill];
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground border border-border/40"
                        >
                          {logo && (
                            <img
                              src={logo}
                              alt={skill}
                              className="w-3.5 h-3.5 object-contain flex-shrink-0"
                              loading="lazy"
                            />
                          )}
                          {!logo && LucideIcon && (
                            <LucideIcon className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground" />
                          )}
                          {skill}
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