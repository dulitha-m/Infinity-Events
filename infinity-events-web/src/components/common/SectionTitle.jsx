export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="font-label-accent text-secondary mb-4 block tracking-[0.2em]">{subtitle}</span>
      )}
      <h2 className="font-headline-lg text-white">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-primary-container to-transparent mt-6 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
