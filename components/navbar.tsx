"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Github, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="gradient-text text-2xl font-bold">Dev ABINAYA</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-3 px-3 py-2">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}