import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina K.",
      text: "Fatma did my bridal henna and it was absolutely stunning! The intricate designs were exactly what I dreamed of. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "Beautiful work and very professional. The henna lasted for weeks and looked amazing. Will definitely book again!",
      rating: 5,
    },
    {
      name: "Zainab A.",
      text: "Amazing artist! She listened to what I wanted and created a custom design that was perfect. The quality is outstanding.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Real experiences from satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-inter text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-playfair font-semibold text-primary">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.google.com/search?sca_esv=c66570702dbaae6e&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwOLGa2SI__7urxJyU-cj1EZdSSG8Paxnvkv49zOcb2cZiqn4vCM8zoJVVUE27wqPeGAJtOaYshOUx5Ibhxwk2L45oAB&q=Fatma+Henna+Art+Reviews&sa=X&ved=2ahUKEwiRhdmW87-QAxXGU0EAHb6bGQwQ0bkNegQIPRAD&biw=1536&bih=703&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Read More Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
