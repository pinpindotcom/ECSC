import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Headphones } from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import CryptoBackground from '@/components/CryptoBackground';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number || null,
          subject: formData.subject,
          message: formData.message || null
        }]);

      if (error) {
        toast({
          title: "Failed to Send Message",
          description: "Please try again later.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ full_name: '', email: '', phone_number: '', subject: '', message: '' });
    } catch {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Crypto Street', 'Financial District', 'New York, NY 10004']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM EST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@cryptovault.com', 'Response within 24 hours']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM EST', 'Weekend: Emergency support only']
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other traders and get peer support',
      availability: 'Always Active'
    },
    {
      icon: Headphones,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Business Hours'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[80vh]">
        <CryptoBackground />
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-4xl lg:text-5xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about our services? Need help with your account? 
              Our team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Send us a Message</CardTitle>
                <p className="text-sm md:text-base text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input
                        id="full_name"
                        value={formData.full_name}
                        onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                        placeholder="John Doe"
                        className="hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone_number">Phone Number</Label>
                    <Input
                      id="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={(e) => setFormData({...formData, phone_number: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                      className="hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="How can we help you?"
                      className="hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe your inquiry in detail..."
                      className="hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                      rows={6}
                    />
                  </div>

                  <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info) => (
                <Card 
                  key={info.title}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-150 group"
                >
                  <CardContent className="p-6">
                    <div className="mb-3 inline-flex p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Channels */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Support Channels</CardTitle>
                <p className="text-muted-foreground">
                  Multiple ways to get the help you need
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportChannels.map((channel) => (
                  <div 
                    key={channel.title}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-background hover:bg-secondary/30 transition-colors duration-150 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg">
                      <channel.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{channel.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{channel.description}</p>
                      <span className="text-xs text-primary font-medium">{channel.availability}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Note */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Answers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our FAQ section for instant answers to common questions about trading, 
                  security, and account management.
                </p>
                <Link to="/faq">
                  <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                    View FAQ
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;