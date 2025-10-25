import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            About Fatma
          </h2>
          <p className="font-inter text-lg text-center text-muted-foreground mb-12">
            Your trusted henna artist in Nairobi
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-background hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Passionate Artist</h3>
              <p className="font-inter text-muted-foreground">
                Creating beautiful henna art with love and dedication for every client
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="font-inter text-muted-foreground">
                Using only premium black and brown henna for lasting, beautiful results
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Client Focused</h3>
              <p className="font-inter text-muted-foreground">
                Personalized service for brides, events, and special occasions
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-center text-foreground leading-relaxed">
              Hello! I'm Fatma Suleiman, a passionate henna artist based in Nairobi. With experience 
              in creating intricate designs, I specialize in variety of henna types, custom patterns, and event artistry. 
              Whether you're preparing for your wedding day, celebrating a special occasion, or simply want to 
              adorn yourself with beautiful henna art, I'm here to bring your vision to life with precision 
              and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
