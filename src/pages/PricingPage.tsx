import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Check, Shield, X } from "lucide-react";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly" | "semi-annual" | "annual">("monthly");

  const pricingPlans = [
    {
      name: "Basic",
      description: "Start for free and accept payments with ease",
      monthlyPrice: 0,
      quarterlyPrice: 0,
      semiAnnualPrice: 0,
      annualPrice: 0,
      features: [
        "1 user",
        "10 invoices/month",
        "Mpesa & POS enabled",
        "Wallet module",
        "Community support"
      ],
      mostPopular: false,
      cta: "Get Started",
      disabled: false
    },
    {
      name: "Standard",
      description: "Level up with unlimited invoicing, more users, and smart tools",
      monthlyPrice: 500,
      quarterlyPrice: 1450, // 7% discount (500 * 3 * 0.93)
      semiAnnualPrice: 2600, // 13% discount (500 * 6 * 0.87)
      annualPrice: 5100, // 15% discount (500 * 12 * 0.85)
      features: [
        "5 users",
        "Unlimited invoices",
        "Mpesa, POS & bank payments",
        "Wallet module",
        "Priority email support",
        "1-month FREE trial"
      ],
      mostPopular: true,
      cta: "Start Free Trial",
      disabled: false
    },
    {
      name: "Gold",
      description: "For growing businesses that need more than accounting",
      monthlyPrice: 750,
      quarterlyPrice: 2200, // 7% discount (750 * 3 * 0.93)
      semiAnnualPrice: 4000, // 13% discount (750 * 6 * 0.87)
      annualPrice: 7700, // 15% discount (750 * 12 * 0.85)
      features: [
        "20 users",
        "Unlimited invoices",
        "Mpesa, POS, bank payments",
        "Wallet module",
        "Payroll module",
        "Business management module",
        "Multi-Branch support",
        "Priority chat support"
      ],
      mostPopular: false,
      cta: "Upgrade to Gold",
      disabled: true
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large or complex businesses",
      monthlyPrice: null,
      quarterlyPrice: null,
      semiAnnualPrice: null,
      annualPrice: null,
      customPrice: "Custom",
      features: [
        "Unlimited users",
        "Unlimited invoices",
        "Mpesa, POS, bank payments",
        "Wallet, Payroll, Business Management modules",
        "Multi-Branch support",
        "API access",
        "Dedicated account manager"
      ],
      mostPopular: false,
      cta: "Contact Sales",
      disabled: true
    }
  ];

  const getPrice = (plan: any) => {
    if (plan.customPrice) return plan.customPrice;
    switch (billingPeriod) {
      case "monthly":
        return plan.monthlyPrice;
      case "quarterly":
        return plan.quarterlyPrice;
      case "semi-annual":
        return plan.semiAnnualPrice;
      case "annual":
        return plan.annualPrice;
      default:
        return plan.monthlyPrice;
    }
  };

  const getPeriodLabel = () => {
    switch (billingPeriod) {
      case "monthly":
        return "month";
      case "quarterly":
        return "quarter";
      case "semi-annual":
        return "6 months";
      case "annual":
        return "year";
      default:
        return "month";
    }
  };

  const getDiscount = () => {
    switch (billingPeriod) {
      case "quarterly":
        return "7%";
      case "semi-annual":
        return "13%";
      case "annual":
        return "15%";
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-blue-100 via-white to-blue-50">
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
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {["monthly", "quarterly", "semi-annual", "annual"].map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period as any)}
                className={`px-6 py-3 rounded-full transition-all ${
                  billingPeriod === period
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="capitalize">{period}</span>
                {getDiscount() && billingPeriod === period && (
                  <span className="ml-2 text-sm bg-white/20 px-2 py-0.5 rounded-full">
                    Save {getDiscount()}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map(plan => (
              <div
                key={plan.name}
                className={`relative rounded-xl border ${
                  plan.mostPopular
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-300 bg-gradient-to-b from-white to-blue-50 animate-pulse-slow transform hover:scale-105 transition-all duration-500"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                } bg-white p-6 animate-on-scroll transition-all duration-300`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 py-1 text-center text-sm font-semibold text-white shadow-md animate-bounce-subtle">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${plan.mostPopular ? "text-blue-700" : ""}`}>{plan.name}</h3>
                  <p className="text-gray-600 mt-1 h-12">{plan.description}</p>
                </div>
                <div className="mb-6">
                  {plan.customPrice ? (
                    <p className="text-3xl font-bold text-blue-700">{plan.customPrice}</p>
                  ) : (
                    <p className={`text-3xl font-bold ${plan.mostPopular ? "text-blue-700" : "text-blue-700"}`}>
                      KES {getPrice(plan)?.toLocaleString()}
                      {plan.monthlyPrice === 0 && <span className="text-lg text-gray-500 font-normal"> Free</span>}
                    </p>
                  )}
                  {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                    <p className="text-gray-600 mt-1">
                      per {getPeriodLabel()}
                    </p>
                  )}
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 ${plan.mostPopular ? "text-blue-600" : "text-blue-600"} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.mostPopular
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:shadow-xl scale-[1.02]"
                    : plan.name === "Free" ? "bg-gradient-to-r from-sunset-400 to-sunset-500" : ""}`}
                  variant={plan.mostPopular || plan.name === "Free" ? "default" : "outline"}
                  asChild
                >
                  <Link to="https://app.myaccuratebook.com/register" target="_blank">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <SectionHeading title="Plan Comparison" subtitle="Compare our plans to find the right fit for your business needs." />
          <div className="overflow-x-auto mt-12 shadow-md rounded w-full">
            <table className="branded-table w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left font-bold rounded-tl-xl">Features</th>
                  <th className="p-4 text-center font-bold">Basic</th>
                  <th className="p-4 text-center font-bold bg-blue-100">Standard</th>
                  <th className="p-4 text-center font-bold bg-sunset-100">Gold</th>
                  <th className="p-4 text-center font-bold rounded-tr-xl">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-medium">User accounts</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-blue-50">5</td>
                  <td className="p-4 text-center bg-sunset-50">20</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Invoices</td>
                  <td className="p-4 text-center">10/month</td>
                  <td className="p-4 text-center bg-blue-50">Unlimited</td>
                  <td className="p-4 text-center bg-sunset-50">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Payment methods</td>
                  <td className="p-4 text-center">Mpesa, POS</td>
                  <td className="p-4 text-center bg-blue-50">Mpesa, POS, Bank</td>
                  <td className="p-4 text-center bg-sunset-50">Mpesa, POS, Bank</td>
                  <td className="p-4 text-center">All methods</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Wallet module</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center bg-blue-50"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center bg-sunset-50"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Payroll module</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-blue-50"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-sunset-50"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Business management module</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-blue-50"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-sunset-50"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Multi-location support</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-blue-50"><X className="h-5 w-5 mx-auto text-red-500" /></td>
                  <td className="p-4 text-center bg-sunset-50"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 mx-auto text-green-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Community</td>
                  <td className="p-4 text-center bg-blue-50">Email</td>
                  <td className="p-4 text-center bg-sunset-50">Chat</td>
                  <td className="p-4 text-center">Dedicated</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium rounded-bl-xl">API access</td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 text-center bg-sunset-50">
                    <X className="h-5 w-5 mx-auto text-red-500" />
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
              <div className="bg-white rounded-lg border border-blue-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                <h3 className="text-lg font-bold mb-2 text-blue-800">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining days in your billing cycle.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-blue-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                <h3 className="text-lg font-bold mb-2 text-blue-800">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 1-month free trial for our Standard plan. No credit card required to get started.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-sunset-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-sunset-200">
                <h3 className="text-lg font-bold mb-2 text-blue-700">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept major credit cards, bank transfers, and mobile money payments including M-Pesa.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-sunset-100 p-6 animate-on-scroll shadow-sm hover:shadow-md transition-all hover:border-sunset-200">
                <h3 className="text-lg font-bold mb-2 text-blue-700">Do you offer custom plans?</h3>
                <p className="text-gray-600">
                  Yes, our Enterprise plan offers customized solutions for large or complex businesses. Please contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Plan?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is ready to help you select the best option for your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
