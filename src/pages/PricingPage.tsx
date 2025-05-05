
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for new and small businesses",
      monthlyPrice: 10,
      yearlyPrice: 96, // 20% discount
      features: [
        "5 user accounts",
        "Unlimited customers",
        "Point of sale (POS)",
        "Customer management",
        "Items management",
        "Basic reporting",
        "Email support",
      ],
      mostPopular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 25,
      yearlyPrice: 240, // 20% discount
      features: [
        "10 user accounts",
        "Unlimited customers",
        "Advanced POS features",
        "Customer management",
        "Items management",
        "Advanced reporting",
        "Multiple payment methods",
        "Priority email support",
        "Phone support",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      description: "For established businesses with complex needs",
      monthlyPrice: 50,
      yearlyPrice: 480, // 20% discount
      features: [
        "Unlimited user accounts",
        "Unlimited customers",
        "Advanced POS features",
        "Customer relationship management",
        "Inventory management",
        "Custom reporting",
        "Multiple payment methods",
        "Priority support",
        "Dedicated account manager",
        "API access",
      ],
      mostPopular: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 bg-gradient-to-r from-accurate-purple-100 via-white to-accurate-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose the plan that works best for your business. No hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12">
        <div className="container">
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === "monthly" ? "font-semibold text-accurate-purple-600" : "text-gray-600"}`}>
              Monthly Billing
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
            <span className={`text-lg ${billingCycle === "yearly" ? "font-semibold text-accurate-purple-600" : "text-gray-600"}`}>
              Yearly Billing <span className="text-sm text-accurate-purple-600 font-medium">Save 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative rounded-xl border ${
                  plan.mostPopular ? "border-accurate-purple-500 shadow-lg" : "border-gray-200"
                } bg-white p-6 animate-on-scroll`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-accurate-purple-500 py-1 text-center text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  <p className="text-gray-600 mt-1">
                    per {billingCycle === "monthly" ? "month" : "year"}
                  </p>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accurate-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.mostPopular ? "bg-accurate-purple-600 hover:bg-accurate-purple-700" : ""
                  }`} 
                  variant={plan.mostPopular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Plan Comparison"
            subtitle="Compare our plans to find the right fit for your business needs."
          />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Features</th>
                  <th className="p-4 text-center font-bold">Starter</th>
                  <th className="p-4 text-center font-bold bg-accurate-purple-50">Professional</th>
                  <th className="p-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">User accounts</td>
                  <td className="p-4 text-center">5</td>
                  <td className="p-4 text-center bg-accurate-purple-50">10</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Customer records</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Point of sale (POS)</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Inventory management</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Reporting</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Advanced</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Payment methods</td>
                  <td className="p-4 text-center">2</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Multiple</td>
                  <td className="p-4 text-center">All</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center bg-accurate-purple-50">Email & Phone</td>
                  <td className="p-4 text-center">Priority</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">API access</td>
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
                  <td className="p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our pricing and plans."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border p-6 animate-on-scroll">
                <h3 className="text-lg font-bold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining days in your billing cycle.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 animate-on-scroll">
                <h3 className="text-lg font-bold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 animate-on-scroll">
                <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept major credit cards, bank transfers, and mobile money payments including M-Pesa.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 animate-on-scroll">
                <h3 className="text-lg font-bold mb-2">Do you offer custom plans?</h3>
                <p className="text-gray-600">
                  Yes, for businesses with specific requirements, we offer custom plans. Please contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Plan?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our team is ready to help you select the best option for your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
