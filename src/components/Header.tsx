import lotusLogo from '@/assets/lotus-logo.png';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="flex items-center">
          <img 
            src={lotusLogo} 
            alt="Shiloh Consultations" 
            className="h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;