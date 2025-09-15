import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/noosi_logo.JPG"
                alt="Cafe Noosi Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <h1 className="text-2xl font-light tracking-wide">CAFE NOOSI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm uppercase tracking-wider hover:text-[#D4A574] transition-colors">About</a>
              <a href="#menu" className="text-sm uppercase tracking-wider hover:text-[#D4A574] transition-colors">Menu</a>
              <a href="#contact" className="text-sm uppercase tracking-wider hover:text-[#D4A574] transition-colors">Contact</a>
            </nav>
          </div>
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
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
              1960-70 -lukujen modernismia
            </h2>
            <div className="w-24 h-px bg-[#D4A574] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Bauhausin funktionalismia kanavoiva tamperelaiskahvila. Tervetuloa kahville tai viinille, 
              bryleelle tai kekkeruusille, leivälle tai uuden aallon pöperöille.
            </p>
          </div>
          
          <div className="mt-12">
            <p className="text-base md:text-lg font-light italic">
              A Tampere café channeling 1960s-70s modernism and Bauhaus functionalism. 
              Welcome for coffee or wine, brulee or kekkeruusi, sandwich or traditional pöperö with a new wave take.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">MODERNISM & FUNCTIONALISM</h3>
                <div className="w-16 h-px bg-[#D4A574] mb-8"></div>
                <p className="text-lg leading-relaxed">
                  Cafe Noosi embodies the clean lines and functional beauty of 1960s-70s modernism, 
                  drawing inspiration from Bauhaus principles of form following function.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-[#D4A574]">COFFEE</h4>
                  <p className="text-sm leading-relaxed">Carefully selected beans, expertly prepared</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-[#D4A574]">WINE</h4>
                  <p className="text-sm leading-relaxed">Curated selection of quality wines</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-[#D4A574]">FOOD</h4>
                  <p className="text-sm leading-relaxed">Traditional with a modern twist</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-[#D4A574]">ATMOSPHERE</h4>
                  <p className="text-sm leading-relaxed">Clean, functional, beautiful</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[1.618] relative overflow-hidden">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-6 tracking-wide">SPACE & DESIGN</h3>
            <div className="w-16 h-px bg-[#D4A574] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/cafe-noosi-design.jpg"
                alt="Cafe Noosi Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/cafe-noosi-olut.jpg"
                alt="Cafe Noosi Drinks"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/cafe-noosi-kukka.jpg"
                alt="Cafe Noosi Interior Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-6 tracking-wide">FOOD & DRINKS</h3>
            <div className="w-16 h-px bg-[#D4A574] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-light mb-4 tracking-wide">TRADITIONAL WITH A MODERN TWIST</h4>
                <p className="text-lg leading-relaxed text-gray-600">
                  Experience the perfect blend of traditional Finnish flavors with contemporary presentation. 
                  From freshly baked bread to delicate crème desserts, each dish reflects our commitment to quality and design.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm uppercase tracking-wider mb-2 text-[#D4A574]">BREAD</h5>
                  <p className="text-sm leading-relaxed">Freshly baked daily</p>
                </div>
                <div>
                  <h5 className="text-sm uppercase tracking-wider mb-2 text-[#D4A574]">DESSERTS</h5>
                  <p className="text-sm leading-relaxed">Delicate crème specialties</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/noosi-bread.jpg"
                  alt="Fresh Bread"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/noosi-creme.jpg"
                  alt="Crème Dessert"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-light mb-6 tracking-wide">VISIT US</h3>
          <div className="w-16 h-px bg-[#D4A574] mx-auto mb-12"></div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-light mb-2">SATAKUNNANKATU 7 B 22</h4>
              <p className="text-lg font-light">33100 TAMPERE</p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.instagram.com/cafenoosi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-[#D4A574] transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://maps.google.com/?q=Satakunnankatu+7+B+22,+33100+Tampere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-[#D4A574] transition-colors"
              >
                Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p className="text-sm tracking-wide">© 2024 CAFE NOOSI</p>
      </footer>
    </div>
  );
}
