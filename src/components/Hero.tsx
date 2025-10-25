import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background image (unchanged) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/images/F2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.35, // slightly darkens background
        }}
      />

      {/* Subtle overlay behind text to improve readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white drop-shadow-lg">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Beautiful Henna Art for Your Special Moments
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 mb-6 animate-fade-in">
            Professional henna artist specializing in bridal, custom designs, and event henna
          </p>
          <p className="font-inter text-xl md:text-2xl font-semibold text-amber-300 mb-8 animate-fade-in">
            Starting from Ksh. 500
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <p className="font-inter text-sm text-white/80 mt-6">
            House visits available for an additional fee to cater for transport costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
