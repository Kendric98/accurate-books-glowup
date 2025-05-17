import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, BookOpen, Video, Play, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error message when user starts typing
    if (status === "error") {
      setStatus(null);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post(
        `${API_URL}/api/subscribe`,
        {
          email: formData.email,
          name: formData.name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // 5 second timeout
        }
      );

      console.log('Server response:', response.data);

      if (response.data.success) {
        setStatus("success");
        setFormData({ email: "", name: "" });
      } else {
        setStatus("error");
        setErrorMessage(response.data.error?.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Detailed subscription error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      let errorMsg = "Something went wrong. Please try again.";
      
      if (error.code === 'ECONNABORTED') {
        errorMsg = "Request timed out. Please try again.";
      } else if (error.code === 'ERR_NETWORK') {
        errorMsg = "Unable to connect to the server. Please try again later.";
      } else if (error.response?.data?.error?.message) {
        errorMsg = error.response.data.error.message;
      }
      
      setStatus("error");
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t">
      <div className="container">
        {/* Newsletter Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Get the latest accounting tips, tax updates, and software features
                delivered straight to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-2 max-w-md">
                  <div className="flex-grow">
                    <Input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full mb-2 md:mb-0"
                    />
                  </div>
                  <div className="flex-grow">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
                {status === "success" && (
                  <p className="text-sm text-green-600">Thanks for subscribing! Please check your email to confirm your subscription.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}
                <p className="text-xs text-gray-500">
                  By subscribing you agree to our Privacy Policy. We promise not to spam.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/images/logo.png" 
                  alt="MyAccurate Books Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering SMEs with intuitive accounting solutions for better financial management
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Demo & Resources</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Blog</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Tutorials</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Contact</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Testimonials</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MyAccurate Books. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
