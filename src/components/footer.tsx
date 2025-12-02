export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border/50">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          ¡Allillanchu! &copy; {currentYear} QuechuaQuick
        </p>
      </div>
    </footer>
  );
}
