import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArrowRight } from "lucide-react";
import SEO from '@/components/SEO';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import lottie from "lottie-web";

const HeroParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = 600;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      o: Math.random() * 0.5 + 0.3,
    }));
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(124,58,237,${p.o})`;
        ctx.shadowColor = '#2563EB';
        ctx.shadowBlur = 8;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-[600px] z-0 pointer-events-none" style={{top:0,left:0}} />;
};

const HeroSpotlight = () => {
  const spotlightRef = useRef(null);
  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18) 0%, transparent 60%)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return <div ref={spotlightRef} className="absolute inset-0 z-20 pointer-events-none transition-all duration-200" />;
};

const HeroLottie = () => {
  const lottieRef = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '#', // Example: finance/tech animation
    });
    return () => anim.destroy();
  }, []);
  return <div ref={lottieRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-30 pointer-events-none opacity-80" />;
};

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MyAccurate Books",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "description": "Professional accounting software for African SMEs. Streamline your financial management with our cloud-based solution.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  };

  useEffect(() => {
    const tilt = document.querySelector('.hero-tilt');
    if (!tilt) return;
    let requestId;
    const handleMove = (e) => {
      const rect = tilt.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      gsap.to(tilt, { rotateY: dx * 10, rotateX: -dy * 10, duration: 0.4, ease: 'power2.out' });
    };
    const handleLeave = () => {
      gsap.to(tilt, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
    };
    tilt.addEventListener('mousemove', handleMove);
    tilt.addEventListener('mouseleave', handleLeave);
    return () => {
      tilt.removeEventListener('mousemove', handleMove);
      tilt.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <>
      <SEO
        title="Professional Accounting Software for African SMEs"
        description="MyAccurate Books is a powerful cloud-based accounting solution designed specifically for African SMEs. Streamline your financial management, automate bookkeeping, and make informed business decisions."
        keywords="African accounting software, SME bookkeeping, cloud accounting, financial management, business software"
        canonicalUrl="https://myaccuratebooks.com"
        structuredData={structuredData}
      />
    <div>
      {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden min-h-[600px] flex items-center">
          {/* Particle Background */}
          <HeroParticles />
          {/* Background Video with Parallax */}
          <div className="absolute inset-0 w-full h-full z-0 will-change-transform" style={{transform: 'translateY(-10px)'}}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/videos/856107/pexels-photo-856107.jpeg?auto=compress&w=1200&h=800&fit=crop"
            >
              <source src="https://videos.pexels.com/video-files/856107/856107-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-900/80 via-accurate-blue-900/70 to-accurate-blue-700/60"></div>
          </div>
          {/* Mouse-following spotlight */}
          <HeroSpotlight />
          {/* Lottie Animation */}
          <HeroLottie />
          {/* Floating SVG 3D shapes */}
          <svg className="absolute top-[-80px] left-[-80px] w-96 h-96 opacity-40 z-10 animate-spin-slow" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="180" fill="#7C3AED" />
          </svg>
          <svg className="absolute bottom-[-60px] right-[-60px] w-80 h-80 opacity-30 z-10 animate-pulse" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="200" rx="160" ry="120" fill="#2563EB" />
          </svg>
          {/* Custom SVG Illustration */}
          <svg className="absolute right-1/4 top-24 w-40 h-40 z-20 opacity-60 animate-bounce-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100 Q100 0 150 100 T250 100" stroke="#fff" strokeWidth="8" fill="none" />
            <circle cx="100" cy="100" r="30" fill="#fff" fillOpacity="0.15" />
          </svg>
          {/* Main Content */}
          <div className="container relative z-30">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:pr-8 animate-on-scroll text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accurate-purple-200 via-white to-accurate-blue-200 animate-gradient-x inline-block relative">
                    Simplify
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-accurate-purple-400 to-accurate-blue-400 rounded-full blur-md opacity-60 animate-pulse" />
                  </span> Your Business Finances
              </h1>
                <p className="text-xl mb-8 text-balance opacity-90">
                MyAccurate Books is an intuitive cloud-based accounting solution designed for small and medium-sized enterprises without requiring prior accounting knowledge.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="relative bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white hover:from-accurate-purple-700 hover:to-accurate-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
                  <Link to="/pricing">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10 hover:border-white/80 transition-all duration-300">
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>
              <div className="mt-12">
                  <p className="text-sm font-medium mb-3 opacity-80">
                  TRUSTED BY BUSINESSES ACROSS AFRICA
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                    <div className="bg-white/80 shadow-sm rounded p-2 opacity-90 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                      <span className="font-medium text-gray-700">Nairobi Crafts</span>
                    </div>
                    <div className="bg-white/80 shadow-sm rounded p-2 opacity-90 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-purple-400 transition-all duration-300">
                      <span className="font-medium text-gray-700">Tech Solutions Ltd</span>
                  </div>
                    <div className="bg-white/80 shadow-sm rounded p-2 opacity-90 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400 transition-all duration-300">
                      <span className="font-medium text-gray-700">Coastal Supplies</span>
                  </div>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll relative z-30">
                <div className="relative group hero-tilt">
                  <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200/60 to-accurate-blue-200/60 rounded-lg transform rotate-1"></div>
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative group-hover:scale-105 group-hover:shadow-blue-400/40 transition-all duration-300">
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

         {/* Mobile App Section */}
         <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Take Your Business On The Go
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Access your business data anytime, anywhere with our powerful mobile application. Keep track of sales, inventory, and finances right from your phone.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Real-time sales tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Mobile POS functionality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Instant inventory updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span className="text-gray-700">Secure card payments on the go</span>
                  </li>
                </ul>
                <a
                  href="https://play.google.com/store/apps/details?id=core.rwk.myaccuratebooks&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/playstore.webp"
                    alt="Get it on Google Play"
                    className="h-16 w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200 to-accurate-blue-200 rounded-lg transform rotate-3"></div>
                <div className="relative">
                  <img
                    src="/images/phone.jpg"
                    alt="MyAccurate Books Mobile App"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
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
              <p className="text-gray-600 mb-4">
                Track small expenses and maintain petty cash balances with detailed logs and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Cash withdrawal and deposit tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Expense categorization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Reconciliation tools</span>
                </li>
              </ul>
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
              <p className="text-gray-600 mb-4">
                Calculate salaries, manage employee payments, and handle statutory deductions automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Tax calculation and reporting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Employee benefits management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Direct deposit integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
              <p className="text-gray-600 mb-4">
                Gain deeper insights into your business performance with customizable dashboards and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Sales forecasting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Profit margin analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Custom report builder</span>
                </li>
              </ul>
            </div>
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

      {/* New Business Benefits Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Benefits for Your Business"
            subtitle="Discover how MyAccurate Books can transform your financial management"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-6">
                <li className="flex animate-on-scroll">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Save Time</h3>
                    <p className="text-gray-600">Automate repetitive financial tasks and reduce manual data entry by up to 60%, giving you more time to focus on growing your business.</p>
                  </div>
                </li>
                <li className="flex animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduce Errors</h3>
                    <p className="text-gray-600">Eliminate common accounting mistakes with automatic calculations and data validation that ensures your financial records are always accurate.</p>
                  </div>
                </li>
                <li className="flex animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Make Better Decisions</h3>
                    <p className="text-gray-600">Gain real-time insights into your business performance with comprehensive financial reports and dashboards that help you make informed decisions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-blue-200 to-accurate-purple-200 rounded-lg transform -rotate-2"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Business owner using MyAccurate Books"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accurate-blue-600 text-white rounded-lg p-4 shadow-lg">
                <p className="font-bold">Trusted by 1000+ SMEs</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" variant="default" className="gap-2" asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
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
    </>
  );
};

export default HomePage;
