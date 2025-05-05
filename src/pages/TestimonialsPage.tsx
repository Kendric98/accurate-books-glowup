
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "MyAccurate Books has transformed how we manage our finances. The interface is intuitive, and we no longer need an accountant for day-to-day bookkeeping.",
      name: "Sarah Kimani",
      role: "Owner",
      company: "Nairobi Crafts",
    },
    {
      quote: "As someone with no accounting background, this software has been a lifesaver. I can now track all my business finances with confidence.",
      name: "David Ochieng",
      role: "Founder",
      company: "Tech Solutions Ltd",
    },
    {
      quote: "The customer management feature has helped us build better relationships with our clients. We can now track their purchase history and preferences easily.",
      name: "Amina Hassan",
      role: "Manager",
      company: "Coastal Supplies",
    },
    {
      quote: "We've been able to make better business decisions since using MyAccurate Books. The reporting features give us clear insights into our financial health.",
      name: "John Mwangi",
      role: "CEO",
      company: "Green Grocers",
    },
    {
      quote: "The multi-user access feature allows our team to collaborate effectively while maintaining control over sensitive financial information.",
      name: "Lucy Njeri",
      role: "Operations Manager",
      company: "Sunrise Hotels",
    },
    {
      quote: "MyAccurate Books has simplified our payment processing and reconciliation. We now spend less time on accounting and more time serving customers.",
      name: "Michael Kamau",
      role: "Director",
      company: "Quick Deliveries",
    }
  ];

  const caseStudies = [
    {
      title: "Nairobi Crafts",
      subtitle: "Retail Business",
      challenge: "Managing inventory across multiple locations and tracking sales by product category.",
      solution: "Implemented MyAccurate Books with a focus on inventory management and POS features.",
      results: [
        "50% reduction in inventory discrepancies",
        "30% time savings on monthly financial processes",
        "Improved sales tracking by product category",
      ],
    },
    {
      title: "Tech Solutions Ltd",
      subtitle: "IT Service Provider",
      challenge: "Tracking billable hours, managing client projects, and handling recurring invoices.",
      solution: "Utilized MyAccurate Books' customer management and payment integration features.",
      results: [
        "Automated 95% of recurring invoices",
        "Improved cash flow with faster payments",
        "Better visibility into project profitability",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Success Stories</h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover how businesses across Africa are transforming their operations with MyAccurate Books.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Hear from businesses like yours about their experience with MyAccurate Books."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Case Studies"
            subtitle="In-depth stories of how businesses solved real challenges using MyAccurate Books."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{caseStudy.title}</h3>
                  <p className="text-accurate-purple-600 font-medium">{caseStudy.subtitle}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Challenge</h4>
                  <p className="text-gray-700">{caseStudy.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Solution</h4>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Customer Success by the Numbers"
            subtitle="Our customers see real results when they switch to MyAccurate Books."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold text-accurate-purple-600 mb-2">85%</div>
              <p className="text-gray-700">Save at least 5 hours per week on financial tasks</p>
            </div>
            <div className="text-center p-6 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accurate-purple-600 mb-2">92%</div>
              <p className="text-gray-700">Report better financial visibility and control</p>
            </div>
            <div className="text-center p-6 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accurate-purple-600 mb-2">30%</div>
              <p className="text-gray-700">Average increase in on-time payments</p>
            </div>
            <div className="text-center p-6 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accurate-purple-600 mb-2">4.8/5</div>
              <p className="text-gray-700">Average customer satisfaction rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Hear from Our Customers"
            subtitle="Watch real businesses talk about their experience with MyAccurate Books."
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-xl aspect-video animate-on-scroll">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-80">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  <p className="text-xl font-semibold">Customer Testimonial Video</p>
                  <p className="text-gray-300 mt-2">Click to watch how MyAccurate Books is helping businesses succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Success Story</h2>
            <p className="text-xl text-gray-700 mb-8">
              Are you a MyAccurate Books customer with a story to tell? We'd love to hear about your experience.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Submit Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Own Success Story?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of businesses that have transformed their operations with MyAccurate Books.
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

export default TestimonialsPage;
