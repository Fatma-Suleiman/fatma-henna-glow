import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z' fill='%23b8663c' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Beautiful Henna Art for Your Special Moments
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
            Professional henna artist specializing in bridal, custom designs, and event henna
          </p>
          <p className="font-inter text-xl md:text-2xl font-semibold text-accent mb-8 animate-fade-in">
            Starting from Ksh. 500
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild variant="hero" size="lg" className="text-lg">
              <a 
                href="https://wa.me/254114532154?text=Hello%20Fatma%2C%20I%27d%20like%20to%20book%20a%20henna%20session" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
          <p className="font-inter text-sm text-muted-foreground mt-6">
            House calls available for a small additional fee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
