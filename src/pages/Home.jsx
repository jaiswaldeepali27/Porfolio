// import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
// import { useEffect } from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';

const Home = () => {
  // useEffect(() => {
  //     const storedTheme = localStorage.getItem("theme")
  //     if (storedTheme === "dark") {
  //         document.documentElement.classList.add("dark");
  //     } 
  // }, []);

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        {/* <ThemeToggle/> */}
        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <ExperienceSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
        </main>
        {/* Footer */}
    </div>
  )
}

export default Home