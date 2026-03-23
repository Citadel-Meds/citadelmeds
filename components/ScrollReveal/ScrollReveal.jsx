"use client";

import React, { useRef, useEffect, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? "scroll-reveal--visible" : ""} ${className}`}
      style={
        isVisible && delay
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
