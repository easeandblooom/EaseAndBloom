import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlogDetailModal from './BlogDetailModal';
import LoadingSpinner from './LoadingSpinner';
import { blogsAPI } from '../services/api';

const BlogsSection = () => {
  const [recentBlog, setRecentBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback blog data matching the updated preview
  const fallbackBlog = {
    _id: "preview-1",
    title: "The Letters We Wish Our Mothers Wrote Us About Periods",
    excerpt: "Dear Bloomers, if no one told you this before, your period is not something to hide. It's not dirty. It's not shameful. It's your body's way of...",
    author: "Ndidi",
    publishedAt: "2025-11-04",
    categories: ["Wellness"],
    content: "Dear Bloomers, if no one told you this before, your period is not something to hide. It's not dirty. It's not shameful. It's your body's way of communicating with you, reminding you of your strength, and honoring your health."
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetch once on mount
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await blogsAPI.getAll({
        limit: 6,
        status: 'published',
        sort: 'newest',
        includeContent: 'true'
      });

      if (data?.success && data.data.blogs.length > 0) {
        const transformedBlogs = data.data.blogs.map(blog => ({
          ...blog,
          excerpt: blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...' : 'No excerpt available',
          publishedAt: blog.publishDate || blog.publishedAt || blog.createdAt,
          views: blog.views || 0
        }));
        
        setRecentBlog(transformedBlogs[0]);
      } else {
        setRecentBlog(fallbackBlog);
      }
    } catch {
      setRecentBlog(fallbackBlog);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return 'Recent';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center h-48">
            <LoadingSpinner size="default" />
          </div>
        </div>
      </section>
    );
  }

  const blog = recentBlog || fallbackBlog;

  return (
    <section className="py-20 md:py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-pink-500 tracking-[0.16em] uppercase block mb-3">
            From the blog
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Insights, tips, and stories to support your mental wellness journey
          </p>
        </div>

        {/* Featured Post Card (Text-first, no thumbnail to honor 2-photo rule) */}
        {blog && (
          <article className="relative bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.4)] text-left max-w-4xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
            {/* Left Accent Gradient Strip */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-pink-500 to-purple-600" />

            <div className="pl-3 sm:pl-4">
              <span className="inline-block bg-pink-50 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {blog.categories?.[0] || 'Wellness'}
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 hover:text-pink-600 transition-colors cursor-pointer" onClick={() => handleBlogClick(blog)}>
                {blog.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-4">
                {blog.excerpt}
              </p>

              <div className="text-xs sm:text-sm text-gray-500 mb-4">
                By {blog.author || 'Ndidi'} · {formatDate(blog.publishedAt)}
              </div>

              <div>
                <button
                  onClick={() => handleBlogClick(blog)}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-pink-600 hover:text-purple-600 font-semibold text-base transition-colors group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* View All Blogs Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full font-semibold text-gray-800 bg-white border border-gray-200 hover:border-pink-500 hover:text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            View All Blogs
          </Link>
        </div>

        {/* Modal */}
        <BlogDetailModal
          blog={selectedBlog}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default BlogsSection;
