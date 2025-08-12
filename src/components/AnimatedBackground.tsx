const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-crypto-darker/20" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
};

export default AnimatedBackground;