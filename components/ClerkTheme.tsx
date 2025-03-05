"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React, { useEffect, useState } from "react";

const ClerkTheme = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Function to check the current theme based on the class in the <html> tag
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDarkTheme(htmlElement.classList.contains("dark"));
    };

    // Check the theme on initial render
    checkTheme();

    // Add an event listener to update the theme if it changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: isDarkTheme ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkTheme;
