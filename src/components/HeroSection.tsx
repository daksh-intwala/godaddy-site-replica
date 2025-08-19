import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-wide">
          SHILOH CONSULTATIONS
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 font-light">
          From first heart beat to last breath
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium"
          >
            <a href="https://app.leaphealth.ai/practice/shiloh-consultations-28156" target="_blank" rel="noopener noreferrer">
              SCHEDULE A CONSULTATION
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium"
          >
            <a href="tel:5404042682">
              CALL
            </a>
          </Button>
        </div>
        
        {/* Hero image */}
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={heroImage} 
            alt="Medical consultation setting with stethoscope and documents" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;