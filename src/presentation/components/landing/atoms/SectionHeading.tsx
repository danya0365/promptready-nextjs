interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
