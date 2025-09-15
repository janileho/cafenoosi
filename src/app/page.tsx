'use client';

import Image from "next/image";
import { useTranslation } from "@/contexts/TranslationContext";
import { useState } from "react";

export default function Home() {
  const { t, language, setLanguage } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header - Clean Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Brand name */}
            <div className="text-sm sm:text-xl font-light tracking-wider">
              cafe nöösi
            </div>
            
            {/* Right side - Navigation */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.about')}</a>
                    <a href="#gallery" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.menu')}</a>
                <a href="#contact" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.contact')}</a>
              </nav>
              
              <div className="flex space-x-1 sm:space-x-2">
                <button 
                  onClick={() => setLanguage('fi')}
                  className={`text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                    language === 'fi' ? 'text-[#A64845]' : 'text-gray-600 hover:text-[#A64845]'
                  }`}
                >
                  FI
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                    language === 'en' ? 'text-[#A64845]' : 'text-gray-600 hover:text-[#A64845]'
                  }`}
                >
                  EN
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-[#A64845] transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4 text-right">
                <a 
                  href="#about" 
                  className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.about')}
                </a>
                    <a 
                      href="#gallery" 
                      className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('navigation.menu')}
                    </a>
          <a
                  href="#contact" 
                  className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.contact')}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
        style={{
          backgroundImage: 'url(/cafe-noosi-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
        
         <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-3 sm:px-6">
           <div className="mb-2 sm:mb-8 md:mb-12">
             <h2 className="text-xl sm:text-6xl md:text-8xl font-light mb-2 sm:mb-6 md:mb-8 tracking-wide leading-tight">
               cafe nöösi
             </h2>
             <div className="w-8 sm:w-24 md:w-32 h-px bg-[#A64845] mx-auto mb-2 sm:mb-8 md:mb-10"></div>
              <p className="text-xs sm:text-lg md:text-xl font-light leading-tight max-w-2xl md:max-w-3xl mx-auto" style={{ fontSize: '0.7rem' }}>
                <span className="md:hidden">{t('hero.subtitle')}</span>
                <span className="hidden md:inline text-lg">{t('hero.subtitle')}</span>
              </p>
           </div>
           
         </div>
      </section>

      {/* About Section - Golden Ratio Fibonacci Layout */}
      <section id="about" className="py-8 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <div className="text-center">
              <h3 className="text-base font-light mb-2 tracking-wide">{t('about.title')}</h3>
              <div className="w-6 h-px bg-[#A64845] mx-auto mb-2"></div>
              <p className="leading-tight" style={{ fontSize: '0.65rem' }}>
                {t('about.description')}
              </p>
            </div>
            
            <div className="w-full aspect-square relative overflow-hidden max-w-sm mx-auto">
              <Image
                src="/cafe-noosi-tiski.jpg"
                alt="Cafe Noosi Counter"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[1.618fr_1fr] gap-4 h-[500px]">
            {/* Left side - Large content area (34) */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">{t('about.title')}</h3>
                <div className="w-16 h-px bg-[#A64845] mb-8"></div>
                <p className="text-lg leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex items-center justify-center">
              <div className="aspect-square relative overflow-hidden w-full max-w-md">
                <Image
                  src="/cafe-noosi-tiski.jpg"
                  alt="Cafe Noosi Counter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-8 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
           <div className="text-center mb-6 sm:mb-16">
             <h3 className="text-xl sm:text-3xl font-light mb-3 sm:mb-6 tracking-wide">{t('gallery.title')}</h3>
             <div className="w-10 sm:w-16 h-px bg-[#A64845] mx-auto"></div>
           </div>
          
          {/* Golden Ratio Nested Grid Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-[1.618fr_1fr] gap-2 sm:gap-4 h-[200px] sm:h-[500px]">
              {/* Left side - Large square (34) */}
              <div>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/cafe-noosi-kukka.jpg"
                    alt="Cafe Noosi Interior Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right side - Nested grid */}
              <div className="grid grid-rows-[1fr_0.4fr] gap-2 sm:gap-4">
                {/* Top right - Medium square (21) */}
                <div>
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="/cafe-noosi-olut.jpg"
                      alt="Cafe Noosi Drinks"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                 {/* Bottom row with 3rd image and empty space */}
                 <div className="flex justify-between items-end">
                   {/* Empty space (8) - left side */}
                   <div className="w-2/5"></div>
                   
                   {/* 3rd image - Varjo (13) - right side */}
                   <div className="w-3/5 aspect-square relative overflow-hidden">
                     <Image
                       src="/cafe-noosi-design.jpg"
                       alt="Cafe Noosi Design"
                       fill
                       className="object-cover"
                     />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-20 bg-white">
         <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
           <h3 className="text-xl sm:text-3xl font-light mb-3 sm:mb-6 tracking-wide">{t('contact.title')}</h3>
           <div className="w-10 sm:w-16 h-px bg-[#A64845] mx-auto mb-6 sm:mb-12"></div>
           
           <div className="space-y-6 sm:space-y-8">
             <div>
               <h4 className="text-xs sm:text-lg font-light mb-1 sm:mb-2">{t('contact.address')}</h4>
               <p className="text-xs sm:text-lg font-light">{t('contact.city')}</p>
             </div>
             
             {/* Big Logo */}
             <div className="py-6 sm:py-8">
               <div className="w-40 h-40 sm:w-64 sm:h-64 mx-auto relative">
          <Image
                   src="/noosi_logo_big.jpg"
                   alt="Cafe Noosi Logo"
                   fill
                   className="object-contain"
                 />
               </div>
             </div>
             
             <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
               <a 
                 href="https://www.instagram.com/cafenoosi" 
          target="_blank"
          rel="noopener noreferrer"
                 className="text-xs sm:text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors"
               >
                 {t('contact.instagram')}
        </a>
        <a
                 href="https://maps.google.com/?q=Satakunnankatu+7+B+22,+33100+Tampere" 
          target="_blank"
          rel="noopener noreferrer"
                 className="text-xs sm:text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors"
               >
                 {t('contact.map')}
               </a>
             </div>
           </div>
         </div>
      </section>

      {/* Footer */}
       <footer className="py-8 bg-black text-white text-center">
         <p className="text-sm tracking-wide">{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}
