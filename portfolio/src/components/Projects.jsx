import ProjectItem from './ProjectItem';
import { projects } from '../data/resumeData';

function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
        Projects
      </h2>

      <div>
        {projects.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
