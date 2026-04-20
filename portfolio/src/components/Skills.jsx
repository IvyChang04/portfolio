import SkillCategory from './SkillCategory';
import { skillCategories } from '../data/resumeData';

function Skills() {
  return (
    <section id="skills" className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <div
            key={i}
            className={category.span === 2 ? 'md:col-span-2' : ''}
          >
            <SkillCategory name={category.name} skills={category.skills} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
