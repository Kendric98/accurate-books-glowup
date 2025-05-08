import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";
const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };
  const pricingPlans = [{
    name: "Starter",
    description: "Perfect for new and small businesses",
    monthlyPrice: 10,
    yearlyPrice: 96,
    // 20% discount
    features: ["5 user accounts", "Unlimited customers", "Point of sale (POS)", "Customer management", "Items management", "Basic reporting", "Email support"],
    mostPopular: false
  }, {
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 25,
    yearlyPrice: 240,
    // 20% discount
    features: ["10 user accounts", "Unlimited customers", "Advanced POS features", "Customer management", "Items management", "Advanced reporting", "Multiple payment methods", "Priority email support", "Phone support"],
    mostPopular: true
  }, {
    name: "Enterprise",
    description: "For established businesses with complex needs",
    monthlyPrice: 50,
    yearlyPrice: 480,
    // 20% discount
    features: ["Unlimited user accounts", "Unlimited customers", "Advanced POS features", "Customer relationship management", "Inventory management", "Custom reporting", "Multiple payment methods", "Priority support", "Dedicated account manager", "API access"],
    mostPopular: false
  }];
  return <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose the plan that works best for your business. No hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === "monthly" ? "font-semibold text-accurate-purple-600" : "text-gray-600"}`}>
              Monthly Billing
            </span>
            <button onClick={toggleBillingCycle} className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200">
              <span className="sr-only">Toggle billing cycle</span>
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition ${billingCycle === "yearly" ? "translate-x-6 shadow-lg" : "translate-x-1"}`}></span>
            </button>
            <span className={`text-lg ${billingCycle === "yearly" ? "font-semibold text-accurate-purple-600" : "text-gray-600"}`}>
              Yearly Billing <span className="text-sm bg-accurate-purple-100 text-accurate-purple-700 font-medium px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map(plan => <div key={plan.name} className={`relative rounded-xl border ${plan.mostPopular ? "border-accurate-purple-500 shadow-xl ring-1 ring-accurate-purple-200" : "border-gray-200 hover:border-accurate-purple-300 hover:shadow-lg"} bg-white p-6 animate-on-scroll transition-all duration-300`}>
                {plan.mostPopular && <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full brand-gradient py-1 text-center text-sm font-semibold text-white shadow-md">
                    Most Popular
                  </div>}
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-accurate-purple-700">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  <p className="text-gray-600 mt-1">
                    per {billingCycle === "monthly" ? "month" : "year"}
                  </p>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map(feature => <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-accurate-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
                <Button className={`w-full ${plan.mostPopular ? "brand-gradient shadow-md hover:shadow-lg" : ""}`} variant={plan.mostPopular ? "default" : "outline"} asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>)}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-accurate-purple-50 to-white">
        <div className="container">
          <SectionHeading title="Plan Comparison" subtitle="Compare our plans to find the right fit for your business needs." />
          <div className="overflow-x-auto mt-12 shadow-md rounded w-full\n">
            <table className="branded-table w-full ">
              <thead>
                <tr>
                  <th className="p-4 text-left font-bold rounded-tl-xl">Features</th>
                  <th className="p-4 text-center font-bold">Starter</th>
                  <th className="p-4 text-center font-bold bg-accurate-purple-100">Professional</th>
                  <th className="p-4 text-center font-bold rounded-tr-xl">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-medium">User accounts</td>
                  <td className="p-4 text-center">5</td>
                  <td className="p-4 text-center bg-accurate-purple-50">10</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Customer records</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Point of sale (POS)</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Inventory management</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Reporting</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Payment methods</td>
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Multiple</td>
                  <td className="p-4 text-center">All</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Email & Phone</td>
                  <td className="p-4 text-center">Priority</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium rounded-bl-xl">API access</td>
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-accurate-purple-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="p-4 text-center rounded-br-xl">
                    <Check className="h-5 w-5 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Frequently Asked Questions" subtitle="Get answers to common questions about our pricing and plans." />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-accurate-purple-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-accurate-purple-200">
                <h3 className="text-lg font-bold mb-2 text-accurate-purple-800">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining days in your billing cycle.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-accurate-purple-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-accurate-purple-200">
                <h3 className="text-lg font-bold mb-2 text-accurate-purple-800">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-accurate-purple-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-accurate-purple-200">
                <h3 className="text-lg font-bold mb-2 text-accurate-purple-800">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept major credit cards, bank transfers, and mobile money payments including M-Pesa.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-accurate-purple-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-accurate-purple-200">
                <h3 className="text-lg font-bold mb-2 text-accurate-purple-800">Do you offer custom plans?</h3>
                <p className="text-gray-600">
                  Yes, for businesses with specific requirements, we offer custom plans. Please contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-gradient text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Plan?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is ready to help you select the best option for your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-accurate-purple-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default PricingPage;