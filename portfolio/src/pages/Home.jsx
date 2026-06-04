import Hero from '../components/Hero';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Footer />
    </main>
  );
}
