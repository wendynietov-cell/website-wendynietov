import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { ProblemSolutionSplit } from "@/components/ProblemSolutionSplit";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Wendy Nieto`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm mb-10"
        >
          <ArrowLeft size={16} />
          Todos los servicios
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-primary/10 rounded-2xl">
            <service.icon size={36} className="text-primary" />
          </div>
          <div>
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Servicio</p>
            <h1 className="text-3xl md:text-5xl font-black">{service.title}</h1>
          </div>
        </div>

        <p className="text-white/60 text-xl mb-4 max-w-2xl">{service.shortDesc}</p>

        <ProblemSolutionSplit
          title={service.title}
          problem={service.problem}
          solution={service.solution}
          metrics={service.metrics}
        />
      </div>
    </main>
  );
}
