import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Palette, PartyPopper } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Bridal Henna",
      description: "Exquisite traditional and contemporary bridal henna designs for your special day. Let me adorn you with intricate patterns that celebrate your love story.",
      features: ["Full hand and feet designs", "Custom patterns", "Pre-wedding consultations"],
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Personalized henna art tailored to your unique style and preferences. From minimalist to elaborate, I bring your vision to life.",
      features: ["Personalized patterns", "Modern & traditional styles", "Black or brown henna"],
    },
    {
      icon: PartyPopper,
      title: "Event Henna",
      description: "Perfect for parties, festivals, corporate events, and celebrations. Add a touch of artistry to any gathering with professional henna services.",
      features: ["Group bookings", "Quick designs", "Event packages available"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional henna artistry for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] border-border"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-playfair text-2xl">{service.title}</CardTitle>
                <CardDescription className="font-inter text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="font-inter text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-secondary rounded-2xl p-8">
          <p className="font-playfair text-2xl font-semibold text-foreground mb-2">
            Starting Price: Ksh. 500
          </p>
          <p className="font-inter text-muted-foreground mb-6">
            Quality black and brown henna • House calls available
          </p>
          <Button
  asChild
  size="lg"
  className="font-bold text-white bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
             hover:from-amber-200 hover:via-amber-300 hover:to-amber-600
             shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50
             transition-all rounded-lg px-6 py-3
             focus:outline-none focus:ring-4 focus:ring-amber-300/30"
>
  <a
    href="https://wa.me/254114532154?text=Hello%20Fatma%2C%20I%27d%20like%20to%20inquire%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get a Quote
  </a>
</Button>


        </div>
      </div>
    </section>
  );
};

export default Services;
