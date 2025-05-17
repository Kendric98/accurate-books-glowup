import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Regina Kingori",
      role: "Founder & CEO",
      bio: "A visionary leader with extensive experience in finance and technology, Dr. Kingori founded MyAccurate Books to revolutionize financial management for African SMEs. Her expertise and passion for empowering businesses drives our mission forward.",
      imagePlaceholder: "R",
    },
    {
      name: "Ken Ngugi",
      role: "CTO",
      bio: "Ken leads our technology team, bringing extensive experience in software development and system architecture to create robust and scalable solutions for our clients.",
      imagePlaceholder: "K",
    },
    {
      name: "John Gachoka",
      role: "Customer Success",
      bio: "John ensures that every customer gets the most out of MyAccurate Books, providing exceptional support and training to businesses of all sizes.",
      imagePlaceholder: "J",
    },
    {
      name: "Ken Mburu",
      role: "Backend Engineer",
      bio: "Ken specializes in building secure and efficient backend systems that power our platform's core functionality and ensure reliable performance.",
      imagePlaceholder: "K",
    },
    {
      name: "Pius Gachaga",
      role: "Mobile Engineer",
      bio: "Pius leads our mobile development efforts, creating intuitive and powerful mobile experiences that allow our users to manage their business on the go.",
      imagePlaceholder: "P",
    },
    {
      name: "Ken Lelei",
      role: "Frontend Engineer",
      bio: "Ken crafts beautiful and responsive user interfaces that make financial management intuitive and accessible for all our users.",
      imagePlaceholder: "K",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 mb-8">
              MyAccurate Books is revolutionizing financial management for African SMEs with our innovative cloud-based accounting solution. We're making professional accounting accessible, affordable, and easy to use for businesses across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Beginnings</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2020, MyAccurate Books emerged from a critical need in the African business landscape. We recognized that small and medium-sized enterprises were struggling with complex accounting tasks, often leading to financial mismanagement and missed growth opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began when our founder, Dr. Regina Kingori, identified that existing accounting solutions were either too complex, too expensive, or not adapted to the unique needs of African businesses. With her extensive background in finance and technology, she envisioned a solution that would empower entrepreneurs to take control of their financial future.
              </p>
              <p className="text-lg text-gray-700">
                Today, MyAccurate Books serves thousands of businesses across Kenya, Uganda, Tanzania, Rwanda, and beyond. Our platform has become an essential tool for entrepreneurs, helping them streamline their financial operations, make informed decisions, and focus on growing their businesses.
              </p>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200 to-accurate-blue-200 rounded-lg transform rotate-3"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Business owner using MyAccurate Books"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
              <div className="w-16 h-16 bg-accurate-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                We envision a future where every African business owner, regardless of their accounting knowledge or technical expertise, can confidently manage their finances and make data-driven decisions that drive growth and success.
              </p>
              <p className="text-gray-700">
                Our goal is to contribute to the development of a thriving African business ecosystem where entrepreneurs have access to the tools, knowledge, and support they need to build sustainable enterprises that create jobs, generate wealth, and drive economic development across the continent.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
              <div className="w-16 h-16 bg-accurate-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To empower African SMEs with intuitive, affordable, and powerful accounting solutions that simplify financial management, ensure compliance, and drive business growth. We're committed to making professional accounting accessible to businesses of all sizes.
              </p>
              <p className="text-gray-700">
                We're dedicated to developing technology that addresses the unique challenges faced by African businesses, from unreliable internet connectivity to varying regulatory requirements across different countries. Our platform is built to work seamlessly in the African context, helping businesses thrive in any environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Our Unique Approach"
            subtitle="What makes MyAccurate Books different from other accounting solutions"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-xl font-bold mb-3">Built for African SMEs</h3>
              <p className="text-gray-600">
                Our platform is specifically designed for the unique needs and challenges of African businesses, with features that address local market requirements, tax regulations, and business practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-3">Real-time Financial Insights</h3>
              <p className="text-gray-600">
                Get instant access to your business's financial health with our comprehensive dashboard, featuring cash flow analysis, revenue tracking, and expense management in real-time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold mb-3">Local Payment Integrations</h3>
              <p className="text-gray-600">
                Seamless integration with popular African payment systems including M-Pesa, Airtel Money, and bank transfers, making it easy to track and reconcile all transactions in one place.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-bold mb-3">Advanced Business Analytics</h3>
              <p className="text-gray-600">
                Make data-driven decisions with our powerful analytics tools, featuring customizable reports, trend analysis, and predictive insights to help you understand and grow your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-xl font-bold mb-3">Comprehensive Training</h3>
              <p className="text-gray-600">
                Extensive onboarding, training resources, and ongoing support to ensure businesses can maximize the value of our platform, regardless of their technical expertise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "1s" }}>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regular updates and new features based on user feedback, ensuring our platform evolves to meet the changing needs of African businesses and adapts to new regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="These principles guide everything we do at MyAccurate Books."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We believe that financial management should be accessible to everyone, so we design our software to be intuitive and easy to use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new ways to solve business challenges and improve our platform based on customer feedback.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We're committed to empowering entrepreneurs with the tools and knowledge they need to succeed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We build trustworthy solutions that businesses can depend on day after day for their critical financial operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.8s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">5</div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We place our customers at the center of everything we do, listening to their needs and continuously improving our services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4 text-accurate-purple-600 font-bold text-xl">6</div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and ethical conduct in all our business dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate people behind MyAccurate Books."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">{member.imagePlaceholder}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accurate-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to RWK Africa */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative animate-on-scroll">
              {/* Floating RWK Africa Logo */}
              <div className="absolute -top-12 -right-12 bg-white p-4 rounded-full shadow-xl border border-gray-100 transform rotate-12 hover:rotate-0 transition-all duration-500 z-10 group hover:scale-110 hover:shadow-2xl">
                <div className="relative">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 animate-[shimmer_2s_infinite]"></div>
                  
                  {/* Glowing background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accurate-purple-400/20 to-accurate-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img
                    src="/images/rwk-logo.png"
                    alt="RWK Africa Logo"
                    className="w-32 h-32 object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-accurate-purple-400 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
                    <div className="absolute top-1/4 right-0 w-1 h-1 bg-accurate-blue-400 rounded-full animate-[float_4s_ease-in-out_infinite_0.5s]"></div>
                    <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-accurate-purple-400 rounded-full animate-[float_3.5s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-accurate-blue-400 rounded-full animate-[float_4.5s_ease-in-out_infinite_1.5s]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-blue-200 to-accurate-purple-200 rounded-lg transform -rotate-3"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="RWK Africa Services"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Part of the RWK Africa Ecosystem</h2>
              <p className="text-lg text-gray-700 mb-6">
                MyAccurate Books is proud to be part of the RWK Africa ecosystem, a comprehensive business solutions provider dedicated to empowering African businesses with integrated services and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through this strategic partnership, our customers benefit from:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive business advisory services including strategy development and market analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert financial management and accounting services tailored for African businesses</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tax compliance and regulatory advisory services across multiple African jurisdictions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business process optimization and operational efficiency consulting</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technology integration and digital transformation solutions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to a network of business professionals and industry experts across Africa</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://www.rwkafrica.com" target="_blank" rel="noopener noreferrer">Explore RWK Africa Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the MyAccurate Books Community</h2>
            <p className="text-xl opacity-90 mb-8">
              Become part of a growing network of businesses taking control of their financial future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accurate-purple-600" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
