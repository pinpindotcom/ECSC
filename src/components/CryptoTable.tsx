import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  image: string;
}

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h');
        const data = await response.json();
        
        const formattedData: CryptoData[] = data.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change24h: coin.price_change_percentage_24h || 0,
          marketCap: coin.market_cap,
          image: coin.image
        }));

        setCryptos(formattedData);
      } catch (error) {
        console.error('Failed to fetch crypto data:', error);
        // Fallback to mock data
        const mockData: CryptoData[] = [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 43250.50,
          change24h: 2.35,
          marketCap: 847000000000,
          image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price: 2580.75,
          change24h: -1.25,
          marketCap: 310000000000,
          image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png'
        },
        {
          id: 'binancecoin',
          name: 'Binance Coin',
          symbol: 'BNB',
          price: 315.40,
          change24h: 3.67,
          marketCap: 47000000000,
          image: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png'
        },
        {
          id: 'solana',
          name: 'Solana',
          symbol: 'SOL',
          price: 98.25,
          change24h: 5.82,
          marketCap: 42000000000,
          image: 'https://assets.coingecko.com/coins/images/4128/small/Solana.png'
        },
        {
          id: 'cardano',
          name: 'Cardano',
          symbol: 'ADA',
          price: 0.485,
          change24h: -2.14,
          marketCap: 17000000000,
          image: 'https://assets.coingecko.com/coins/images/975/small/cardano.png'
        },
      ];

        setCryptos(mockData);
      }
    };

    fetchCryptoData();
    
    // Update prices every 30 seconds
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(marketCap);
  };

  const getCoinImageId = (coinId: string) => {
    const imageMap: { [key: string]: string } = {
      'bitcoin': '1',
      'ethereum': '279',
      'binancecoin': '825',
      'solana': '4128',
      'cardano': '975'
    };
    return imageMap[coinId] || '1';
  };

  return (
    <div className="bg-card/50 backdrop-blur-glass border border-border rounded-2xl p-6 hover: transition-all duration-150">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Live Crypto Prices</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cryptos.map((crypto) => (
            <TableRow key={crypto.id} className="hover:bg-muted/90 transition-colors">
              <TableCell className="font-medium">
                <div className="flex items-center space-x-5">
                  <img 
                    src={crypto.image}
                    alt={crypto.name}
                    className="w-6 h-6 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/24/ff6b6b/ffffff?text=${crypto.symbol.charAt(0)}`;
                    }}
                  />
                  <div className="flex flex-col">
                    <span>{crypto.name}</span>
                    <span className="text-muted-foreground text-sm">{crypto.symbol}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-mono font-semibold">
                {formatPrice(crypto.price)}
              </TableCell>
              <TableCell>
                <div className={`flex items-center space-x-1 ${
                  crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {crypto.change24h >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-semibold">
                    {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono">
                {formatMarketCap(crypto.marketCap)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;