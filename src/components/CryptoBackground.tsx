import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CryptoBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.08)_1px,transparent_1px)] bg-[size:6rem_6rem] animate-pulse" />

      {/* Binary rain effect with more text */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const phrases = ['0101', '1010', 'BTC', 'ETH', 'WEB3', 'DEFI', 'NFT', '001', '110', 'HODL'];
          const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
          
          return (
            <motion.div
              key={i}
              className="absolute text-primary/20 font-mono text-sm font-bold"
              style={{
                left: `${(i * 4) % 100}%`,
              }}
              animate={{
                y: [-50, window.innerHeight + 50],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {randomPhrase}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoBackground;