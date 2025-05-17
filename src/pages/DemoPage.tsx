import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Video, Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const DemoPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const validateEnvVariables = () => {
    const requiredVars = {
      'VITE_HUBSPOT_PORTAL_ID': import.meta.env.VITE_HUBSPOT_PORTAL_ID,
      'VITE_HUBSPOT_FORM_ID': import.meta.env.VITE_HUBSPOT_FORM_ID,
      'VITE_HUBSPOT_API_KEY': import.meta.env.VITE_HUBSPOT_API_KEY
    };

    const missingVars = Object.entries(requiredVars)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validate environment variables first
      validateEnvVariables();

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Map form fields to HubSpot properties
      const hubspotData = {
        fields: [
          {
            name: "firstname",
            value: formData.get("name")?.toString().split(" ")[0] || ""
          },
          {
            name: "lastname",
            value: formData.get("name")?.toString().split(" ").slice(1).join(" ") || ""
          },
          {
            name: "email",
            value: formData.get("email") || ""
          },
          {
            name: "company",
            value: formData.get("company") || ""
          },
          {
            name: "phone",
            value: formData.get("phone") || ""
          },
          {
            name: "message",
            value: formData.get("message") || ""
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Demo Request Form"
        }
      };

      const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
      const formId = import.meta.env.VITE_HUBSPOT_FORM_ID;
      const apiKey = import.meta.env.VITE_HUBSPOT_API_KEY;

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify(hubspotData)
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to submit form to HubSpot (Status: ${response.status})`);
      }

    setFormSubmitted(true);
      form.reset();
    setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while submitting the form";
      setError(errorMessage);
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/resources/videos/demo-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      {/* Content */}
      <div className="relative container max-w-6xl mx-auto px-4 text-center text-white">
        <h1 className="heading-lg mb-4 text-5xl font-bold">
          Experience MyAccurate Books in Action
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover how our accounting software can transform your business finances through
          interactive demos, tutorials, and personalized onboarding sessions.
        </p>
        <a href="#demo-form" className="inline-block mt-8">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
            Get Started
          </Button>
        </a>
      </div>
    </section>
      
      {/* Demo Resources Section */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Interactive Demos & Resources" subtitle="Explore our collection of resources designed to help you get the most out of MyAccurate Books" alignment="center" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Video Demo Card */}
            <div className="card-accent hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="bg-accurate-purple-50 p-4 rounded-md mb-4 inline-flex">
                  <Video className="h-8 w-8 text-accurate-purple-600" />
                </div>
                <h3 className="text-xl font-semibold ml-6 mb-3">Product Demo</h3>
                <p className="text-gray-600 mb-6 ml-6 flex-grow">
                  Watch our comprehensive product demo to see all features in action, from invoicing to financial reporting.
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-full">
                      <Play className="mr-2 h-4 w-4" /> Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>MyAccurate Books Product Demo</DialogTitle>
                      <DialogDescription>
                        A comprehensive walkthrough of our accounting software
                      </DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                      <div className="text-center p-8">
                        <Play className="mx-auto h-16 w-16 text-accurate-purple-400 mb-4" />
                        <p className="text-gray-500">Demo video would play here</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Tutorials Card */}
            <div className="card-accent hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="bg-accurate-purple-50 p-4 rounded-md mb-4 inline-flex">
                  <BookOpen className="h-8 w-8 text-accurate-purple-600" />
                </div>
                <h3 className="text-xl font-semibold ml-6 mb-3">Tutorials & Guides</h3>
                <p className="text-gray-600 mb-6 ml-6 flex-grow">
                  Step-by-step tutorials to help you master every aspect of MyAccurate Books, from setup to advanced features.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/coming-soon">
                    <BookOpen className="mr-2 h-4 w-4" /> Browse Tutorials
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Live Demo Card */}
            <div className="card-accent hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="bg-accurate-purple-50 p-4 rounded-md mb-4 inline-flex">
                  <Play className="h-8 w-8 text-accurate-purple-600" />
                </div>
                <h3 className="text-xl font-semibold ml-6 mb-3">Live Demo Account</h3>
                <p className="text-gray-600 mb-6 ml-6 flex-grow">
                  Access a sandbox environment with sample data to explore the software at your own pace.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/coming-soon">
                    Access Demo Account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Paths Section */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading title="Learning Paths" subtitle="Follow our structured learning paths to become a MyAccurate Books expert" alignment="center" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 my-0 py-[20px]">
            {/* Learning Path Items */}
            {[{
            title: "Getting Started",
            description: "Setup your account, import data, and configure basic settings",
            level: "Beginner",
            duration: "1 hour",
            color: "accurate-blue",
            path: "/features"
          }, {
            title: "Daily Operations",
            description: "Learn how to handle day-to-day tasks like invoicing and expense tracking",
            level: "Beginner",
            duration: "2 hours",
            color: "accurate-purple",
            path: "/features"
          }, {
            title: "Financial Reporting",
            description: "Master financial statements, custom reports, and insights",
            level: "Intermediate",
            duration: "1.5 hours",
            color: "accurate-blue",
            path: "/blog"
          }, {
            title: "Advanced Features",
            description: "Explore advanced functionality for business optimization",
            level: "Advanced",
            duration: "2.5 hours",
            color: "accurate-purple",
            path: "/features"
          }].map((path, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow my-[30px] py-[25px]">
                <h3 className="text-lg font-semibold mb-3">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="flex justify-between text-sm mb-4">
                  <span className={`px-2 py-1 rounded-full bg-${path.color}-50 text-${path.color}-700`}>
                    {path.level}
                  </span>
                  <span className="text-gray-500">{path.duration}</span>
                </div>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to={path.path}>Start Learning →</Link>
                </Button>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Book a Demo Section */}
      <section id="demo-form" className="section w-full">
        <div className="container px-0">
          <div className="bg-gradient-to-br from-accurate-purple-600 to-accurate-blue-600 rounded-lg overflow-hidden shadow-xl relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accurate-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accurate-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accurate-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-white rounded-full animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    opacity: 0.6
                  }}
                />
              ))}
            </div>

            <div className="grid md:grid-cols-5 gap-0 py-0 my-[25px] rounded-md relative">
              {/* Image/Graphic Side */}
              <div className="md:col-span-2 bg-accurate-purple-700/90 p-10 flex items-center my-0 backdrop-blur-sm">
                <div className="text-white relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-white/30 rounded-full animate-ping"></div>
                  <h2 className="text-3xl font-bold mb-6 relative">
                    Get a Personalized Demo
                    <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white/30 rounded-full animate-pulse"></div>
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Customized to your business needs",
                      "Personal Q&A session",
                      "Implementation guidance",
                      "Free onboarding support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-accurate-purple-700 mr-3 font-bold text-sm transform group-hover:scale-110 transition-transform">✓</span>
                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Form Side */}
              <div className="md:col-span-3 bg-white/95 p-8 md:p-10 backdrop-blur-sm relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accurate-purple-300 rounded-full animate-ping"></div>
                <h3 className="text-2xl font-semibold mb-6 relative">
                  Schedule Your Free Demo
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-accurate-purple-200 rounded-full animate-pulse"></div>
                </h3>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="group-hover:text-accurate-purple-600 transition-colors">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your name" 
                        required 
                        className="focus:ring-2 focus:ring-accurate-purple-500 transition-all" 
                      />
                      </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="group-hover:text-accurate-purple-600 transition-colors">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="focus:ring-2 focus:ring-accurate-purple-500 transition-all" 
                      />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2 group">
                      <Label htmlFor="company" className="group-hover:text-accurate-purple-600 transition-colors">Company Name</Label>
                      <Input 
                        id="company" 
                        name="company"
                        placeholder="Your company" 
                        required 
                        className="focus:ring-2 focus:ring-accurate-purple-500 transition-all" 
                      />
                      </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="group-hover:text-accurate-purple-600 transition-colors">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="Your phone number" 
                        className="focus:ring-2 focus:ring-accurate-purple-500 transition-all" 
                      />
                      </div>
                    </div>
                    
                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="group-hover:text-accurate-purple-600 transition-colors">What are your specific interests?</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about your business and what you're looking for..." 
                      rows={6} 
                      className="focus:ring-2 focus:ring-accurate-purple-500 transition-all" 
                    />
                    </div>
                    
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 hover:from-accurate-purple-700 hover:to-accurate-blue-700 transform hover:scale-105 transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      "Book My Free Demo"
                    )}
                    </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
    <section className="section-alt">
      <div className="container max-w-8xl pb-10">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Have questions about our demo process? Find answers to common queries below"
          alignment="center"
        />

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {[
            {
              question: "How long does the demo usually take?",
              answer:
                "Our personalized demos typically last 30-45 minutes, including time for questions. We can adjust the length based on your availability and requirements.",
            },
            {
              question: "Who should attend the demo session?",
              answer:
                "We recommend including decision-makers and team members who will be using the software regularly, such as financial staff, accountants, or business owners.",
            },
            {
              question: "Can I request specific features to be demonstrated?",
              answer:
                "Absolutely! We encourage you to let us know your specific interests so we can tailor the demo to focus on the features most relevant to your business needs.",
            },
            {
              question: "Is there any follow-up after the demo?",
              answer:
                "Yes, we provide a demo recap email with helpful resources and your personal account manager will follow up to answer any additional questions you may have.",
            },
            {
              question: "How soon can I start using the software after the demo?",
              answer:
                "You can start using MyAccurate Books immediately after the demo. We offer a free trial period and can provide onboarding assistance to help you get set up quickly.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow w-full md:w-[calc(50%-12px)]"
            >
              <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>;
};
export default DemoPage;
