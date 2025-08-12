import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CryptoBackground from '@/components/CryptoBackground';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Wallet, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  TrendingUp,
  MousePointer,
  ArrowRight,
  ChevronDown,
  CheckCircle
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Token Discovery',
      description: 'Uncover the most promising early-stage tokens before they go mainstream.',
      features: ['AI-powered screening', 'Market trend analysis', 'Risk assessment tools', 'Early access alerts']
    },
    {
      icon: Wallet,
      title: 'Secure Wallet Integration',
      description: 'Easily connect and manage your crypto wallets across multiple chains.',
      features: ['Multi-chain support', 'Hardware wallet compatibility', 'Secure key management', 'Cross-chain transfers']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Access up-to-date metrics, charts, and trends on emerging tokens.',
      features: ['Live price tracking', 'Volume analytics', 'Technical indicators', 'Performance metrics']
    },
    {
      icon: MousePointer,
      title: 'One-Click Investing',
      description: 'Invest in vetted tokens with simplified, one-click transactions.',
      features: ['Instant purchases', 'Automated strategies', 'Risk management', 'Portfolio rebalancing']
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Tap into expert reviews and community ratings before making a move.',
      features: ['Expert analysis', 'Community ratings', 'Peer discussions', 'Social sentiment']
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Tracking',
      description: 'Monitor your holdings and performance from a single dashboard.',
      features: ['Real-time updates', 'Profit/loss tracking', 'Performance analytics', 'Tax reporting']
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with ChainLaunch?',
      answer: 'Simply create an account, complete the verification process, and you can start discovering and investing in early-stage tokens immediately. No wallet keys required!'
    },
    {
      question: 'Is my investment secure?',
      answer: 'Yes, we use enterprise-grade security measures including multi-signature wallets, cold storage, and regular security audits. All transactions are transparent and traceable on-chain.'
    },
    {
      question: 'What fees do you charge?',
      answer: 'We charge a small transaction fee for investments, typically 1-2%. There are no monthly fees or hidden charges. You only pay when you invest.'
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer: 'Absolutely! Your funds remain under your control. You can withdraw or transfer your tokens at any time, subject to network confirmation times.'
    },
    {
      question: 'How do you verify token projects?',
      answer: 'Our team conducts thorough due diligence including smart contract audits, team verification, tokenomics analysis, and community assessment before listing any project.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[80vh]">
        <CryptoBackground />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering your crypto journey with tools that help you discover, invest, and grow securely.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-0 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-card rounded-lg">
                    <service.icon className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-muted-foreground px-2">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border animate-fade-in-up hover:border-primary/50 transition-all duration-150 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <CardTitle className={`text-base md:text-lg text-left transition-colors duration-150 ${openFaq === index ? 'text-primary' : ''}`}>
                          {faq.question}
                        </CardTitle>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-150 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <CardContent className="pt-0">
                      <p className={`text-muted-foreground transition-all duration-150 delay-200 ${openFaq === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Services;