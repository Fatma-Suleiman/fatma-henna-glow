import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - these would be replaced with actual gallery images
  const images = [
    { id: 1, alt: "Bridal henna design on hands" },
    { id: 2, alt: "Intricate mehndi pattern" },
    { id: 3, alt: "Traditional henna art" },
    { id: 4, alt: "Modern minimalist henna" },
    { id: 5, alt: "Bridal feet henna design" },
    { id: 6, alt: "Custom henna pattern" },
    { id: 7, alt: "Event henna design" },
    { id: 8, alt: "Detailed bridal mehndi" },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Explore my latest henna artistry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-75 transition-[var(--transition-smooth)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-playfair text-white text-sm text-center px-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-muted transition-[var(--transition-smooth)]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-w-4xl w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <p className="font-playfair text-2xl text-foreground text-center px-6">
                {images[selectedImage].alt}
              </p>
            </div>
          </div>
        )}

        <p className="font-inter text-center text-muted-foreground mt-8">
          Follow me on{" "}
          <a href="#" className="text-primary hover:underline">Instagram</a> and{" "}
          <a href="#" className="text-primary hover:underline">Facebook</a> for more designs
        </p>
      </div>
    </section>
  );
};

export default Gallery;
