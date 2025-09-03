import mapImage from '@/assets/map-image.png';

const ContactSection = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Shiloh Consultations
              </h3>
              <p className="text-lg text-text-primary mb-4">
                4533 Brambleton Ave, Suite 11, Roanoke, VA - 24018
              </p>
              <p className="text-lg text-text-primary">
                Ph: <a href="tel:5404042682" className="text-primary hover:underline">(540)-404-2682</a>
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Hours</h4>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">Open today</span>
                  <span className="text-text-primary">09:00 am – 05:00 pm</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map image with enhanced styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={mapImage} 
                alt="Location map for Shiloh Consultation" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Location pin effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-ping z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
