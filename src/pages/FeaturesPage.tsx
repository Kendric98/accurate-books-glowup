
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Your Business</h1>
            <p className="text-xl text-gray-700 mb-8">
              MyAccurate Books provides all the tools you need to manage your finances without any accounting knowledge.
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Core Features"
            subtitle="Discover how MyAccurate Books can help streamline your business operations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Point of Sale (POS)"
              description="Process sales quickly, print receipts, and track inventory movements in real-time."
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
              description="Build and maintain customer profiles with purchase history, communication logs, and custom notes."
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
              description="Track inventory levels, set reorder points, and manage product details effortlessly."
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
              description="Accept multiple payment methods including Mpesa, bank transfers, and cash with automatic reconciliation."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              }
            />
            <FeatureCard
              title="Multi-User Access"
              description="Grant different access levels to team members based on their roles and responsibilities."
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
              title="Financial Reports"
              description="Generate income statements, balance sheets, and cash flow reports with a single click."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Point of Sale System</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our intuitive point of sale system helps you process transactions quickly and efficiently. Record sales, generate receipts, and track inventory all in one place.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>User-friendly interface for quick transaction processing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic inventory adjustment with each sale</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple payment method support</span>
                </li>
              </ul>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200 to-accurate-blue-200 rounded-lg transform rotate-2"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Point of Sale System"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Feature Spotlight */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-blue-200 to-accurate-purple-200 rounded-lg transform -rotate-2"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Customer Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Customer Management</h2>
              <p className="text-lg text-gray-700 mb-6">
                Build stronger customer relationships by keeping track of all customer interactions and purchase history in one centralized system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete customer profiles with contact information</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Purchase history and payment tracking</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer segmentation for targeted marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Coming Soon"
            subtitle="We're constantly improving MyAccurate Books. Here are some features we're working on."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll">
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
                  <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                  <path d="M16 11h0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Petty Cash Management</h3>
              <p className="text-gray-600">
                Track small expenses and maintain petty cash balances with detailed logs and reports.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Payroll System</h3>
              <p className="text-gray-600">
                Calculate salaries, manage employee payments, and handle statutory deductions automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
              <p className="text-gray-600">
                Gain deeper insights into your business performance with customizable dashboards and reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Business Finances?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of SMEs across Africa who are already benefiting from MyAccurate Books.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/pricing">See Pricing Plans</Link>
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

export default FeaturesPage;
