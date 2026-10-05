import { useState } from 'react';
import './globals.css'; // Подключаем глобальные стили и переменные
import HeroSection from './HeroSection';
import PopularSection from './PopularSection';

export default function App() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'popular'>('hero');

  return (
    <>
      {currentSection === 'hero' && (
        <HeroSection onNavigateToPopular={() => setCurrentSection('popular')} />
      )}
      
      {currentSection === 'popular' && (
        <PopularSection onBack={() => setCurrentSection('hero')} />
      )}
    </>
  );
}