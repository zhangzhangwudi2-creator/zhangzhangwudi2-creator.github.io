import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { ProjectDetail } from './data/types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBento />
        <ProjectsSection
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
