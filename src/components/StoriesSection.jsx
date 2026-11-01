import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';
import StoryDetailModal from './StoryDetailModal';
import LoadingSpinner from './LoadingSpinner';
import { storiesAPI } from '../services/api';

// Fallback story data matching the design spec
const fallbackStory = {
  _id: "preview-story-1",
  title: "Finding My Voice",
  content: "For years, I suffered in silence. Heavy periods, excruciating pain, and the shame that came with it. I thought I was alone until I found this community. Now I know I'm not broken, I'm human.",
  submitterName: "Anonymous",
  category: "Personal Experience",
  submittedAt: "2024-01-14",
  isAnonymous: true
};

const StoriesSection = () => {
  const [recentStory, setRecentStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStories = useCallback(async () => {
    try {
      const { data } = await storiesAPI.getAll({ limit: 6, sort: 'newest' });

      if (data?.success && data.data.stories.length > 0) {
        // Fetch full content for the first story
        try {
          const firstId = data.data.stories[0]._id;
          const { data: storyData } = await storiesAPI.getById(firstId);
          if (storyData?.success && storyData.data.story) {
            setRecentStory({
              ...storyData.data.story,
              submittedAt: storyData.data.story.publishedAt || storyData.data.story.createdAt
            });
            return;
          }
        } catch {
          // fallback to first item
        }
        setRecentStory(data.data.stories[0]);
      } else {
        setRecentStory(fallbackStory);
      }
    } catch {
      setRecentStory(fallbackStory);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return 'Recently';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-pink-50/60 to-purple-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center h-48">
            <LoadingSpinner size="default" />
          </div>
        </div>
      </section>
    );
  }

  const story = recentStory || fallbackStory;

  return (
    <section className="py-20 md:py-24 px-6 bg-gradient-to-br from-pink-50/70 via-purple-50/50 to-pink-50/70">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase block mb-3">
            Community voices
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Stories from Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Real experiences, shared courage, and the power of breaking silence together
          </p>
        </div>

        {/* Featured Story Card */}
        {story && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_18px_44px_-30px_rgba(147,51,234,0.45)] text-left max-w-4xl mx-auto border border-pink-100/60 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-block bg-pink-50 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
                {story.category || 'Personal Experience'}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                {formatDate(story.submittedAt || story.createdAt)}
              </span>
            </div>

            <h3 
              onClick={() => handleStoryClick(story)}
              className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 hover:text-pink-600 transition-colors cursor-pointer"
            >
              {story.title}
            </h3>

            <blockquote className="text-gray-700 text-base md:text-lg font-light leading-relaxed mb-6 italic">
              "{story.content}"
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {story.isAnonymous || !story.submitterName ? 'Anonymous' : story.submitterName}
                </span>
              </div>

              <button
                onClick={() => handleStoryClick(story)}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-pink-600 hover:text-purple-600 font-semibold text-sm sm:text-base transition-colors group"
              >
                Read Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* Buttons Row: Share Your Story + View All Stories */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/share-story"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Share Your Story
          </Link>
          <Link
            to="/our-story"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full font-semibold text-gray-800 bg-white border border-gray-200 hover:border-pink-500 hover:text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            View All Stories
          </Link>
        </div>

        {/* Modal */}
        <StoryDetailModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default StoriesSection;
