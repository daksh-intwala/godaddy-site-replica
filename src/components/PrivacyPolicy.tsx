import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-8 flex flex-col gap-4">
          <p className="text-foreground text-sm">
            Download our Privacy Policy as a PDF document:
          </p>
          <a
            href="/privacy-policy.pdf"
            download="HIPAA_Notice_of_Privacy_Practices_Shiloh_Consultations"
          >
            <Button>Download PDF</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
