import { Globe } from 'lucide-react';

const logos = [
  { name: 'Geico', svg: <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">GEICO</text></svg> },
  { name: 'Guaranteed Rate', svg: <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="14" fill="currentColor">guaranteed Rate</text></svg> },
  { name: 'Keller Williams', svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="5" y="25" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">kw</text></svg> },
  { name: 'NHL', svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0L40 10L20 40L0 10L20 0Z" fill="currentColor" /><text x="12" y="25" fontFamily="Arial, sans-serif" fontSize="10" fill="white">NHL</text></svg> },
  { name: 'Dominos', svg: <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">Domino's</text></svg> },
  { name: 'Stanford University', svg: <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="14" fill="currentColor">Stanford University</text></svg> },
  { name: 'Y Combinator', svg: <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">Y Combinator</text></svg> },
  { name: 'MLB', svg: <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">MLB</text></svg> },
  { name: 'Mercury', svg: <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">MERCURY</text></svg> },
  { name: 'CO', svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" /><text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">CO</text></svg> },
];

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <p className="text-center text-muted-foreground mb-8">
          Trusted by over 60,000 businesses, from fast-growing startups to world-class institutions.
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-marquee-infinite">
              {logos.map((logo, index) => (
                <div key={index} className="mx-8 flex-shrink-0 flex items-center justify-center h-12 text-muted-foreground hover:text-foreground transition-colors">
                  {logo.svg}
                </div>
              ))}
              {logos.map((logo, index) => (
                <div key={`clone-${index}`} className="mx-8 flex-shrink-0 flex items-center justify-center h-12 text-muted-foreground hover:text-foreground transition-colors" aria-hidden="true">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
