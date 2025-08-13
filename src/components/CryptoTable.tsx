import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TableRowData {
  id: string;
  name: string; // Threat or Asset
  value: string; // Risk Level or Price
  change: number; // Change %
  impact: string; // Impact / Market Cap
}

const CryptoTable = () => {
  const [rows, setRows] = useState<TableRowData[]>([
    { id: 'ransomware', name: 'Ransomware Attacks', value: 'High', change: 12, impact: '€1.2B' },
    { id: 'phishing', name: 'Phishing Campaigns', value: 'Medium', change: 8, impact: '€560M' },
    { id: 'bitcoin', name: 'Bitcoin', value: '€0', change: 0, impact: '€0' },
    { id: 'ethereum', name: 'Ethereum', value: '€0', change: 0, impact: '€0' }
  ]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum&order=market_cap_desc&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();

        setRows((prevRows) =>
          prevRows.map((row) => {
            const match = data.find((coin: any) => coin.id === row.id);
            if (match) {
              return {
                ...row,
                value: `€${match.current_price.toLocaleString('en-US')}`,
                change: match.price_change_percentage_24h || 0,
                impact: `€${Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  maximumFractionDigits: 1
                }).format(match.market_cap)}`
              };
            }
            return row;
          })
        );
      } catch (error) {
        console.error('Failed to fetch crypto data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 backdrop-blur-glass border border-border rounded-2xl p-6 transition-all duration-150">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        Current <span className="text-primary">Cyber Threat</span> & Crypto Market Watch
      </h3>
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: '25%' }}>Name</TableHead>
            <TableHead style={{ width: '25%' }}>Risk Level / Price</TableHead>
            <TableHead style={{ width: '25%' }}>24h Change</TableHead>
            <TableHead style={{ width: '25%' }} className="text-right">Impact / Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-muted/90 transition-colors">
              <TableCell style={{ width: '25%' }} className="font-medium">{row.name}</TableCell>
              <TableCell style={{ width: '25%' }} className="font-mono font-semibold">{row.value}</TableCell>
              <TableCell style={{ width: '25%' }}>
                <div
                  className={`flex items-center space-x-1 ${
                    row.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {row.change >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-semibold">
                    {row.change >= 0 ? '+' : ''}
                    {row.change.toFixed(1)}%
                  </span>
                </div>
              </TableCell>
              <TableCell style={{ width: '25%' }} className="text-right font-mono">{row.impact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;