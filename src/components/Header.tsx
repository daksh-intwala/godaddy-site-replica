import lotusLogo from '@/assets/lotus-logo.png';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto flex justify-center relative z-10">
        <div className="flex items-center">
          <img 
            src={lotusLogo} 
            alt="Shiloh Consultations" 
            className="h-14 w-auto animate-float drop-shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
