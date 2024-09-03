import placeholder from "/placeholder.svg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            About Acme Inc
          </h1>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                At Acme was founded on the belief that cutting-edge technology
                should be accessible to everyone. We started with a simple goal:
                to create a one-stop shop where customers can find the latest
                and greatest in mobile technology, all while enjoying a seamless
                shopping experience. Over the years, we’ve grown into a trusted
                retailer, known for our commitment to quality, affordability,
                and exceptional customer service.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                Our team is composed of tech enthusiasts who are passionate
                about mobile technology. We stay on top of the latest trends and
                innovations, so we can bring you the best products on the
                market. Whether you’re a tech-savvy individual looking for the
                newest flagship model, or someone who needs a reliable phone for
                everyday use, we’re here to help you find exactly what you’re
                looking for.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                We believe in the power of technology to transform businesses
                and improve lives. That's why we're constantly evolving our
                product, listening to our users, and pushing the boundaries of
                what's possible.
              </p>
            </div>
            <img
              src={placeholder}
              alt="Team photo"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 text-center max-w-3xl mx-auto">
            Looking to the future, we aim to continue expanding our product
            offerings and enhancing our services to meet the evolving needs of
            our customers. We’re committed to maintaining our reputation as a
            trusted source for mobile technology, and we’re excited to explore
            new opportunities to serve you better.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Innovation"
              description="We constantly push the boundaries of what's possible, embracing new technologies and ideas."
            />
            <ValueCard
              title="User-Centric"
              description="Our users are at the heart of everything we do. We listen, learn, and adapt to meet their needs."
            />
            <ValueCard
              title="Integrity"
              description="We believe in transparency, honesty, and ethical business practices in all our dealings."
            />
            <ValueCard
              title="Collaboration"
              description="We foster a culture of teamwork, both internally and with our customers and partners."
            />
            <ValueCard
              title="Excellence"
              description="We strive for the highest standards in our product, our service, and our people."
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <TeamMember
              name="John Doe"
              role="CEO & Founder"
              img={placeholder}
            />
            <TeamMember name="Jane Smith" role="CTO" img={placeholder} />
            <TeamMember
              name="Mike Johnson"
              role="Head of Design"
              img={placeholder}
            />
            <TeamMember
              name="Sarah Brown"
              role="Head of Customer Success"
              img={placeholder}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. If
            you're passionate about technology and want to make a difference,
            we'd love to hear from you.
          </p>
          <div className="flex justify-center">
            <a href="mailto:example@example.com">
              <Button>View Open Positions</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
      <CheckCircle className="h-12 w-12 text-green-500" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}

function TeamMember({ name, role, img }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img
        src={img}
        alt={name}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  );
}
