function ProjectItem({ title, description, tech }) {
  return (
    <div className="group relative -mx-4 p-4 rounded-lg hover:bg-amber-50/50 transition-colors duration-200 mb-6">
      <div className="border-l-2 border-stone-300 group-hover:border-amber-600 transition-colors duration-200 pl-6">
        {/* Title */}
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>

        {/* Description */}
        <p className="text-sm text-stone-600 leading-relaxed mt-2">
          {description}
        </p>

        {/* Tech stack badges */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-medium rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
