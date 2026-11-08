import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './data/resumeData';
import { ProjectDetail } from './data/types';

export const App: React.FC = () => {
  // 浅色模式设为默认
  const [darkMode, setDarkMode] = useState(false);
  // 咕咕嘎嘎模式设为默认开启
  const [isGuguMode, setIsGuguMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleSelectProjectById = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-dark-oat text-zinc-100' : 'bg-oatmeal text-coffee'}`}>
      {/* 暖色波点微弱底纹 */}
      <div className="fixed inset-0 pointer-events-none bg-cozy-dots opacity-80 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          isGuguMode={isGuguMode}
          setIsGuguMode={setIsGuguMode}
        />
        <main className="flex-grow">
          <HeroBento 
            isGuguMode={isGuguMode}
            onSelectProjectById={handleSelectProjectById}
          />
          <ProjectsSection 
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <ExperienceTimeline />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
