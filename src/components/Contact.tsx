import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about new designs and special offers.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Ready to book your henna session? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-inter font-medium">WhatsApp (Preferred)</p>
                      <a 
                        href="https://wa.me/254114532154" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-inter text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
                      >
                        +254 114 532154
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-inter font-medium">Phone</p>
                      <a 
                        href="tel:0114532154"
                        className="font-inter text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
                      >
                        0114 532154
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-inter font-medium">Email</p>
                      <a 
                        href="mailto:fatmasquare71@gmail.com"
                        className="font-inter text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
                      >
                        fatmasquare71@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="pt-6">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Quick Book via WhatsApp</h3>
                <p className="font-inter mb-6 opacity-90">
                  Click below to start a conversation on WhatsApp and book your henna session instantly.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a 
                    href="https://wa.me/254114532154?text=Hello%20Fatma%2C%20I%27d%20like%20to%20book%20a%20henna%20session" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Book Now on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary border-0">
            <CardContent className="pt-6">
              <h3 className="font-playfair text-2xl font-semibold text-center mb-2">
                Subscribe to Newsletter
              </h3>
              <p className="font-inter text-center text-muted-foreground mb-6">
                Get updates on new designs, special offers, and henna tips
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="font-inter"
                />
                <Button type="submit" variant="hero" className="sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
