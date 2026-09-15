export default function AccentText({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="font-script text-[1.25em] leading-none not-italic text-accent">
            {part}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}