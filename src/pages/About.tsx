import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Globe, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Newsletter from '@/components/Newsletter';
import AnimatedCounter from '@/components/AnimatedCounter';
import CryptoBackground from '@/components/CryptoBackground';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { number: 10000, label: 'Active Users', suffix: '+' },
    { number: 250, label: 'Token Launches', suffix: '+' },
    { number: 95, label: 'Success Rate', suffix: '%' },
    { number: 24, label: 'Hour Support', suffix: '/7' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Early Access',
      description: 'Get exclusive access to promising tokens before they hit major exchanges and gain mainstream attention.'
    },
    {
      icon: Users,
      title: 'No Wallet Keys Required',
      description: 'Invest safely without sharing private keys. Our secure smart contracts protect your funds while maintaining your control.'
    },
    {
      icon: Globe,
      title: 'Trusted Launch System',
      description: 'Every project undergoes rigorous verification and validation to ensure legitimacy and reduce investment risk.'
    },
    {
      icon: Award,
      title: 'Active Community',
      description: 'Join thousands of verified users sharing insights, analysis, and investment strategies in our thriving community.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[80vh] relative">
        <CryptoBackground />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">ChainLaunch</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            To revolutionize how users engage with early-stage crypto tokens through transparency, simplicity, and community empowerment.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-base md:prose-lg prose-neutral dark:prose-invert mx-auto">
            <div className="animate-fade-in-up">
              <p className="text-base md:text-lg text-muted-foreground mb-6 px-6 max-w-4xl">
                ChainLaunch began as a passion project by a team of crypto enthusiasts who wanted to give everyone 
                a fair chance at discovering valuable new crypto projects. We saw that early-stage investing was 
                dominated by insiders and venture capitalists, leaving retail investors out of the most lucrative opportunities.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6 px-6 max-w-4xl">
                Our founders recognized that while traditional platforms required users to manage complex wallet 
                connections and private keys, there had to be a better way. We built ChainLaunch to democratize 
                access to early-stage tokens while maintaining the security and transparency that crypto investors demand.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6 px-6 max-w-4xl">
                Today, we're proud to serve users globally, helping them discover and invest in the most promising 
                crypto projects before they gain mainstream attention. Our commitment to transparency, security, 
                and community empowerment continues to drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose ChainLaunch</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              The unique advantages that set us apart in the crypto investment space
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-left">
                  <div className="mb-4 p-3 rounded-lg bg-card inline-flex justify-start">
                    <value.icon className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl">{value.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Commitment Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Commitment to Trust</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              We are a registered crypto asset firm with strict compliance standards and use secure, 
              transparent smart contracts to protect investor funds. Every transaction is verifiable 
              on-chain, giving you complete transparency and peace of mind.
            </p>
            <Link to="/signup">
              <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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

export default About;