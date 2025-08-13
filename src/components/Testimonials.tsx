import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Early Investor',
      content: 'ChainLaunch helped me get into three tokens before they hit major exchanges. My portfolio is up 340% this year!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'Crypto Trader',
      content: 'The research quality is incredible. Every project they launch gets vetted thoroughly. I trust ChainLaunch with my early investments.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Elena Rodriguez',
      role: 'DeFi Enthusiast',
      content: 'Finally, a platform that gives retail investors access to early-stage opportunities. The community scoring system gives me confidence.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'David Kim',
      role: 'Portfolio Manager',
      content: 'ChainLaunch has become essential for my investment strategy. The early access has given my clients a significant edge in the market.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Partners</span> Say
          </h2>
          {/* <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
            Join thousands who've discovered their next big opportunity through ChainLaunch.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card/50 backdrop-blur-glass border border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;