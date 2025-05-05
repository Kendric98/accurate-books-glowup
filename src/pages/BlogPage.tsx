
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "1",
      title: "5 Accounting Tips Every Small Business Owner Should Know",
      excerpt: "Managing finances can be challenging for small business owners. Here are 5 essential accounting tips to help you stay on top of your finances.",
      category: "Accounting Tips",
      date: "May 1, 2025",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "How to Prepare Your Business for Tax Season",
      excerpt: "Tax season doesn't have to be stressful. Learn how to prepare your business finances and documents to ensure a smooth tax filing process.",
      category: "Tax Advice",
      date: "April 15, 2025",
      readTime: "8 min read",
    },
    {
      id: "3",
      title: "Understanding Cash Flow Management for SMEs",
      excerpt: "Cash flow is the lifeblood of any business. Discover practical strategies to effectively manage your cash flow and avoid common pitfalls.",
      category: "Financial Management",
      date: "April 8, 2025",
      readTime: "6 min read",
    },
    {
      id: "4",
      title: "New Features: Petty Cash Management in MyAccurate Books",
      excerpt: "We're excited to announce our latest feature: Petty Cash Management. Learn how this new tool can help streamline your small expenses tracking.",
      category: "Product Updates",
      date: "March 22, 2025",
      readTime: "4 min read",
    },
    {
      id: "5",
      title: "How to Choose the Right Accounting Software for Your Business",
      excerpt: "With so many options available, selecting the right accounting software can be overwhelming. Here's what to consider when making your decision.",
      category: "Business Advice",
      date: "March 15, 2025",
      readTime: "7 min read",
    },
    {
      id: "6",
      title: "The Importance of Regular Financial Reporting for SMEs",
      excerpt: "Regular financial reporting is crucial for business success. Learn why these reports matter and how to implement an effective reporting system.",
      category: "Financial Management",
      date: "March 5, 2025",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All Categories",
    "Accounting Tips",
    "Tax Advice",
    "Financial Management",
    "Product Updates",
    "Business Advice",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MyAccurate Books Blog</h1>
            <p className="text-xl text-gray-700 mb-8">
              Insights, tips, and advice to help you manage your business finances more effectively.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="flex">
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="rounded-r-none focus-visible:ring-accurate-purple-500"
                />
                <Button className="rounded-l-none">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className={`block px-3 py-2 rounded-md transition-colors ${
                            index === 0 
                              ? "bg-accurate-purple-100 text-accurate-purple-700" 
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-4">Subscribe to Updates</h3>
                  <p className="text-gray-600 mb-4">Get the latest articles and updates delivered to your inbox.</p>
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="mb-4"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-on-scroll">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-accurate-purple-100 text-accurate-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <a href="#" className="hover:text-accurate-purple-600 transition-colors">{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto text-accurate-purple-600 font-medium">
                        Read Article →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex items-center">
                  <a href="#" className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                    Previous
                  </a>
                  <a href="#" className="px-3 py-2 rounded-md bg-accurate-purple-100 text-accurate-purple-700 font-medium">
                    1
                  </a>
                  <a href="#" className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                    2
                  </a>
                  <a href="#" className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                    3
                  </a>
                  <span className="px-3 py-2 text-gray-600">...</span>
                  <a href="#" className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-on-scroll">
              <div className="h-40 bg-accurate-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Accounting Basics Guide</h3>
                <p className="text-gray-600 mb-4">A comprehensive PDF guide on accounting fundamentals for small business owners.</p>
                <Button variant="outline">Download Guide</Button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="h-40 bg-accurate-blue-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Financial Planning Template</h3>
                <p className="text-gray-600 mb-4">Excel template to help you plan your business finances for the upcoming fiscal year.</p>
                <Button variant="outline">Download Template</Button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="h-40 bg-accurate-purple-800 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Video Tutorial Series</h3>
                <p className="text-gray-600 mb-4">Learn how to use MyAccurate Books effectively with our video tutorial series.</p>
                <Button variant="outline">Watch Videos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Topic You'd Like Us to Cover?</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always looking for new blog topics that would be helpful for our community.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Suggest a Topic</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
