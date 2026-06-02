import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Education    from "./components/Education";
import Projects     from "./components/Projects";
import Certificates from "./components/Certificates";
import Events       from "./components/Events";
import Documents    from "./components/Documents";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <div data-theme="rebeca" className="min-h-screen bg-choco text-pearl">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certificates />
      <Events />
      <Documents />
      <Footer />
    </div>
  );
}
