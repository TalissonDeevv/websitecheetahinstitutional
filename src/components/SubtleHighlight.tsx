import { useEffect, useState } from "react";

interface SubtleHighlightProps {
  children: React.ReactNode;
  className?: string;
}

const SubtleHighlight = ({ children, className = "" }: SubtleHighlightProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation start to make it more subtle
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-px bg-current transition-all duration-[2000ms] ease-out ${
          isVisible ? 'opacity-20 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{ transformOrigin: 'left center' }}
      />
    </span>
  );
};

export default SubtleHighlight;
