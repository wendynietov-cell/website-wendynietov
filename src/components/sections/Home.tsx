import { Hero }         from './Hero';
import { Marquee }      from './Marquee';
import { Services }     from './Services';
import { Testimonials } from './Testimonials';
import { CTA }          from './CTA';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <Marquee />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
