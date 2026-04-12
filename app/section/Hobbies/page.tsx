"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Trophy, Zap, Brain, Heart } from "lucide-react";

const HOBBIES = [
  {
    name: "Badminton",
    icon: Trophy,
    tagline: "Weekend play for agility & reflexes",
    stats: null,
    note: "Not chasing numbers — just sharp footwork and faster reactions."
  },
  {
    name: "Running",
    icon: Zap,
    tagline: "Distance Runner",
    stats: [{ value: "2:05:54", label: "Half Marathon" }],
    note: null
  },
  {
    name: "Chess",
    icon: Brain,
    tagline: "Casual Player",
    stats: [{ value: "720", label: "Peak Rating" }],
    note: null
  },
  {
    name: "Strength Training",
    icon: Heart,
    tagline: "Consistent & disciplined",
    stats: [{ value: "4×", label: "Per Week" }],
    note: null
  }
];

export default function Hobbies() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Beyond Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where passion meets performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {HOBBIES.map((hobby) => {
            const IconComponent = hobby.icon;
            return (
              <Card key={hobby.name} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-foreground">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{hobby.tagline}</p>

                  {hobby.stats ? (
                    <div className={`grid gap-3 ${hobby.stats.length > 1 ? "grid-cols-" + hobby.stats.length : "grid-cols-1"}`}>
                      {hobby.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-2xl font-black text-foreground leading-none">{s.value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground leading-relaxed italic">{hobby.note}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}