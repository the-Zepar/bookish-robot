import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Pricing Plans
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Basic"
            price="$9.99"
            description="We deliver in one month"
            features={["One month deliver", "24/7 support"]}
          />
          <PricingCard
            title="Pro"
            price="$19.99"
            description="Fast delivery"
            features={["Fast delivery", "Priority support"]}
            highlighted={true}
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}) {
  return (
    <div
      className={`flex flex-col p-6 bg-white rounded-lg shadow-lg ${
        highlighted ? "ring-2 ring-gray-900" : ""
      }`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 text-4xl font-bold">{price}</div>
      <p className="mt-2 text-gray-500">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" size={20} />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-6">Get Started</Button>
    </div>
  );
}
