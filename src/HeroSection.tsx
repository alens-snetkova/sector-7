import { useState } from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  onNavigateToPopular: () => void;
}

export default function HeroSection({ onNavigateToPopular }: HeroSectionProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const getShoeTransform = () => {
    switch (hoveredButton) {
      case 'popular': return 'rotate(-8deg) translateY(-5px)';
      case 'brands': return 'rotate(-5deg) scale(1.02)';
      case 'catalog': return 'rotate(0deg) translateY(-8px) scale(1.03)';
      case 'reviews': return 'rotate(16deg) scale(1.05)';
      case 'order': return 'rotate(5deg) scale(1.02)';
      case 'contacts': return 'rotate(60deg) translateY(3px)';
      default: return 'rotate(0deg)';
    }
  };

  return (
    <section className="hero">
      <div className="project-name">SECTOR 7</div>

      <div className="hero-content">
        <nav className="left-nav">
          <button 
            className="nav-btn btn-outline"
            onClick={onNavigateToPopular}
            onMouseEnter={() => setHoveredButton('popular')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            POPULAR
          </button>
          <button 
            className="nav-btn btn-outline"
            onMouseEnter={() => setHoveredButton('brands')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            BRANDS
          </button>
          <button 
            className="nav-btn btn-outline full-width"
            onMouseEnter={() => setHoveredButton('catalog')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            CATALOG
          </button>
        </nav>

        <div className="shoe-container">
          <img 
            src="/ShoeHero.webp" 
            alt="Кроссовок" 
            className="shoe-image"
          />
        </div>

        <nav className="right-nav">
          <button 
            className="nav-btn btn-outline full-width"
            onMouseEnter={() => setHoveredButton('reviews')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            REVIEWS
          </button>
          <button 
            className="nav-btn btn-outline"
            onMouseEnter={() => setHoveredButton('order')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            ORDER
          </button>
          <button 
            className="nav-btn btn-outline"
            onMouseEnter={() => setHoveredButton('contacts')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            CONTACTS
          </button>
        </nav>
      </div>
    </section>
  );
}