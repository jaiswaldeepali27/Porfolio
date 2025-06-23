import { Code, RouteIcon, Settings2Icon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, high-performance web applications using
              React, Node.js, Express, and MySQL. I also build custom websites
              on WordPress and Shopify, helping businesses establish a powerful
              online presence.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving real-world problems with clean code
              and scalable architecture. Always learning and adapting, I stay on
              the cutting edge of technology to deliver elegant and efficient
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/src/assets/cv/deepali-jaiswal.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and dynamic web applications
                    using modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Settings2Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">WordPress & Shopify</h4>
                  <p className="text-muted-foreground">
                    Developing SEO-friendly, custom WordPress and Shopify
                    websites tailored for business growth and eCommerce success.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <RouteIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating third-party APIs and developing custom RESTful
                    APIs to connect apps, services, and databases seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
