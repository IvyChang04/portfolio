function SkillCategory({ name, skills }) {
  return (
    <div className="bg-stone-100/80 border border-stone-200 p-6 rounded-2xl">
      {/* Category name */}
      <h3 className="text-base font-bold text-slate-800 mb-4 tracking-wide">
        {name}
      </h3>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
