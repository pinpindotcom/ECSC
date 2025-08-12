import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        toast({
          title: "Subscription Failed",
          description: "Please try again later.",
          variant: "destructive"
        });
        return;
      }

      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive early access to token launches and updates.",
      });

      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="bg-card border-border animate-fade-in-up">
      <CardHeader className="text-center">
        <div className=" inline-flex p-3 rounded-lg mx-auto">
          <Mail className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </CardTitle>
        <p className="text-base md:text-base lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Get early access to token launches and updates straight to your inbox.
        </p>
      </CardHeader>
      <CardContent>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full pl-5 h-15 hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
              required
            />
            <Button 
              type="submit" 
              className="w-max mx-auto text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Thank you for subscribing!</span>
            </div>
          </div>
        )}
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </CardContent>
    </Card>
  );
};

export default Newsletter;