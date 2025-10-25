import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Bridal Henna: Traditional vs Modern Designs",
      excerpt: "Explore the beautiful evolution of bridal henna designs and find the perfect style for your special day.",
      date: "March 15, 2024",
    },
    {
      title: "Caring for Your Henna: Tips for Long-Lasting Color",
      excerpt: "Learn the best practices to maintain your henna's vibrant color and make it last as long as possible.",
      date: "March 10, 2024",
    },
    {
      title: "The Art of Henna: History and Cultural Significance",
      excerpt: "Discover the rich history and cultural importance of henna art across different traditions.",
      date: "March 5, 2024",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from the Blog
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Tips, inspiration, and henna artistry insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] border-border group cursor-pointer"
            >
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-inter">{post.date}</span>
                </div>
                <CardTitle className="font-playfair text-xl group-hover:text-primary transition-[var(--transition-smooth)]">
                  {post.title}
                </CardTitle>
                <CardDescription className="font-inter">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto font-inter">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
