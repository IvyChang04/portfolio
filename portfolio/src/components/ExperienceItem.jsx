function ExperienceItem({ role, company, time, location, description, tags }) {
  return (
    <div className="group relative -mx-4 p-4 rounded-lg hover:bg-amber-50/50 transition-colors duration-200 mb-8">
      <div className="border-l-2 border-stone-300 group-hover:border-amber-600 transition-colors duration-200 pl-6">
        {/* Date */}
        <p className="text-xs text-stone-400 uppercase tracking-wide font-medium">
          {time}
        </p>

        {/* Title + Company */}
        <h3 className="text-base font-semibold text-slate-900 mt-1">
          {role}{' '}
          <span className="text-stone-400 font-normal">·</span>{' '}
          <span className="text-stone-600 font-medium">{company}</span>
        </h3>

        {/* Location */}
        <p className="text-xs text-stone-400 mt-0.5">{location}</p>

        {/* Description */}
        <p className="text-sm text-stone-600 leading-relaxed mt-2">
          {description}
        </p>

        {/* Tech tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
