import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeftRight } from 'lucide-react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BTC');
  const [result, setResult] = useState<number>(0);
  const [rates, setRates] = useState<Record<string, number>>({});

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'BTC', name: 'Bitcoin' },
    { code: 'ETH', name: 'Ethereum' },
    { code: 'BNB', name: 'Binance Coin' },
    { code: 'SOL', name: 'Solana' },
  ];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Fetch crypto rates from CoinGecko
        const cryptoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd');
        const cryptoData = await cryptoResponse.json();
        
        // Fetch EUR rate
        const fiatResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const fiatData = await fiatResponse.json();
        
        setRates({
          USD: 1,
          EUR: fiatData.rates.EUR || 0.85,
          BTC: 1 / (cryptoData.bitcoin?.usd || 43000),
          ETH: 1 / (cryptoData.ethereum?.usd || 2580),
          BNB: 1 / (cryptoData.binancecoin?.usd || 315),
          SOL: 1 / (cryptoData.solana?.usd || 98)
        });
      } catch (error) {
        console.error('Failed to fetch rates:', error);
        // Fallback rates
        setRates({
          USD: 1,
          EUR: 0.85,
          BTC: 0.000023,
          ETH: 0.00039,
          BNB: 0.0032,
          SOL: 0.010
        });
      }
    };
    
    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fromRate = rates[fromCurrency] || 1;
    const toRate = rates[toCurrency] || 1;
    const numAmount = parseFloat(amount) || 0;
    
    // Convert via USD as base
    const usdAmount = numAmount / fromRate;
    const convertedAmount = usdAmount * toRate;
    
    setResult(convertedAmount);
  }, [amount, fromCurrency, toCurrency, rates]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Card className="bg-card/50 backdrop-blur-glass border border-border hover:transition-all duration-150">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Crypto-to-Euro Compliance <span className="text-primary">Converter</span></CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="rounded-xl bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-150 group animate-fade-in-up"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">From</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="rounded-xl bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-150 group animate-fade-in-up">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To</label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="rounded-xl bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-150 group animate-fade-in-up">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={swapCurrencies}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover:animate-scale-bounce"
          >
            <ArrowLeftRight className="h-4 w-4 text-primary" />
          </button>
        </div>

        <div className="text-center p-4 rounded-xl">
          <p className="text-sm text-muted-foreground">Result</p>
          <p className="text-2xl font-bold font-mono">
            {result.toLocaleString(undefined, { 
              maximumFractionDigits: toCurrency === 'BTC' || toCurrency === 'ETH' ? 8 : 2 
            })} {toCurrency}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;