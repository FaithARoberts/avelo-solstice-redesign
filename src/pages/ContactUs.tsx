import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24-48 hours.",
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />

      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Contact Us
        </h1>

        <div className="max-w-md mx-auto space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-[18px] space-y-4">
            <h2 className="text-xl font-heading font-semibold text-avelo-text-dark">
              Get in Touch
            </h2>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-avelo-purple mt-0.5" />
              <div>
                <p className="font-body font-medium text-avelo-text-dark">Phone</p>
                <a href="tel:1-346-553-1405" className="text-avelo-purple font-body">
                  1-346-553-1405
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-avelo-purple mt-0.5" />
              <div>
                <p className="font-body font-medium text-avelo-text-dark">Email</p>
                <a href="mailto:customer.service@aveloair.com" className="text-avelo-purple font-body">
                  customer.service@aveloair.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-avelo-purple mt-0.5" />
              <div>
                <p className="font-body font-medium text-avelo-text-dark">Hours</p>
                <p className="text-avelo-text-medium font-body">Mon - Sun: 5:00 AM - 8:00 PM PT</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-avelo-purple mt-0.5" />
              <div>
                <p className="font-body font-medium text-avelo-text-dark">Headquarters</p>
                <p className="text-avelo-text-medium font-body">
                  Avelo Airlines<br />
                  Houston, TX 77002
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-[18px] space-y-4">
            <h2 className="text-xl font-heading font-semibold text-avelo-text-dark">
              Send us a Message
            </h2>

            <div className="space-y-2">
              <label className="text-[13px] font-body text-avelo-text-medium font-medium">
                Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-body text-avelo-text-medium font-medium">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-body text-avelo-text-medium font-medium">
                Subject
              </label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can we help?"
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-body text-avelo-text-medium font-medium">
                Message
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more..."
                className="min-h-[120px] bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60 resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-avelo-purple text-white font-heading text-xl rounded-2xl hover:bg-avelo-purple/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ContactUs;
