import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Contact Us
          </h1>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We'd love to hear from you. Please fill out this form or use our
                contact information below.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-gray-500" />
                  <span>123 Main St, Anytown, USA 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-500" />
                  <span>support@acmeinc.com</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
