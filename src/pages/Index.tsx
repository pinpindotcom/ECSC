import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Rocket, TrendingUp, Users, Lock, CheckCircle, Shield } from 'lucide-react';
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
      title: 'We Monitor',
      description: 'Continuous surveillance of cyber threats and blockchain activity.',
    },
    {
      icon: Rocket,
      title: 'We Regulate',
      description: 'Enforcing EU cryptocurrency laws and cybersecurity standards.',
    },
    {
      icon: Shield,
      title: 'We Protect',
      description: "Assisting victims of cybercrime and preventing future attacks.",
    },
  ];

  const benefits = [
    {
      icon: Lock,
      title: 'Secure Reporting',
      description: 'Encrypted channels for whistleblowers and crime victims.',
    },
    {
      icon: Users,
      title: 'Community Awareness',
      description: 'Education programs and public safety alerts.',
    },
  ];

  const investmentFeatures = [
    {
      title: 'Real-Time Alerts',
      description: 'Receive instant cyber and crypto fraud warnings.',
    },
    {
      title: 'Cross-Platform Monitoring',
      description: 'Track threats across devices, apps, and networks.',
    },
    {
      title: 'Secure by Design',
      description: 'Advanced encryption for all data and communications.',
    },
    {
      title: 'Stay Ahead',
      description: 'Get intelligence reports before threats escalate.',
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
                text="Cybersecurity & Cryptocurrency Regulation"
                speed={25}
                className="mr-2 text-black"
              />{' '}
              <DecryptedText 
                text="Made Clear"
                speed={25}
                className="text-primary"
              />
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We protect Europe’s digital economy, combat cybercrime, and ensure safe and transparent cryptocurrency markets.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How We Safeguard the <span className="text-primary">Digital Economy</span></h2>
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
                    {feature.title === 'We Monitor' && (
                      <Search className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                    {feature.title === 'We Regulate' && (
                      <TrendingUp className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                    {feature.title === 'We Protect' && (
                      <Shield className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
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
                    {benefit.title === 'Secure Reporting' ? (
                      <Lock className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                    ) : benefit.title === 'Community Awareness' ? (
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
              Our Impact.<span className="text-primary"> Transparent Results</span>
            </h2>
            {/* <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              Our platform never asks for your private wallet keys. Your assets are held securely on public blockchains inside keyless smart contracts built for safety and scalability.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={61000} suffix="+" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Total Investors</h3>
                <p className="text-sm md:text-base text-muted-foreground">Cybercrime reports handled in the last year.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={24} prefix="€" suffix="M+" decimals={1} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Investor Earnings</h3>
                <p className="text-sm md:text-base text-muted-foreground">Illicit crypto recovered and returned to victims.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-glass border border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up text-center">
              <CardContent className="p-6 sm:p-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={20} prefix="€" suffix="M+" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">2025 Earnings Projection</h3>
                <p className="text-sm md:text-base text-muted-foreground">Saved for businesses through proactive threat prevention.</p>
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
              Work With Us to Secure <span className="text-primary">Europe’s Digital Future</span>
            </h2>
            {/* <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              Whether you're at home or on the go, ChainLaunch get instant access to early crypto opportunities anytime.
            </p> */}
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