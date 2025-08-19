import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowNotice(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-primary text-primary-foreground p-6 rounded-lg shadow-lg z-50">
      <h4 className="font-semibold mb-2">This website uses cookies.</h4>
      <p className="text-sm mb-4 opacity-90">
        We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
      </p>
      <Button 
        onClick={handleAccept}
        variant="secondary"
        className="w-full bg-primary-foreground text-primary hover:bg-opacity-90"
      >
        ACCEPT
      </Button>
    </div>
  );
};

export default CookieNotice;