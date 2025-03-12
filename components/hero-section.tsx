"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = ["Full-Stack Web Developer", "UI/UX Designer"];
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setDisplayText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(interval);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>

      {/* Purple circles in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto p-4 flex flex-col lg:flex-row justify-between items-center z-10">
        <div className=" relative z-10">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Abinaya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
              <span className="text-primary">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-center xl:text-start md:text-xl max-w-2xl mb-10 text-muted-foreground">
              I build beautiful, responsive, and user-friendly web applications
              with modern technologies. Let's bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1JxjLu9oZeg6icaje9NIXx_6Uvm5xPW3p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group">
                  View My CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full xl:w-1/2 mt-28 lg:mt-0 h-[25rem] lg:h-[35rem] flex items-center justify-center z-10">
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-xl xl:rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 rotate-12"></div>
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-xl xl:rounded-3xl overflow-hidden">
            <Image
              src="/Hero.jpg"
              alt="Abinaya"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
