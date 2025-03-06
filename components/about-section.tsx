import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Code2, Laptop, Globe, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Abinaya</span>, a passionate Full Stack Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I specialize in building modern, efficient, and user-friendly web applications. With experience in both front-end and back-end technologies, I love creating seamless digital experiences. My expertise spans React, Next.js, TypeScript, MongoDB, and MySQL, allowing me to build scalable and performant applications. 
            </p>
            <p className="text-muted-foreground mb-8">
              Currently, I am working on <span className="text-primary">Elito</span>, a cake-buying and selling platform that simplifies the process of finding high-quality cakes in Sri Lanka. My goal is to transform this platform into a real-time business, making cake shopping effortless and enjoyable for buyers and sellers alike.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Code2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">Writing maintainable, efficient code</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Laptop className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Responsive Design</h4>
                    <p className="text-sm text-muted-foreground">Creating seamless experiences across devices</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Web Performance</h4>
                    <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Working effectively in teams</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[35rem] h-[32rem] sm:w-[30rem] sm:h-[30rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-70"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary">
                <Image 
                  src="/About.jpg" 
                  alt="" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
