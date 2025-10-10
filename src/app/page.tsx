'use client';

import Image from "next/image";
import { useTranslation } from "@/contexts/TranslationContext";
import { useState } from "react";

export default function Home() {
  const { t, language, setLanguage, isLoaded } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success - keep modal open and show success UI
        setFormData({ name: '', email: '', message: '' });
        setSubmitSuccess(true);
        // Auto-hide success after a while
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        // Error handling (response may not always be valid JSON)
        let errorData: any = null;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: await response.text() };
        }
        const msg = errorData?.error || t('contact.error');
        alert(msg as string);
        console.error('Form submission error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Verkkovirhe. Tarkista internetyhteytesi ja yritä uudelleen.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-black"> 
      {/* Header - Clean Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Brand logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/cafe_noosi_topbar.JPG"
                alt="Cafe Nöösi"
                width={200}
                height={40}
                priority
                className="h-6 sm:h-8 w-auto"
              />
            </a>
            
            {/* Right side - Navigation */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              {isLoaded && (
                <nav className="hidden md:flex space-x-8 animate-slide-up delay-200">
                  <a href="#about" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.about')}</a>
                      <a href="#gallery" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.gallery')}</a>
                  <a href="#contact" className="text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors">{t('navigation.contact')}</a>
                </nav>
              )}
              
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
          {isMobileMenuOpen && isLoaded && (
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
                      {t('navigation.gallery')}
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
           {isLoaded && (
             <div className="mb-2 sm:mb-8 md:mb-12">
               <div className="mb-4 sm:mb-8 md:mb-12 animate-slide-up">
                 <Image
                   src="/noosi_naama_logo_transp.png"
                   alt="Cafe Nöösi Logo"
                   width={300}
                   height={300}
                   priority
                   className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto object-contain"
                 />
               </div>
                <p className="text-xs sm:text-lg md:text-xl font-light leading-tight max-w-2xl md:max-w-3xl mx-auto animate-slide-up delay-200" style={{ fontSize: '0.7rem' }}>
                   <span className="md:hidden italic">Tamperelaiskahvila hyppysellisellä bauhausia</span>
                   <span className="hidden md:inline text-lg italic">Tamperelaiskahvila hyppysellisellä bauhausia</span>
                 </p>
              </div>
           )}
          </div>
      </section>

      {/* About Section - Golden Ratio Fibonacci Layout */}
      <section id="about" className="py-8 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            {isLoaded && (
              <div className="max-w-[70%]">
                <h3 className="text-base font-light mb-2 tracking-wide animate-slide-up">{t('about.title')}</h3>
                <div className="w-10 h-1 bg-[#A64845] mb-2 animate-slide-up delay-100"></div>
                <p className="leading-tight animate-slide-up delay-200" style={{ fontSize: '0.65rem' }}>
                  {t('about.description')}
                </p>
              </div>
            )}
            
            <div className="w-full relative overflow-hidden h-[200px]">
              <Image
                src="/cafe-noosi-tiski.jpg"
                alt="Cafe Noosi Counter"
                fill
                className="object-cover opacity-0"
                onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
              />
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[1.618fr_1fr] gap-4 h-[500px]">
            {/* Left side - Large content area (34) */}
            <div className="flex flex-col justify-center space-y-6">
              {isLoaded && (
                <div>
                  <h3 className="text-3xl font-light mb-6 tracking-wide animate-slide-up">{t('about.title')}</h3>
                  <div className="w-24 h-1 bg-[#A64845] mb-8 animate-slide-up delay-100"></div>
                  <p className="text-lg leading-relaxed animate-slide-up delay-200">
                    {t('about.description')}
                  </p>
                </div>
              )}
            </div>
            
            {/* Right side - Image */}
            <div className="flex items-center justify-center">
              <div className="aspect-square relative overflow-hidden w-full max-w-md">
                <Image
                  src="/cafe-noosi-tiski.jpg"
                  alt="Cafe Noosi Counter"
                  fill
                  className="object-cover opacity-0"
                  onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-8 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
           {isLoaded && (
             <div className="text-center mb-6 sm:mb-16">
              <h3 className="text-xl sm:text-3xl font-light mb-3 sm:mb-6 tracking-wide animate-slide-up">{t('gallery.title')}</h3>
              <div className="w-16 sm:w-24 h-1 bg-[#A64845] mx-auto animate-slide-up delay-100"></div>
             </div>
           )}
          
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
                    className="object-cover opacity-0"
                    onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                  />
                </div>
              </div>
              
              {/* Right side - Nested grid */}
              <div className="grid grid-rows-[0.62fr_0.38fr] gap-1 sm:gap-2">
                {/* Top right - Medium square (21) */}
                <div>
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="/cafe-noosi-olut.jpg"
                      alt="Cafe Noosi Drinks"
                      fill
                      className="object-cover opacity-0"
                      onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                    />
                  </div>
                </div>
                
                 {/* Bottom row with 3rd image and empty space */}
                 <div className="flex justify-between items-end h-full">
                   {/* Empty space (8) - left side */}
                   <div className="w-2/5"></div>
                   
                   {/* 3rd image - Varjo (13) - right side */}
                   <div className="w-3/5 aspect-square relative overflow-hidden max-h-full">
                    <Image
                       src="/cafe-noosi-design.jpg"
                       alt="Cafe Noosi Design"
                       fill
                       className="object-cover opacity-0"
                       onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                     />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-8 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          {/* Break line */}
          <div className="w-full h-2 bg-[#EEC156] mb-6 sm:mb-16"></div>
          
          {/* Golden ratio grid - 2 columns, right bigger than left */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-[1fr_1.618fr] gap-2 sm:gap-4 h-[200px] sm:h-[500px]">
            {/* Left column - Creme image (smaller width) */}
            <div className="relative overflow-hidden">
              <Image
                src="/noosi-creme.jpg"
                alt="Cafe Noosi Creme Dessert"
                fill
                className="object-cover opacity-0"
                onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
              />
            </div>
            
            {/* Right column - Bread image (bigger width) */}
            <div className="relative overflow-hidden">
              <Image
                src="/noosi-bread.jpg"
                alt="Cafe Noosi Bread"
                fill
                className="object-cover opacity-0"
                onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-20 bg-white">
         <div className="max-w-6xl mx-auto px-3 sm:px-6 text-center">
           {isLoaded && (
             <>
               <h3 className="text-xl sm:text-3xl font-light mb-3 sm:mb-6 tracking-wide animate-slide-up">{t('contact.title')}</h3>
               <div className="w-16 sm:w-24 h-1 bg-[#A64845] mx-auto mb-6 sm:mb-12 animate-slide-up delay-100"></div>
             </>
           )}
           
           {/* Success Banner */}
           {submitSuccess && (
             <div className="mb-6 sm:mb-8 bg-green-50 text-green-800 border border-green-200 px-4 py-3 rounded-sm animate-slide-up">
               {t('contact.success')}
             </div>
           )}

           {isLoaded && (
             <div className="space-y-6 sm:space-y-8">
               <div className="animate-slide-up delay-200">
                 <h4 className="text-xs sm:text-lg font-light mb-1 sm:mb-2">{t('contact.address')}</h4>
                 <p className="text-xs sm:text-lg font-light">{t('contact.city')}</p>
               </div>
               
               {/* Opening Hours */}
               <div className="animate-slide-up delay-300">
                 <h4 className="text-xs sm:text-lg font-light mb-3 sm:mb-4">Aukioloajat</h4>
                 <div className="space-y-1 text-xs sm:text-base font-light">
                   <p>Pe 14-20</p>
                   <p>La 11-20</p>
                   <p>Su 11-18</p>
                 </div>
               </div>
             
             {/* Big Logo */}
             <div className="py-6 sm:py-8">
               <div className="w-40 h-40 sm:w-64 sm:h-64 mx-auto relative">
         <Image
                   src="/noosi_logo_big.JPG"
                   alt="Cafe Noosi Logo"
                   fill
                   className="object-contain opacity-0"
                   onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                 />
               </div>
             </div>
             
               {/* Contact Form */}
               <div className="animate-slide-up delay-400">
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-block text-xs sm:text-sm uppercase tracking-wider hover:text-[#A64845] transition-colors border border-gray-300 px-4 py-2 rounded-sm hover:border-[#A64845]"
                  >
                    {t('contact.contact')}
                  </button>
               </div>
               
               <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 animate-slide-up delay-500">
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
               
              {/* Info Icons - side by side, as large as possible within container */}
              <div className="animate-slide-up delay-600">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-6xl mx-auto">
                  {/* Dog Icon */}
                  <div className="w-full sm:px-2 md:px-4">
                    <Image
                      src="/koira.png"
                      alt="Dog Friendly"
                      width={2400}
                      height={600}
                      className="w-full h-auto opacity-0"
                      onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                    />
                  </div>
                  
                  {/* Payment Icon */}
                  <div className="w-full sm:px-2 md:px-4">
                    <Image
                      src="/korttimaksut.png"
                      alt="Card Payments"
                      width={2400}
                      height={600}
                      className="w-full h-auto opacity-0"
                      onLoadingComplete={(img) => { img.classList.remove('opacity-0'); img.classList.add('animate-fade-in'); }}
                    />
                  </div>
                </div>
              </div>
             </div>
           )}
         </div>
      </section>

      {/* Footer */}
       <footer className="py-8 bg-black text-white text-center">
         <div className="space-y-3">
           {isLoaded && <p className="text-sm tracking-wide animate-slide-up">{t('footer.copyright')}</p>}
           <div className="text-xs space-x-4">
             <a href="/tietosuojaseloste" className="underline hover:text-[#EEC156]">Tietosuojaseloste</a>
           </div>
         </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 p-4 flex items-center justify-center">
          {/* Artistic overlay with subtle blur and gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => { setIsContactModalOpen(false); setSubmitSuccess(false); }}
          />
          {/* Modal panel with accent line and soft gradient */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 max-w-md w-full p-6 rounded-none border border-[#EEC156]/50 shadow-2xl overflow-hidden transform transition-all duration-300 animate-slide-up"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-light tracking-wide">{t('contact.contact')}</h3>
              <button 
                onClick={() => { setIsContactModalOpen(false); setSubmitSuccess(false); }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitSuccess ? (
              <div className="space-y-6 text-center">
                <div className="mx-auto w-28 h-28 relative">
                  <Image
                    src="/noosi_logo_big.JPG"
                    alt="Cafe Nöösi Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-light">Kiitos yhteydenotosta, vastaamme mahdollisimman pian!</span>
                </div>
                <button
                  onClick={() => { setIsContactModalOpen(false); setSubmitSuccess(false); }}
                  className="w-full bg-[#A64845] text-white py-2 px-4 rounded-sm hover:bg-opacity-90 transition-colors text-sm uppercase tracking-wider"
                >
                  {t('contact.close')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-light mb-1">Nimi</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#A64845] text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light mb-1">Sähköposti</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#A64845] text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-1">Viesti</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#A64845] text-sm resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#A64845] text-white py-2 px-4 rounded-sm transition-colors text-sm uppercase tracking-wider ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      {t('contact.sending')}
                    </span>
                  ) : (
                    t('contact.send')
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
