"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Elito",
      description: "An online marketplace for buying and selling cakes with user authentication, role-based dashboards, secure Stripe payments, and product management.",
      image: "/Elito.png",
      tags: [" HTML5","CSS3","JavaScript","React", "Next.js", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      demoUrl: "https://elito-cakes.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Plantex",
      description: "An interactive plant care and e-commerce site featuring categorized plant listings, educational content, and Firebase-powered dynamic data.",
      image: "/Plantex.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://abinaya-indran.github.io/Assignment-9-plants/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Coffee Website",
      description: "A modern, responsive coffee shop website with engaging UI, product showcases, and interactive animations for a seamless browsing experience.",
      image: "/Coffee.png",
      tags: ["HTML5", "CSS3"],
      demoUrl: "https://abinaya-indran.github.io/Assignment07_Abinaya/",
      githubUrl: "#",
      category: "frontend"
    },
    // {
    //   id: 4,
    //   title: "RESTful API Service",
    //   description: "A scalable RESTful API service for a content management system with authentication and authorization.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   category: "backend"
    // },
    // {
    //   id: 5,
    //   title: "Weather Forecast App",
    //   description: "A weather forecast application with location detection, 5-day forecasts, and interactive maps.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   tags: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   category: "frontend"
    // },
    // {
    //   id: 6,
    //   title: "Real-time Chat Application",
    //   description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
    //   image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   tags: ["Socket.io", "React", "Node.js", "MongoDB", "Redux"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   category: "fullstack"
    // },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card group">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      </Link>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}