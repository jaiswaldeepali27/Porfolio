import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, This is</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Deepali
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jaiswal,
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> I'm a </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              <Typewriter
                words={[
                  "Full Stack Engineer",
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "React Developer",
                  "WordPress Expert",
                  "Shopify Developer",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Crafting seamless web experiences using MySQL, React, Node.js,
            WordPress & Shopify. Passionate about solving real-world problems
            with clean, scalable code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
