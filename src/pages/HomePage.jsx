import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import OurStorySection from '../components/OurStorySection';
import MissionVisionSection from '../components/MissionVisionSection';
import CoreValuesSection from '../components/CoreValuesSection';
import BenefitsSection from '../components/BenefitsSection';
import PodcastSection from '../components/PodcastSection';
import BlogsSection from '../components/BlogsSection';
import StoriesSection from '../components/StoriesSection';
import JoinCommunitySection from '../components/JoinCommunitySection';
import Footer from '../components/Footer';

const HomePage = () => {
  // Handle scrolling to hash anchor when navigating from other pages or links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-600">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <BenefitsSection />
      <PodcastSection />
      <BlogsSection />
      <StoriesSection />
      <JoinCommunitySection />
      <Footer />
    </div>
  );
};

export default HomePage;
