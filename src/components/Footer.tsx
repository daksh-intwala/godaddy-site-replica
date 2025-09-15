const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-text-secondary">
          Copyright © 2025 Shiloh Consultation - All Rights Reserved.
        </p>
        <div className="flex justify-center items-center gap-4 mt-3">
          <a 
            href="/HIPAA_Notice_of_Privacy_Practices_Shiloh_Consultations.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-primary-glow underline transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <p className="text-xs text-text-secondary mt-2">
          Powered by
        </p>
      </div>
    </footer>
  );
};

export default Footer;