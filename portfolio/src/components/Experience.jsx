import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/resumeData';
import { RESUME_URL } from '../data/constants';

function Experience() {
  return (
    <section id="experiences" className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
        Experience
      </h2>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>

      {/* View Full Resume link */}
      {/* <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline decoration-stone-300 underline-offset-4 hover:decoration-slate-900 transition-colors duration-200 mt-4"
      >
        View Full Resume
        <span className="text-stone-400">→</span>
      </a> */}
    </section>
  );
}

export default Experience;
