'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fi' | 'en';

type Translations = {
  navigation: {
    about: string;
    gallery: string;
    contact: string;
  };
  hero: {
    tagline: string;
  };
  about: {
    title: string;
    description: string;
  };
  gallery: {
    title: string;
  };
  contact: {
    title: string;
    address: string;
    city: string;
    instagram: string;
    map: string;
    contact: string;
    send: string;
    sending: string;
    success: string;
    successMessage: string;
    error: string;
    close: string;
    networkError: string;
    hours: {
      title: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
    };
  };
  footer: {
    copyright: string;
  };
  legal: {
    privacyTitle: string;
    updated: string;
    back: string;
    link: string;
  };
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Simple language detection without Intl API
const getLanguageFromUrl = (): Language | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  return lang === 'fi' || lang === 'en' ? lang : null;
};

const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'fi'; // Default to Finnish on server

  const urlLang = getLanguageFromUrl();
  if (urlLang) {
    return urlLang;
  }

  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';

  if (browserLang.startsWith('fi')) {
    return 'fi';
  }

  return 'en';
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fi';
    const initial = getLanguageFromUrl();
    return initial ?? detectLanguage();
  });
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (language === 'fi') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', language);
    }
    window.history.replaceState({}, '', url.toString());
  }, [language]);

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