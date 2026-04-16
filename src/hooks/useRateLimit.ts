import { useState, useCallback, useRef } from "react";

interface RateLimitOptions {
  maxAttempts: number;
  windowMs: number;
}

export const useRateLimit = ({ maxAttempts = 3, windowMs = 60000 }: RateLimitOptions) => {
  const [isLimited, setIsLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const attemptsRef = useRef<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkLimit = useCallback((): boolean => {
    const now = Date.now();
    // Remove expired attempts
    attemptsRef.current = attemptsRef.current.filter(t => now - t < windowMs);

    if (attemptsRef.current.length >= maxAttempts) {
      const oldestAttempt = attemptsRef.current[0];
      const unlockTime = oldestAttempt + windowMs;
      const remaining = Math.ceil((unlockTime - now) / 1000);
      
      setIsLimited(true);
      setRemainingTime(remaining);

      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        const now2 = Date.now();
        const rem = Math.ceil((unlockTime - now2) / 1000);
        if (rem <= 0) {
          setIsLimited(false);
          setRemainingTime(0);
          if (timerRef.current) clearInterval(timerRef.current);
        } else {
          setRemainingTime(rem);
        }
      }, 1000);

      return false;
    }

    attemptsRef.current.push(now);
    return true;
  }, [maxAttempts, windowMs]);

  return { isLimited, remainingTime, checkLimit };
};
