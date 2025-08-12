import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import CryptoBackground from '@/components/CryptoBackground';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I create an account on ChainLaunch?',
          answer: 'Creating an account is simple! Click the "Sign Up" button, enter your email and create a password. You\'ll receive a verification email to activate your account. Once verified, you can start exploring early-stage token opportunities immediately.'
        },
        {
          question: 'Do I need to provide my private keys?',
          answer: 'No! ChainLaunch operates differently from traditional DEXs. You don\'t need to connect your wallet or share private keys. We use secure, audited smart contracts that allow you to invest while maintaining full custody of your funds.'
        }
      ]
    },
    {
      title: 'Account Management',
      faqs: [
        {
          question: 'How can I reset my password?',
          answer: 'Click "Forgot Password" on the login screen, enter your registered email, and follow the instructions sent to your inbox to reset your password.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes. Please contact our support team via the "Contact Support" page. Once verified, we’ll process your account deletion within 24-48 hours.'
        }
      ]
    },
    {
      title: 'Security & Trust',
      faqs: [
        {
          question: 'How secure is my investment?',
          answer: 'Security is our top priority. We use enterprise-grade encryption, multi-signature wallets, and regular security audits. All transactions are transparent and verifiable on-chain. Your funds remain under your control at all times.'
        },
        {
          question: 'Are the token projects verified?',
          answer: 'Yes! Every project undergoes our rigorous 7-point verification process including smart contract audits, team verification, tokenomics analysis, legal compliance review, and community assessment before being listed.'
        },
        {
          question: 'What happens if a project fails?',
          answer: 'While we can\'t guarantee project success, our vetting process significantly reduces risk. We provide ongoing monitoring and will alert users to any red flags. Remember, all crypto investments carry inherent risks.'
        },
        {
          question: 'Is ChainLaunch audited?',
          answer: 'Yes, our smart contracts and platform infrastructure are regularly audited by independent third-party firms. Audit reports are published publicly for transparency.'
        },
        {
          question: 'How do you prevent scams and rug pulls?',
          answer: 'We implement a strict vetting process, including KYC/AML checks, smart contract audits, team background verification, and escrow protections where necessary. Suspicious projects are immediately flagged or removed.'
        },
        {
          question: 'What happens if ChainLaunch gets hacked?',
          answer: 'In the unlikely event of a breach, our multi-layered security protocols and cold storage mechanisms protect user funds. We maintain an emergency response plan and insurance coverage for certain risks.'
        },
        {
          question: 'How do I verify that a token is legitimate?',
          answer: 'Each token listing on ChainLaunch includes on-chain proof, audit results, and team credentials. You can also review community insights and expert ratings before making any decisions.'
        },
        {
          question: 'Is my personal information shared with third parties?',
          answer: 'No. We follow strict data privacy policies and do not sell or share your information with third parties. All personal data is encrypted and stored securely according to GDPR standards.'
        }
      ]
    },
    {
      title: 'Investing & Fees',
      faqs: [
        {
          question: 'What\'s the minimum investment amount?',
          answer: 'The minimum investment varies by project but is typically around $50-100 USD equivalent. This keeps early-stage investing accessible while ensuring serious participation.'
        },
        {
          question: 'Can I withdraw my tokens anytime?',
          answer: 'Yes! Once you\'ve invested, the tokens are yours. You can withdraw, transfer, or trade them at any time. Withdrawal times depend on the blockchain network and typically take 1-5 minutes.'
        }
      ]
    },
    {
      title: 'Platform Features',
      faqs: [
        {
          question: 'How does token discovery work?',
          answer: 'Our AI-powered discovery engine scans emerging projects across multiple blockchains, analyzing on-chain metrics, social sentiment, team credibility, and market potential. Projects are ranked by our proprietary scoring algorithm.'
        },
        {
          question: 'What analytics do you provide?',
          answer: 'We provide real-time price charts, volume analytics, holder distribution, liquidity metrics, social sentiment analysis, and expert commentary. All data is updated in real-time and sourced from multiple reliable providers.'
        },
        {
          question: 'How do community insights work?',
          answer: 'Our community of verified traders and crypto experts share reviews, ratings, and insights on each project. Users can see aggregate ratings, read detailed reviews, and participate in discussions before making investment decisions.'
        },
        {
          question: 'How often is the token data updated?',
          answer: 'Token data including charts and analytics is refreshed every 5–10 seconds using WebSocket and REST API integrations from trusted data providers.'
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[80vh]">
        <CryptoBackground />
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-primary">
              Questions
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find answers to common questions about ChainLaunch and early-stage token investing
          </p>
        </div>
      </section>


      {/* FAQ Categories */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={category.title} className="mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">{category.title}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <Card key={faqIndex} className="bg-card border-border">
                      <Collapsible 
                        open={openFaq === globalIndex} 
                        onOpenChange={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors duration-150">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base md:text-lg text-left pr-4">{faq.question}</CardTitle>
                              <ChevronDown className={`h-4 w-4 md:h-5 md:w-5 text-muted-foreground transition-transform duration-150 flex-shrink-0 ${openFaq === globalIndex ? 'rotate-180' : ''}`} />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-12 animate-fade-in-up">
              <p className="text-muted-foreground mb-4">No FAQs found matching "{searchTerm}"</p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 px-2">
              Our support team is here to help you get started with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                  Contact Support
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="text-sm px-5 py-4 rounded-full bg-card/80 text-primary border border-primary transition duration-150 ease-in-out hover:bg-card hover:shadow-md hover:shadow-primary/30 hover:scale-[1.01] will-change-transform md:text-base md:px-6 md:py-5 lg:text-lg lg:px-7 lg:py-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </Layout>
  );
};

export default FAQ;