import { education } from '../data/resumeData';

function About() {
  return (
    <section id="about" className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">
        About
      </h2>

      <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
        <p>
          I'm a software engineer with a passion for building performant, scalable systems 
          that bridge cutting-edge AI with real-world applications. Currently at{' '}
          <span className="text-slate-900 font-medium">Sweep Digital Inc.</span>, 
          I architect full-stack analytics platforms powered by event-driven RAG systems, 
          fine-tuned ML models, and cloud-native infrastructure — transforming tens of 
          thousands of user events into structured, actionable insights.
        </p>

        <p>
          My background spans GPU-accelerated computing, mobile development, and 
          cybersecurity. I hold a{' '}
          <span className="text-slate-900 font-medium">
            M.S. in Computer Science from California State University, Fullerton
          </span>{' '}
          (GPA: 3.93) and a{' '}
          <span className="text-slate-900 font-medium">
            B.S. from National Central University
          </span>{' '}
          (GPA: 3.94), where I earned the Judge's Award in the Special Project 
          Competition. I'm also{' '}
          <span className="text-slate-900 font-medium">CompTIA Security+ certified</span>{' '}
          and competed in the Western Regional Collegiate Cyber Defense Competition (WRCCDC).
        </p>

        <p>
          When I'm not writing code, I'm exploring the intersection of AI and developer 
          tooling — from building ATS-beating trend trackers with distributed big data 
          pipelines, to training GANs that can generate entire Chinese font families from 
          just a handful of reference characters.
        </p>
      </div>

      {/* Education */}
      <div className="mt-12 space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="group">
            <p className="text-sm font-semibold text-slate-900">{edu.school}</p>
            <p className="text-sm text-stone-500 mt-0.5">
              {edu.degree} · GPA: {edu.gpa}
            </p>
            {edu.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.highlights.map((h, j) => (
                  <span
                    key={j}
                    className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
