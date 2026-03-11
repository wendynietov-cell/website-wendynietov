'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">
          Bienvenido a Next.js
        </h1>
        <p className="text-center text-lg text-foreground/80">
          Tu sitio web ha sido migrado exitosamente a Next.js 16.1.6
        </p>
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            Servidor corriendo en: <span className="text-primary font-mono">http://localhost:3000</span>
          </p>
        </div>
      </div>
    </div>
  );
}
