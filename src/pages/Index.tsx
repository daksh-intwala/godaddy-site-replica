import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DoctorSection from '@/components/DoctorSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DoctorSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Index;
