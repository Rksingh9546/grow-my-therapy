type Props = { name: string; tagline: string; large?: boolean };

export default function Brand({ name, tagline, large }: Props) {
  return (
    <span className="block leading-tight">
      <span className={`block font-serif text-ink ${large ? "text-3xl" : "text-2xl"}`}>{name}</span>
      <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-accent">{tagline}</span>
    </span>
  );
}