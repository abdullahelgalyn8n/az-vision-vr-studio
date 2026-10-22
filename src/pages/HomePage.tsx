import React from 'react';
import { Hero } from '../components/Hero';
import { WorkSection } from '../components/WorkSection';
import { StudioSection } from '../components/StudioSection';
import { VisualDiariesSection } from '../components/VisualDiariesSection';
import { CtaBanner } from '../components/CtaBanner';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  currentLang: 'en' | 'ar';
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero
        currentLang={currentLang}
        onStepInside={() => navigate('/vr/siwa')}
      />

      <WorkSection
        currentLang={currentLang}
        onOpenVRWithScene={(sceneId) => navigate(`/vr/${sceneId}`)}
        onOpenInquiry={() => navigate('/contact')}
      />

      <StudioSection
        currentLang={currentLang}
        onMeetStudio={() => navigate('/studio')}
      />

      <VisualDiariesSection
        currentLang={currentLang}
        onOpenVRWithScene={(sceneId) => navigate(`/vr/${sceneId}`)}
      />

      <CtaBanner
        currentLang={currentLang}
        onStartConversation={() => navigate('/contact')}
      />
    </div>
  );
};
