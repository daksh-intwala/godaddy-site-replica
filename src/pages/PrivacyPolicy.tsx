import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

        <div className="bg-card rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">SHILOH CONSULTATIONS</h1>
            <h2 className="text-2xl font-semibold text-foreground">Notice of Privacy Practices</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              This notice describes how protected health information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium">If you have any questions about this notice please contact:</p>
              <div className="mt-2 space-y-1">
                <p>Meredith Arthur, DO</p>
                <p>4533 Brambleton Ave, suite 11</p>
                <p>Roanoke, VA 24018</p>
                <p>https://shilohconsultations.org</p>
                <p>(540) 404-2682</p>
              </div>
            </div>

            <section>
              <p className="text-sm leading-relaxed">
                It is the policy of Shiloh Consultations to provide you with a privacy notice that explains how your healthcare information is being used or disclosed. Shiloh Consultations is required by law to maintain the privacy of your protected health information and provide a notice of its legal duties and privacy practices with respect to protected health information.
              </p>
            </section>

            <section>
              <p className="text-sm leading-relaxed">
                This Notice of Privacy Practices describes how Shiloh Consultations may use and disclose your protected health information to carry out treatment, payment or health care operations and for other purposes that are permitted or required by state or federal law. It also describes your rights to access and control your protected health information. "Protected health information" is information related to your past, present or future physical or mental health or condition and related health care services, including demographics that may identify you.
              </p>
            </section>

            <h3 className="text-xl font-semibold text-primary">1. USES AND DISCLOSURES OF PROTECTED HEALTH INFORMATION</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">For Treatment:</h4>
                <p className="text-sm leading-relaxed">
                  We may use protected health information about you to provide you with medical treatment or services. We may disclose protected health information about you to doctors, nurses, technicians, or other healthcare personnel who are involved in your treatment. For example, a clinician treating you for an infection may need to know if you have another condition that could affect your treatment plan and recovery.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">For Payment:</h4>
                <p className="text-sm leading-relaxed">
                  We may use and disclose protected health information about you so that the treatment and services you receive may be billed to and payment may be collected from you, an insurance company or a third party. For example, we may use your protected health information from a procedure you received at the clinic so that the department can be reimbursed.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">For Health Care Operations:</h4>
                <p className="text-sm leading-relaxed">
                  We may use and disclose protected health information about you for health care operations. These activities may include quality assessment and improvement activities, reviewing the competence or qualifications of health care professionals, evaluating practitioner and provider performance, conducting training programs, accreditation, certification, licensing or credentialing activities.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg mt-8">
              <p className="text-sm text-center text-muted-foreground">
                This is a summary of our HIPAA Notice of Privacy Practices. For the complete document, please contact our office at (540) 404-2682.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;