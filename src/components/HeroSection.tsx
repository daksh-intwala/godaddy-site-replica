import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 text-center relative z-10">
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-primary to-medical-green-light bg-clip-text text-transparent mb-6 tracking-wide animate-gradient-shift bg-[length:200%_auto]">
          SHILOH CONSULTATIONS
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 font-light">
          From first heart beat to last breath
        </p>
        
        {/* Action buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:animate-glow"
          >
            <a href="https://app.leaphealth.ai/practice/shiloh-consultations-28156" target="_blank" rel="noopener noreferrer">
              SCHEDULE A CONSULTATION
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:animate-glow"
          >
            <a href="tel:5404042682">
              CALL
            </a>
          </Button>
        </div>
        
        {/* Hero image with enhanced styling */}
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={heroImage} 
            alt="Medical consultation setting with stethoscope and documents" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;