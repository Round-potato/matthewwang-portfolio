// src/App.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import SiteBackground from "./components/SiteBackground";  // <-- add
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      {/* global subtle background */}
      <SiteBackground />

      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />        {/* has its own more lively SheepFlock */}
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}