import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiGit } from "react-icons/si";
import { DiReact } from "react-icons/di";

import {
  Code2, Server,
  Smartphone, Terminal, Figma,
  Github, Laptop
} from "lucide-react";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "HTML 5", icon: <FaHtml5 className="h-7 w-7" /> },
    { name: "CSS 3", icon: <IoLogoCss3 className="h-7 w-7" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-7 w-7" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-7 w-7" /> },
    { name: "React", icon: <DiReact className="h-7 w-7" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-7 w-7" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="h-7 w-7" /> },
    { name: "Express", icon: <SiExpress className="h-7 w-7" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-7 w-7" /> },
  ];

  const otherSkills = [
    { name: "Git", icon: <SiGit className="h-7 w-7" /> },
    { name: "GitHub", icon: <Github className="h-7 w-7" /> },
    { name: "Figma", icon: <Figma className="h-7 w-7" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-7 w-7" /> },
    { name: "Testing", icon: <Terminal className="h-7 w-7" /> },
    { name: "AWS", icon: <FaAws className="h-7 w-7" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks throughout my career.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Laptop className="mr-2 h-6 w-6 text-primary" />
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 justify-center gap-3">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span className="mr-1.5 text-primary">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Server className="mr-2 h-6 w-6 text-primary" />
              Backend Development
            </h3>
            <div className="grid grid-cols-1 justify-center gap-3">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span className="mr-1.5 text-primary">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code2 className="mr-2 h-6 w-6 text-primary" />
              Other Skills
            </h3>
            <div className="grid grid-cols-2 justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span className="mr-1.5 text-primary">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}