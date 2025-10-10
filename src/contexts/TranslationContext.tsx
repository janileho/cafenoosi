'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fi' | 'en';

type Translations = {
  navigation: {
    about: string;
    menu: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    english: string;
  };
  about: {
    title: string;
    description: string;
    coffee: string;
    coffeeDesc: string;
    wine: string;
    wineDesc: string;
    food: string;
    foodDesc: string;
    atmosphere: string;
    atmosphereDesc: string;
  };
  gallery: {
    title: string;
  };
  food: {
    title: string;
    subtitle: string;
    description: string;
    bread: string;
    breadDesc: string;
    desserts: string;
    dessertsDesc: string;
  };
  contact: {
    title: string;
    address: string;
    city: string;
    instagram: string;
    map: string;
    send?: string;
    sending?: string;
    success?: string;
    error?: string;
    close?: string;
    contact?: string;
  };
  footer: {
    copyright: string;
  };
  // Legal pages (structure kept flexible)
  legal?: Record<string, unknown>;
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Simple language detection without Intl API
const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'fi'; // Default to Finnish on server
  
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
  
  // Check if Finnish
  if (browserLang.startsWith('fi')) {
    return 'fi';
  }
  
  // Default to English for all other languages
  return 'en';
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoaded(false);
        const response = await fetch(`/translations/${language}.json`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        const data = await response.json();
        setTranslations(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to null
        setTranslations(null);
        setIsLoaded(true);
      }
    };

    loadTranslations();
  }, [language]);

  // Detect language on mount
  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
  }, []);

  // Translation function
  const t = (key: string): string => {
    if (!translations) return key; // Return key if translations not loaded
    
    const keys = key.split('.');
    let value: unknown = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};