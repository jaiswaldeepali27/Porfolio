import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: "/skills/Html5.svg",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: "/skills/Javascript.svg",
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: "/skills/React.svg",
  },
  {
    name: "Vue js",
    level: 90,
    category: "frontend",
    icon: "/skills/Vue.svg",
  },
  //   { name: "TypeScript", level: 85, category: "frontend" },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: "/skills/Tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    level: 90,
    category: "frontend",
    icon: "/skills/Bootstrap.svg",
  },
  //   { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: "/skills/Nodejs.svg",
  },
  {
    name: "Express",
    level: 75,
    category: "backend",
    icon: "/skills/Express.svg",
  },
  {
    name: "MySql",
    level: 70,
    category: "backend",
    icon: "/skills/Mysql.svg",
  },
  {
    name: "MongoDB",
    level: 50,
    category: "backend",
    icon: "/skills/Mongodb.svg",
  },
  //   { name: "PostgreSQL", level: 65, category: "backend" },
  //   { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    icon: "/skills/Github.svg",
  },
  //   { name: "Docker", level: 70, category: "tools" },
  {
    name: "Figma",
    level: 55,
    category: "tools",
    icon: "/skills/Figma.svg",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: "/skills/Html5.svg",
  },

  //NoCode
  {
    name: "Wordpress",
    level: 90,
    category: "nocode",
    icon: "/skills/Wordpress.svg",
  },
  {
    name: "Shopify",
    level: 90,
    category: "nocode",
    icon: "/skills/Shopify.svg",
  },
];

const categories = ["all", "frontend", "backend", "tools", "nocode"];

  const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className=" p-6 rounded-lg shadow-xs card-hover hover:border-violet-800 hover:shadow-xs justify-items-center"
            >
              <div className="">
                <img src={skill.icon} width="100px" />
              </div>
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div> */}

              {/* <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;