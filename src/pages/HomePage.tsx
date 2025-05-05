
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:pr-8 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600">Simplify</span> Your Business Finances
              </h1>
              <p className="text-xl text-gray-700 mb-8 text-balance">
                MyAccurate Books is an intuitive cloud-based accounting solution designed for small and medium-sized enterprises without requiring prior accounting knowledge.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>
              <div className="mt-12">
                <p className="text-sm font-medium text-gray-500 mb-3">
                  TRUSTED BY BUSINESSES ACROSS AFRICA
                </p>
                <div className="flex flex-wrap gap-8 items-center opacity-70">
                  <span className="font-bold text-lg text-gray-400">Company Logo</span>
                  <span className="font-bold text-lg text-gray-400">Company Logo</span>
                  <span className="font-bold text-lg text-gray-400">Company Logo</span>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200 to-accurate-blue-200 rounded-lg transform rotate-1"></div>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="MyAccurate Books dashboard preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accurate-purple-600 text-white rounded-lg p-4 shadow-lg">
                  <p className="font-bold">No accounting knowledge required!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Streamline Your Business Operations"
            subtitle="MyAccurate Books provides all the essential tools to help SMEs manage their finances with confidence and ease."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Point of Sale (POS)"
              description="Easily process sales, track inventory, and manage customer transactions all in one place."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
                  <path d="M10 13h4" />
                  <path d="M7 16h.01" />
                  <path d="M17 16h.01" />
                  <path d="M5 5h14" />
                </svg>
              }
            />
            <FeatureCard
              title="Customer Management"
              description="Build and maintain customer relationships with detailed profiles, histories, and communication tools."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <FeatureCard
              title="Item Management"
              description="Track stock levels, set reorder points, and manage product details efficiently."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M20 7h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                  <path d="M16 3h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8" />
                  <path d="M12 12h.01" />
                </svg>
              }
            />
            <FeatureCard
              title="Payments Integration"
              description="Accept multiple payment methods including Mpesa, bank transfers, and cash with seamless integration."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              }
            />
            <FeatureCard
              title="Multi-User Access"
              description="Control what your employees can see and do within the system with role-based permissions."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <FeatureCard
              title="Cloud-Based Solution"
              description="Access your business data anytime, anywhere, from any device with secure cloud storage."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              }
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="How MyAccurate Books Works"
            subtitle="Get your business finances under control in three simple steps."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600">Create your account and set up your business profile with our simple onboarding process.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Input Your Data</h3>
              <p className="text-gray-600">Add your products, services, and customer information with our guided setup wizard.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Start Managing</h3>
              <p className="text-gray-600">Begin recording transactions, generating reports, and gaining insights into your business performance.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Businesses across Africa trust MyAccurate Books to manage their finances and streamline operations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MyAccurate Books has transformed how we manage our finances. The interface is intuitive, and we no longer need an accountant for day-to-day bookkeeping."
              name="Sarah Kimani"
              role="Owner"
              company="Nairobi Crafts"
            />
            <TestimonialCard
              quote="As someone with no accounting background, this software has been a lifesaver. I can now track all my business finances with confidence."
              name="David Ochieng"
              role="Founder"
              company="Tech Solutions Ltd"
            />
            <TestimonialCard
              quote="The customer management feature has helped us build better relationships with our clients. We can now track their purchase history and preferences easily."
              name="Amina Hassan"
              role="Manager"
              company="Coastal Supplies"
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Business Finances?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of SMEs across Africa who are simplifying their accounting with MyAccurate Books.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accurate-purple-600" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
