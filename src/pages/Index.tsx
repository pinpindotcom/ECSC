import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Rocket, TrendingUp, Users, Lock, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import CryptoTable from '@/components/CryptoTable';
import CurrencyConverter from '@/components/CurrencyConverter';
import AnimatedCounter from '@/components/AnimatedCounter';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CryptoBackground from '@/components/CryptoBackground';
import DecryptedText from '@/components/DecryptedText';

const Index = () => {
  const features = [
    {
      icon: Search,
      title: 'We Find',
      description: 'We research and vet early-stage crypto projects.',
    },
    {
      icon: Rocket,
      title: 'We Launch',
      description: 'You get early access before exchange listings.',
    },
    {
      icon: TrendingUp,
      title: 'You Grow',
      description: "Be among the first to invest in tomorrow's top tokens.",
    },
  ];

  const benefits = [
    {
      icon: Lock,
      title: 'Secure Transactions',
      description: 'End-to-end encrypted transaction flow ensures your investments stay private and protected.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'All projects are peer-reviewed and scored by our early access community before public launch.',
    },
  ];

  const investmentFeatures = [
    {
      title: 'Real-Time Insights',
      description: 'Track the latest token launches and price changes as they happen.',
    },
    {
      title: 'Cross-Device Access',
      description: 'Use ChainLaunch on desktop, tablet, or mobile without missing a beat.',
    },
    {
      title: 'Safe by Design',
      description: 'Smart contracts with no wallet keys required — your funds, your control.',
    },
    {
      title: 'Be Early. Stay Ahead',
      description: "Back tomorrow's leaders before the crowd catches on.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-15">
        <CryptoBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-4xl lg:text-5xl font-bold mb-6">
              <DecryptedText 
                text="Blockchain Technology"
                speed={25}
                className="mr-2 text-black"
              />{' '}
              <DecryptedText 
                text="Made Simple"
                speed={25}
                className="text-primary"
              />
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We find and launch the top emerging crypto tokens — early, verified, ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Crypto Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CryptoTable />
        </div>
      </section>

      {/* Currency Converter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CurrencyConverter />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 pl-8 text-left">
                  <div className="mb-3 inline-flex p-3 rounded-lg relative">
                    {feature.title === 'We Launch' && (
                      <Rocket className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                    {feature.title === 'You Grow' && (
                      <TrendingUp className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                    {feature.title === 'We Find' && (
                      <Search className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex p-3 rounded-lg relative">
                    {benefit.title === 'Secure Transactions' ? (
                      <Lock className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    ) : benefit.title === 'Community First' ? (
                      <Users className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    ) : (
                      <benefit.icon className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Performance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Total Trust. <span className="text-primary">Transparent Performance.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              Our platform never asks for your private wallet keys. Your assets are held securely on public blockchains inside keyless smart contracts built for safety and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={85000} suffix="+" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Total Investors</h3>
                <p className="text-sm md:text-base text-muted-foreground">Verified users actively investing in early-stage tokens.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={12.4} prefix="€" suffix="M+" decimals={1} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Investor Earnings</h3>
                <p className="text-sm md:text-base text-muted-foreground">Total profits earned through early access opportunities.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={28} prefix="€" suffix="M+" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">2025 Earnings Projection</h3>
                <p className="text-sm md:text-base text-muted-foreground">Based on token performance, community growth, and upcoming launches.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Invest On Your Terms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Invest On <span className="text-primary">Your Terms</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              Whether you're at home or on the go, ChainLaunch get instant access to early crypto opportunities anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {investmentFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start space-x-4 p-6 bg-card/50 backdrop-blur-glass border border-border rounded-2xl hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              Ready to start? It only takes a minute to join.
            </p>
            <Link to="/contact">
              <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Index;