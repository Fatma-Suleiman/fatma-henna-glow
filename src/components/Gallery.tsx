import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "/images/F4.jpg", alt: "Bridal henna design on hands" },
  { id: 2, src: "/images/client1.jpg" },
  { id: 3, src: "/images/F11.jpg" },
  { id: 4, src: "/images/S3.jpg" },
  { id: 5, src: "/images/S1.jpg" },
  { id: 6, src: "/images/F1.jpg" },
  { id: 7, src: "/images/F7.jpg" },
  { id: 8, src: "/images/S7.jpg" },
  { id: 9, src: "/images/F9.jpg" },
  { id: 10, src: "/images/S4.jpg" },
  { id: 11, src: "/images/SS1.jpg" },
  { id: 12, src: "/images/C2.jpg" },
  { id: 13, src: "/images/F12.jpg" },
  { id: 14, src: "/images/B1.jpg" },
  { id: 15, src: "/images/BB.jpg" },
  { id: 16, src: "/images/B3.jpg" },
  { id: 17, src: "/images/B4.jpg" },
  { id: 18, src: "/images/F8.jpg" },
  { id: 19, src: "/images/F10.jpg" },
  { id: 20, src: "/images/BB2.jpg" },
  { id: 21, src: "/images/BB3.jpg" },
  { id: 22, src: "/images/F6.jpg" },
  { id: 23, src: "/images/F7.jpg" },
  { id: 24, src: "/images/leg.jpg" },
  { id: 25, src: "/images/leg2.png" },
  { id: 26, src: "/images/T2.jpg" },
  { id: 27, src: "/images/SM.jpg" },
  { id: 28, src: "/images/P1.jpg" },
  { id: 29, src: "/images/P2.jpg" },
  { id: 30, src: "/images/tiny.jpg" },
];

const FIRST_COUNT = 6;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null); // index in images array
  const [expanded, setExpanded] = useState(false);

  const firstImages = images.slice(0, FIRST_COUNT);
  const remainingImages = images.slice(FIRST_COUNT);

  const getAlt = (img: { alt?: string; src?: string; id: number }) =>
    img.alt ?? `Image ${img.id} (${img.src?.split("/").pop()})`;

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

        {/* Grid showing first images + "view more" tile (tile hidden after click) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {firstImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group p-0 border-0"
              aria-label={`Open ${getAlt(image)}`}
            >
              <img
                src={image.src}
                alt={getAlt(image)}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-80 transition-opacity flex items-end">
                <p className="w-full text-center text-white bg-black/30 py-2 font-playfair text-sm">
                  {getAlt(image)}
                </p>
              </div>
            </button>
          ))}

          {/* Plain "View more" tile (no number). It disappears after you click it. */}
          {remainingImages.length > 0 && !expanded && (
            <div className="relative aspect-square rounded-lg overflow-hidden border border-dashed border-border flex items-center justify-center bg-muted/40">
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex flex-col items-center justify-center gap-2 px-4 py-3 text-center"
                aria-expanded={expanded}
                aria-controls="gallery-expanded"
              >
                <span className="text-2xl font-semibold text-foreground">
                  View more
                </span>
                <span className="text-sm text-muted-foreground">Show all images</span>
              </button>
            </div>
          )}
        </div>

        {/* Expanded area: shows remaining images inline when expanded */}
        {expanded && remainingImages.length > 0 && (
          <div id="gallery-expanded" className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
            {remainingImages.map((image, idx) => {
              const globalIndex = FIRST_COUNT + idx;
              return (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(globalIndex)}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group p-0 border-0"
                  aria-label={`Open ${getAlt(image)}`}
                >
                  <img
                    src={image.src}
                    alt={getAlt(image)}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-80 transition-opacity flex items-end">
                    <p className="w-full text-center text-white bg-black/30 py-2 font-playfair text-sm">
                      {getAlt(image)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/90 hover:bg-white transition"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={images[selectedImage].src}
                alt={getAlt(images[selectedImage])}
                className="mx-auto max-h-[80vh] w-auto rounded-md object-contain"
              />

              <p className="text-center text-white mt-3">{getAlt(images[selectedImage])}</p>
            </div>
          </div>
        )}

        <p className="font-inter text-center text-muted-foreground mt-8">
          Follow me on{" "}
          <a
            href="https://www.instagram.com/fatma_henna_nrb?igsh=MXh2dTUycXN0NWdjag=="
            className="text-primary hover:underline"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://www.facebook.com/share/16Fifk4st3/" className="text-primary hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </section>
  );
};

export default Gallery;
