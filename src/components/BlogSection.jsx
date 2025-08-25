"use client";
import React, { useState } from "react";
import { ArrowRight, Calendar, User, Share2, Bookmark } from "lucide-react";

const BlogSection = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Countries for Student Visa Applications in 2024",
      company: "Visa Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "Aug 20, 2024",
      readTime: "5 min read",
      category: "Education",
      views: "2.4k",
      likes: 156,
      excerpt:
        "Discover the most popular destinations for international students and learn about their visa requirements...",
    },
    {
      id: 2,
      title: "Complete Guide to Start-up Visa Requirements",
      company: "Business Immigration Co.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "Aug 18, 2024",
      readTime: "7 min read",
      category: "Business",
      views: "3.1k",
      likes: 234,
      excerpt:
        "Everything you need to know about launching your startup abroad with the right visa documentation...",
    },
    {
      id: 3,
      title: "Success Stories: From Application to Approval",
      company: "Global Visa Services",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      author: "Emma Rodriguez",
      date: "Aug 15, 2024",
      readTime: "4 min read",
      category: "Success Stories",
      views: "1.8k",
      likes: 189,
      excerpt:
        "Real stories from clients who successfully navigated their visa journey with expert guidance...",
    },
    {
      id: 4,
      title: "Understanding Work Permit Processing Times",
      company: "Career Migration Ltd.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      author: "David Kumar",
      date: "Aug 12, 2024",
      readTime: "6 min read",
      category: "Work Permits",
      views: "2.9k",
      likes: 178,
      excerpt:
        "Get insights into current processing times and how to expedite your work permit application...",
    },
    {
      id: 5,
      title: "Family Reunification Visa: Step by Step Process",
      company: "Family First Immigration",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      author: "Lisa Thompson",
      date: "Aug 10, 2024",
      readTime: "8 min read",
      category: "Family",
      views: "2.2k",
      likes: 145,
      excerpt:
        "A comprehensive guide to bringing your loved ones closer through family reunification programs...",
    },
    {
      id: 6,
      title: "Digital Nomad Visas: The Future of Remote Work",
      company: "Remote Work Solutions",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop",
      author: "Alex Parker",
      date: "Aug 8, 2024",
      readTime: "5 min read",
      category: "Remote Work",
      views: "4.5k",
      likes: 312,
      excerpt:
        "Explore the growing trend of digital nomad visas and find the perfect destination for remote work...",
    },
  ];

  const categoryColors = {
    Education: "bg-gradient-to-r from-blue-500 to-cyan-500",
    Business: "bg-gradient-to-r from-emerald-500 to-green-500",
    "Success Stories": "bg-gradient-to-r from-purple-500 to-pink-500",
    "Work Permits": "bg-gradient-to-r from-orange-500 to-red-500",
    Family: "bg-gradient-to-r from-pink-500 to-rose-500",
    "Remote Work": "bg-gradient-to-r from-indigo-500 to-blue-500",
  };

  const toggleBookmark = (postId) => {
    const newBookmarkedPosts = new Set(bookmarkedPosts);
    if (newBookmarkedPosts.has(postId)) {
      newBookmarkedPosts.delete(postId);
    } else {
      newBookmarkedPosts.add(postId);
    }
    setBookmarkedPosts(newBookmarkedPosts);
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Main Blog Section */}
      <div className="md:col-span-9 bg-white rounded-2xl shadow p-6 w-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 relative overflow-hidden">
        <div className="mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-semibold">
                Latest Updates
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black  mb-4">
              Insights & Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay ahead with expert advice, inspiring success stories, and the
              latest immigration trends from industry professionals
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100 hover:border-red-200"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-[10px] font-bold shadow-lg backdrop-blur-sm ${
                        categoryColors[post.category] ||
                        "bg-gradient-to-r from-gray-500 to-gray-600"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={() => toggleBookmark(post.id)}
                      className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        bookmarkedPosts.has(post.id)
                          ? "bg-yellow-500 text-white"
                          : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-white"
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-full bg-white/90 text-gray-700 hover:bg-blue-500 hover:text-white backdrop-blur-sm transition-all duration-300">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Company Banner */}
                <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-4 py-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <p className="text-xs font-bold truncate">{post.company}</p>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  {/* Read More */}
                  <button className="inline-flex text-red-600 hover:text-black items-center px-3 py-2 text-xs rounded-full transition-all duration-300 transform hover:scale-105">
                    <span className="mr-1 font-medium">Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base font-semibold">
              <span className="mr-2">View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-gray-500 mt-3 text-sm">
              Join thousands of readers staying updated with immigration
              insights
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="md:col-span-3 bg-white rounded-2xl shadow p-5">
        <h3 className="text-lg font-semibold mb-3">Sidebar</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="hover:text-blue-600 cursor-pointer">📌 Link One</li>
          <li className="hover:text-blue-600 cursor-pointer">📌 Link Two</li>
          <li className="hover:text-blue-600 cursor-pointer">📌 Link Three</li>
          <li className="hover:text-blue-600 cursor-pointer">📌 Link Four</li>
        </ul>
      </aside>
    </div>
  );
};

export default BlogSection;
