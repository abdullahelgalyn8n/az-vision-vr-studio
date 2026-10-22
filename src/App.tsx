/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { StudioPage } from './pages/StudioPage';
import { VisualDiariesPage } from './pages/VisualDiariesPage';
import { ContactPage } from './pages/ContactPage';
import { VRExperiencePage } from './pages/VRExperiencePage';
import { JourneyDetailPage } from './pages/JourneyDetailPage';
import { ProjectSiwaPage } from './pages/ProjectSiwaPage';
import { ServiceExplainedPage } from './pages/ServiceExplainedPage';
import { JourneysIndexPage } from './pages/JourneysIndexPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  // Sync RTL and document language attribute
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={`min-h-screen bg-[#070707] text-white selection:bg-[#b4ff39] selection:text-black flex flex-col justify-between ${currentLang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
        {/* Navigation Bar with Dedicated Page Links */}
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLanguage}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage currentLang={currentLang} />} />
            <Route path="/work" element={<WorkPage currentLang={currentLang} />} />
            <Route path="/work/siwa-oasis" element={<ProjectSiwaPage currentLang={currentLang} />} />
            <Route path="/work/siwa" element={<ProjectSiwaPage currentLang={currentLang} />} />
            <Route path="/work/service-explained" element={<ServiceExplainedPage currentLang={currentLang} />} />
            <Route path="/journeys" element={<JourneysIndexPage currentLang={currentLang} />} />
            <Route path="/journeys/:id" element={<JourneyDetailPage currentLang={currentLang} />} />
            <Route path="/studio" element={<StudioPage currentLang={currentLang} />} />
            <Route path="/visual-diaries" element={<VisualDiariesPage currentLang={currentLang} />} />
            <Route path="/contact" element={<ContactPage currentLang={currentLang} />} />
            <Route path="/start-a-conversation" element={<ContactPage currentLang={currentLang} />} />
            <Route path="/vr" element={<VRExperiencePage currentLang={currentLang} />} />
            <Route path="/vr/:sceneId" element={<VRExperiencePage currentLang={currentLang} />} />
            <Route path="/vr-experience" element={<VRExperiencePage currentLang={currentLang} />} />
            <Route path="*" element={<HomePage currentLang={currentLang} />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer currentLang={currentLang} />
      </div>
    </BrowserRouter>
  );
}
