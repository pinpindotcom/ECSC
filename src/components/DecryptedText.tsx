import { useEffect, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  shouldFadeToRed?: boolean;
  className?: string;
}

export default function DecryptedText({
  text,
  speed = 100,
  shouldFadeToRed = false,
  className = "",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [showRedTransition, setShowRedTransition] = useState<boolean>(false);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setDisplayText((prev) => {
          const newText = text
            .split("")
            .map((char, index) => {
              if (index < currentIndex) return char;
              if (index > currentIndex + 2) return " "; // Less flicker
              if (char === " ") return " ";
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
          return newText;
        });

        if (Math.random() > 0.5) { // Faster progression
          setCurrentIndex((prev) => prev + 1);
        }
      }, speed);

      return () => clearInterval(interval);
    } else {
      setDisplayText(text);
      setIsComplete(true);
      
      // Trigger red transition for "Made Simple" after completion
      if (shouldFadeToRed) {
        setTimeout(() => {
          setShowRedTransition(true);
        }, 200);
      }
    }
  }, [currentIndex, text, speed, characters, shouldFadeToRed]);

  const getTextColorClass = () => {
    if (shouldFadeToRed && isComplete) {
      return showRedTransition ? 'text-animate-red' : 'text-animate-initial';
    }
    return '';
  };

  return (
    <span className={`${className} ${getTextColorClass()}`}>
      {displayText}
    </span>
  );
}