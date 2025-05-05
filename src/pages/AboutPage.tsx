
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jane Mwangi",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in accounting and finance, Jane founded MyAccurate Books to help SMEs across Africa simplify their financial management.",
      imagePlaceholder: "J",
    },
    {
      name: "David Omondi",
      role: "CTO",
      bio: "David leads our technology team, bringing 10+ years of software development experience to create intuitive and powerful solutions for businesses.",
      imagePlaceholder: "D",
    },
    {
      name: "Sarah Kimani",
      role: "Head of Customer Success",
      bio: "Sarah ensures that every customer gets the most out of MyAccurate Books, providing training and support to businesses of all sizes.",
      imagePlaceholder: "S",
    },
    {
      name: "John Kamau",
      role: "Chief Financial Officer",
      bio: "John oversees our financial operations and ensures that MyAccurate Books meets the highest standards of financial accuracy and compliance.",
      imagePlaceholder: "J",
    },
    {
      name: "Faith Njeri",
      role: "Head of Marketing",
      bio: "Faith leads our marketing initiatives, helping businesses across Africa discover how MyAccurate Books can transform their financial management.",
      imagePlaceholder: "F",
    },
    {
      name: "Michael Waweru",
      role: "Lead Developer",
      bio: "Michael works tirelessly to enhance our platform's features and ensure a seamless user experience for all our clients.",
      imagePlaceholder: "M",
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
              MyAccurate Books was founded with a mission to empower SMEs across Africa with simple, affordable accounting solutions.
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
                Founded in 2020, MyAccurate Books emerged from a simple observation: small business owners across Africa were spending valuable time struggling with accounting tasks instead of focusing on growth.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began when our founder, Jane Mwangi, noticed that existing accounting solutions were either too complex or too expensive for most African SMEs. With her background in finance and passion for supporting local entrepreneurs, she set out to create something different.
              </p>
              <p className="text-lg text-gray-700">
                Today, MyAccurate Books serves thousands of businesses in Kenya, Uganda, Tanzania, Rwanda, and beyond, with a growing team of dedicated professionals committed to simplifying financial management for entrepreneurs.
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
                To create a world where every business owner, regardless of their accounting knowledge, can confidently manage their finances and make informed business decisions.
              </p>
              <p className="text-gray-700">
                We envision a thriving African business ecosystem where entrepreneurs have the tools they need to build sustainable enterprises that contribute to economic growth and community development.
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
                To provide small and medium-sized enterprises with intuitive, affordable, and powerful accounting solutions that simplify financial management and drive business growth.
              </p>
              <p className="text-gray-700">
                We're committed to developing technology that addresses the unique challenges faced by African businesses, from unreliable internet connectivity to varying regulatory requirements across different countries.
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
                Unlike global solutions that try to be everything to everyone, MyAccurate Books is specifically designed for the unique needs and challenges of small businesses in African markets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-3">Works Online and Offline</h3>
              <p className="text-gray-600">
                We understand that internet connectivity can be unreliable in some regions, so our system is designed to work offline and sync data when connectivity is restored.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold mb-3">Local Payment Integrations</h3>
              <p className="text-gray-600">
                Our platform seamlessly integrates with popular African payment systems like M-Pesa, ensuring that businesses can easily track and reconcile all transactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
              <p className="text-gray-600">
                To serve our diverse user base, MyAccurate Books is available in multiple languages, including English, Swahili, French, and more, with plans to add additional languages.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-xl font-bold mb-3">Comprehensive Training</h3>
              <p className="text-gray-600">
                We offer extensive onboarding and training resources, ensuring that business owners can get the most out of our platform regardless of their technical experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "1s" }}>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We regularly gather feedback from our users and continuously update our platform to meet the evolving needs of African businesses and adapt to changing regulations.
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
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-blue-200 to-accurate-purple-200 rounded-lg transform -rotate-3"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="RWK Africa Services"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Part of the RWK Africa Ecosystem</h2>
              <p className="text-lg text-gray-700 mb-6">
                MyAccurate Books is proud to be part of the RWK Africa ecosystem, connecting businesses to a wider range of professional services and resources.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through this connection, our customers gain access to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional business training and workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tax advisory and compliance services</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Networking opportunities with other businesses</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to funding and investment opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Digital transformation consulting services</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://rwkafrica.com" target="_blank" rel="noopener noreferrer">Learn About RWK Africa</a>
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
