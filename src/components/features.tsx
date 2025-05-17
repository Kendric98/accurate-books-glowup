import React, { useState, useEffect } from 'react';

const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState('all-features');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Scroll to the selected section
    const element = document.getElementById(tab);
    if (element) {
      // Add a slight delay to ensure the DOM has updated
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Set active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'all-features', 
        'accounting', 
        'pos', 
        'payments', 
        'management', 
        'roadmap'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Features Navigation Tabs */}
      <section className="py-4 bg-white sticky top-16 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide space-x-1">
            <button
              aria-selected={activeTab === 'all-features'}
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'all-features' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('all-features')}
            >
              All Features
            </button>
            <button 
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'accounting' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('accounting')}
            >
              <i className="fas fa-calculator mr-2"></i> Accounting
            </button>
            <button 
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'pos' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('pos')}
            >
              <i className="fas fa-cash-register mr-2"></i> POS System
            </button>
            <button 
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'payments' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('payments')}
            >
              <i className="fas fa-credit-card mr-2"></i> Payments
            </button>
            <button 
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'management' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('management')}
            >
              <i className="fas fa-users-cog mr-2"></i> Management
            </button>
            <button 
              className={`tab-button flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'roadmap' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => handleTabChange('roadmap')}
            >
              <i className="fas fa-map mr-2"></i> Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <div id="all-features" className={`tab-content ${activeTab === 'all-features' ? 'active' : ''}`}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Complete Business Accounting Solution</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">MyAccurate Books provides all the tools you need to manage your business finances efficiently and accurately.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-100">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Financial Dashboard</h3>
                <p className="text-gray-600 mb-4">Get a real-time overview of your business finances with our intuitive dashboard. Track income, expenses, and profitability at a glance.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                  
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
              
              {/* Feature 2 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-200">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cash-register text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">POS Integration</h3>
                <p className="text-gray-600 mb-4">Seamless point-of-sale integration that syncs with your accounting automatically. Perfect for retail and service businesses.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                  
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
              
              {/* Feature 3 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-300">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-users text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Customer Management</h3>
                <p className="text-gray-600 mb-4">Track customer interactions, invoices, and payment history in one place. Build better relationships with your clients.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                 
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
              
              {/* Feature 4 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-400">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-credit-card text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Payment Processing</h3>
                <p className="text-gray-600 mb-4">Accept M-Pesa, credit cards, bank transfers, and cash payments. Integrated with major payment processors for hassle-free transactions.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                  
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
              
              {/* Feature 5 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-500">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-shield text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Multi-User Access</h3>
                <p className="text-gray-600 mb-4">Grant different access levels to your team members. Perfect for businesses with accountants, bookkeepers, or multiple locations.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                  
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
              
              {/* Feature 6 */}
              <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300 animate-fade-in-simple animate-delay-600">
                <div className="w-14 h-14 feature-icon rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-file-invoice text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Automated Invoicing</h3>
                <p className="text-gray-600 mb-4">Create professional invoices in seconds. Set up recurring invoices and automatic payment reminders to improve cash flow.</p>
                <a href="#" className="text-primary font-medium inline-flex items-center">
                  
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Cloud-Based & Mobile Ready</h2>
                <p className="text-lg text-gray-600 mb-8">Access your business finances anytime, anywhere with our web platform and mobile app. MyAccurate Books syncs across all your devices in real-time.</p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-cloud"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Automatic Cloud Backup</h3>
                      <p className="mt-2 text-gray-600">Your data is securely stored in the cloud with automatic backups, so you never lose important financial information.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Mobile App Available</h3>
                      <p className="mt-2 text-gray-600">Download our app on Google Play Store to manage your business on the go with full functionality.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Real-Time Sync</h3>
                      <p className="mt-2 text-gray-600">Changes made on one device instantly appear on all others, keeping your team in sync.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/public/images/phone.jpg" alt="Mobile and desktop access" className="rounded-xl shadow-xl" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Accounting Features Section */}
      <div id="accounting" className={`tab-content ${activeTab === 'accounting' ? 'active' : ''}`}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Comprehensive Accounting Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Powerful accounting tools designed specifically for small and medium businesses.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Accounting Feature 1 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Income & Expense Tracking</h3>
                <p className="text-gray-600">Easily categorize and track all business income and expenses. Generate reports to understand your cash flow patterns.</p>
              </div>
              
              {/* Accounting Feature 2 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Bank Reconciliation</h3>
                <p className="text-gray-600">Automatically match transactions with your bank statements to ensure your books are always accurate.</p>
              </div>
              
              {/* Accounting Feature 3 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Financial Reports</h3>
                <p className="text-gray-600">Generate profit & loss statements, balance sheets, and other essential reports with a single click.</p>
              </div>
              
              {/* Accounting Feature 4 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Tax Preparation</h3>
                <p className="text-gray-600">Automatically calculate tax liabilities and generate reports to simplify tax filing season.</p>
              </div>
              
              {/* Accounting Feature 5 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Multi-Currency Support</h3>
                <p className="text-gray-600">Handle transactions in multiple currencies with automatic exchange rate updates.</p>
              </div>
              
              {/* Accounting Feature 6 */}
              <div className="feature-highlight bg-white p-8 rounded-xl shadow-md pl-10">
                <h3 className="text-xl font-bold text-dark mb-3">Inventory Management</h3>
                <p className="text-gray-600">Track stock levels, set reorder points, and manage inventory costs seamlessly within your accounting.</p>
              </div>
            </div>
            
            <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-dark mb-2">No Accounting Knowledge Needed</h3>
                  <p className="text-gray-600">Our intuitive interface guides you through every step, making professional accounting accessible to everyone.</p>
                </div>
                <div className="md:w-1/2 text-center md:text-right">
                  <a href="/pricing" className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700">
                    Try It Free
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* POS Features Section */}
      <div id="pos" className={`tab-content ${activeTab === 'pos' ? 'active' : ''}`}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Point of Sale System</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">A complete POS solution that integrates seamlessly with your accounting.</p>
            </div>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0 order-2 lg:order-1">
                <div className="space-y-8">
                  {/* POS Feature 1 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-barcode"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Barcode Scanning</h3>
                      <p className="mt-2 text-gray-600">Quickly scan products using barcode scanners for fast checkout and accurate inventory tracking.</p>
                    </div>
                  </div>
                  
                  {/* POS Feature 2 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-receipt"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Receipt Printing</h3>
                      <p className="mt-2 text-gray-600">Print professional receipts with your logo and business information. Email receipts to customers.</p>
                    </div>
                  </div>
                  
                  {/* POS Feature 3 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-tags"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Discounts & Promotions</h3>
                      <p className="mt-2 text-gray-600">Apply percentage or fixed amount discounts. Create promotional pricing for specific items or categories.</p>
                    </div>
                  </div>
                  
                  {/* POS Feature 4 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                        <i className="fas fa-exchange-alt"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-dark">Returns & Refunds</h3>
                      <p className="mt-2 text-gray-600">Process returns and refunds easily while maintaining accurate inventory and financial records.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <a href="/demo" className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700">
                    Request POS Demo
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img src="/public/images/comp.jpg" alt="POS system" className="rounded-xl shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Payments Features Section */}
      <div id="payments" className={`tab-content ${activeTab === 'payments' ? 'active' : ''}`}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Integrated Payment Processing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Accept all payment methods your customers prefer, with automatic accounting integration.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Payment Method 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/images/mpesa.png" alt="M-Pesa" className="h-10" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">M-Pesa Integration</h3>
                <p className="text-gray-600">Accept M-Pesa payments directly in your POS or invoices. Payments are automatically recorded in your accounting.</p>
              </div>
              
              {/* Payment Method 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/images/card.png" alt="Card" className="h-10" />
                  <i className="fas fa-credit-card text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Card Payments</h3>
                <p className="text-gray-600">Accept all major credit and debit cards through our secure payment gateway partners.</p>
              </div>
              
              {/* Payment Method 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/images/bank.png" alt="Card" className="h-10" />
                  <i className="fas fa-university text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Bank Transfers</h3>
                <p className="text-gray-600">Customers can pay directly to your bank account. Transactions are matched automatically when they clear.</p>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-dark mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-600">All payment methods are processed with bank-level security and PCI compliance to protect your business and customers.</p>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <a href="/pricing" className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700">
                    Setup Payments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Management Features Section */}
      <div id="management" className={`tab-content ${activeTab === 'management' ? 'active' : ''}`}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Business Management Tools</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Beyond accounting - tools to help you manage and grow your business.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Management Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold text-dark mb-3">Customer Management</h3>
                <p className="text-gray-600 mb-4">Track customer details, purchase history, and preferences. Segment customers for targeted marketing.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Customer profiles with contact details</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Purchase history and spending patterns</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Loyalty program integration</span>
                  </li>
                </ul>
              </div>
              
              {/* Management Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary">
                <h3 className="text-xl font-bold text-dark mb-3">Employee Management</h3>
                <p className="text-gray-600 mb-4">Manage staff access, track working hours, and control permissions based on roles.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span>Time tracking and attendance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span>Performance metrics and reporting</span>
                  </li>
                </ul>
              </div>
              
              {/* Management Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent">
                <h3 className="text-xl font-bold text-dark mb-3">Inventory Control</h3>
                <p className="text-gray-600 mb-4">Manage stock levels, set reorder points, and track inventory across multiple locations.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Real-time stock tracking</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Barcode and QR code support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span>Multi-location inventory management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-primary rounded-xl shadow-md p-8 text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Coming Soon: Payroll & HR</h3>
                  <p>We're developing integrated payroll and human resources features to make MyAccurate Books a complete business management solution.</p>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <a href="#roadmap" className="btn-primary inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-primary">
                    View Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Roadmap Section */}
      <div id="roadmap" className={`tab-content ${activeTab === 'roadmap' ? 'active' : ''}`}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Product Roadmap</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">See what exciting features we're working on to make MyAccurate Books even more powerful.</p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary/10 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
               

                {/* Roadmap Item 1 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center justify-center md:justify-end mb-2">
                        <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">Completed</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Initial Concept</h3>
                      <p className="text-gray-600">Identified opportunity to provide MSMEs with comprehensive business management software.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q2 2024</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 2 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q3 2024</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">Completed</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Accounting Module</h3>
                      <p className="text-gray-600">Development of core accounting and bookkeeping functionality for basic business needs.</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 3 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center justify-center md:justify-end mb-2">
                        <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">Completed</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">MVP Launch</h3>
                      <p className="text-gray-600">Successfully launched our Minimum Viable Product at the Skill Up Launch event.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q4 2024</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 4 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q1 2025</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">Completed</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">POS Module</h3>
                      <p className="text-gray-600">Point of Sale system integration for seamless sales and inventory management.</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 5 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center justify-center md:justify-end mb-2">
                        <span className="bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full">In Progress</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">E-Wallet & Petty Cash</h3>
                      <p className="text-gray-600">Digital wallet integration and comprehensive petty cash management system.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q2 2025</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 6 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q3 2025</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center mb-2">
                        <span className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">Planned</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Payroll Management</h3>
                      <p className="text-gray-600">Complete payroll system with automated calculations and statutory deductions.</p>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 7 */}
                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center justify-center md:justify-end mb-2">
                        <span className="bg-gray-400 text-white text-sm font-semibold px-3 py-1 rounded-full">Future</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Business Management</h3>
                      <p className="text-gray-600">Comprehensive business management tools including analytics and reporting.</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-16">
                    <div className="text-gray-500 text-sm md:text-base">
                      <p>Q4 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Have feature suggestions? We'd love to hear from you!</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSemU1hTZ1zpgGzI35T49K3oZChFzvQsyFzs1IF-IP0g8Q6UpA/viewform?usp=header" className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700" target="_blank" rel="noopener noreferrer">
                Suggest a Feature
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturesTabs;
