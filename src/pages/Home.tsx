import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Zap, Shield, Smartphone } from "lucide-react";
import placeholder from "/placeholder.svg";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TestimonialsCardProps {
  quote: string;
  author: string;
}

import { Link } from "react-router-dom";
import { slogans, pv } from "@/constant/constant";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Product showcase"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src={placeholder}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {slogans}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {pv}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="shop">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    Shop Now
                  </Button>
                </Link>
                <Link to="#features">
                  <Button
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon={<Zap size={24} />}
              title="Lightning Fast"
              description="Fast delivery with small fee"
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Secure & Reliable"
              description="Your data is protected with state-of-the-art security measures."
            />
            <FeatureCard
              icon={<Star size={24} />}
              title="User-Friendly"
              description="Intuitive design ensures a smooth experience for all users."
            />

            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile Optimized"
              description="Access your work from anywhere with our mobile-friendly design."
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <TestimonialCard
              quote="The service is fast and reliable."
              author="Jane Doe, CEO of TechCorp"
            />
            <TestimonialCard
              quote="The interface is intuitive, and the features are powerful. It's the perfect balance of simplicity and functionality."
              author="John Smith, Freelance Designer"
            />
            <TestimonialCard
              quote="Customer support is top-notch. Any issues we've had were resolved quickly and efficiently."
              author="Emily Johnson, Project Manager"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Workflow?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of satisfied users who have revolutionized their
                work process. Try our product today and experience the
                difference.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Start your free 14-day trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
      <div className="p-3 rounded-full bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({ quote, author }: TestimonialsCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
      <p className="text-gray-500 dark:text-gray-400 italic">"{quote}"</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}
