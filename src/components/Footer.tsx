import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-text-secondary">
          Copyright © 2025 Shiloh Consultation - All Rights Reserved.
        </p>
        <a href="/privacy-policy.pdf" download="HIPAA_Notice_of_Privacy_Practices_Shiloh_Consultations">
          <p className="text-xs text-primary hover:text-primary-glow underline transition-colors">
            Privacy Policy
          </p>
        </a>
        <p className="text-xs text-text-secondary mt-2">
          Powered by me
        </p>
      </div>
    </footer>
  );
};

export default Footer;