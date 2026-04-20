import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function RightPane() {
  return (
    <main className="lg:w-7/12 bg-white min-h-screen px-8 py-16 lg:px-16 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}

export default RightPane;
