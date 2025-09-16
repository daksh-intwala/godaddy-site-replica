import { useState } from 'react';
import { Button } from '@/components/ui/button';
import drArthurImage from '@/assets/dr-arthur.png';

const DoctorSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Doctor image with creative styling */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-3xl">
                <img 
                  src={drArthurImage} 
                  alt="Dr. Meredith Arthur" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Doctor information */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-text-primary mb-8">
              Dr. Meredith Arthur
            </h2>
            
            <div className="text-lg text-text-primary leading-relaxed space-y-4">
              <p>
                <strong>Dr. Meredith Arthur</strong> specializes in improving patients' quality of life by addressing both physical symptoms and emotional well-being. Dr. Arthur ensures patients and families have the information they need to make informed decisions about care—whether focused on cure, symptom management, or end-of-life comfort.
              </p>
              
              <p className="font-semibold">Her approach includes:</p>
              
              {!showMore ? (
                <>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Goals</strong></li>
                  </ul>
                  <Button 
                    onClick={() => setShowMore(true)}
                    variant="link"
                    className="p-0 h-auto text-primary underline"
                  >
                    Show More
                  </Button>
                </>
              ) : (
                <>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Goals of Care</strong>: Empowering patients and families to take control of healthcare decisions. Dr. Arthur will help you communicate your values and preferences to your medical team, ensuring the care provided is as personalized and effective as possible—whether the focus is on cure, symptom relief, or comfort.
                    </li>
                    <li>
                      <strong>Symptom Management</strong>: Addressing physical symptoms like pain, nausea, fatigue, and more.
                    </li>
                    <li>
                      <strong>ADHD Care</strong>: Providing evaluation, diagnosis, and medication management for children and teens.
                    </li>
                    <li>
                      <strong>Complex Pediatric Care</strong>: Specialized care for children with multiple or rare health conditions, combining medical and developmental needs, and supporting patients and families dealing with health-related stress.
                    </li>
                    <li>
                      <strong>Perinatal Conversations</strong>: Offering guidance for families facing fetal anomalies or genetic findings, discussing their long-term implications, and exploring treatment options, delivery plans, and alternative approaches to care.
                    </li>
                    <li>
                      <strong>Advanced Care Planning</strong>: Assisting patients and families in navigating tough decisions, including end-of-life care.
                    </li>
                  </ul>
                  
                  <p className="mt-6">
                    Dr. Arthur collaborates closely with primary care providers and specialists to ensure coordinated, compassionate care at every stage of illness.
                  </p>
                  
                  <Button 
                    onClick={() => setShowMore(false)}
                    variant="link"
                    className="p-0 h-auto text-primary underline"
                  >
                    Show Less
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;