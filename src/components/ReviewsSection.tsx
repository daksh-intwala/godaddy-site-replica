import reviewImage from '@/assets/review-1.png';

const ReviewsSection = () => {
  return (
    <section className="w-full bg-secondary py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Real Patients. Real Reviews.
        </h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* 3D card with shadow and border effects */}
            <div className="relative group">
              {/* Shadow layers for 3D effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/10 to-transparent rounded-lg blur opacity-50"></div>
              
              {/* Main card */}
              <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-2xl">
                <img
                  src={reviewImage}
                  alt="Patient review"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;