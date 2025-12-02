export default function AudioWave() {
  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-2 w-2 animate-ping rounded-full bg-accent-foreground/70"
          style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.2s' }}
        />
      ))}
    </div>
  );
}
