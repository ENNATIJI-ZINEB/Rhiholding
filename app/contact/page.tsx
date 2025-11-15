import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – RHI Holding Privé",
  description:
    "Get in touch with RHI Holding Privé. Schedule a consultation or reach out to discuss how we can help transform your business.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Contact Us</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Send us a message
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Email</h4>
                    <a
                      href="mailto:contact@rhi-holding.com"
                      className="text-accent hover:text-primary transition-colors duration-200"
                    >
                      contact@rhiholding.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Phone</h4>
                    <a
                      href="tel:+212522123456"
                      className="text-accent hover:text-primary transition-colors duration-200"
                    >
                      +212 522 218 857 
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Address</h4>
                    <p className="text-gray-700">
                    Bd Dammam,Technopark 
                      <br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-primary mb-4">Follow us</h4>
                  <a
                    href="https://www.linkedin.com/company/rhi-holding-privé/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-primary transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-background-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-sm">Map</p>
                    <p className="text-xs mt-1">Technopark Casablanca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reassuring Text */}
          <div className="mt-12 bg-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Your Confidentiality is Our Priority
            </h3>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We understand the importance of confidentiality in business
              discussions. All information shared with RHI Holding Privé is
              treated with the utmost discretion and security. We provide
              tailored support and strategic guidance while maintaining complete
              confidentiality throughout our partnership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

