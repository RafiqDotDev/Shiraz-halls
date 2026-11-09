import React, { useState } from "react";
import { INITIAL_DISCUSSIONS } from "../data/shirazData";
import type { DiscussionPost, DiscussionReply } from "../types";
import {
  MessageSquareIcon,
  ThumbsUpIcon,
  SparklesIcon,
  SearchIcon,
  FilterIcon,
  PlusIcon,
  XIcon,
  CheckCircleIcon,
  CrownIcon,
  SendIcon,
} from "./icons/Icons";

export const EventDiscussions: React.FC = () => {
  const [discussions, setDiscussions] = useState<DiscussionPost[]>(INITIAL_DISCUSSIONS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeReplyPostId, setActiveReplyPostId] = useState<string | null>(null);
  const [replyInput, setReplyInput] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");

  // New Discussion Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newRole, setNewRole] = useState<"Bride" | "Groom" | "Event Planner" | "Guest">("Bride");
  const [newCategory, setNewCategory] = useState<DiscussionPost["category"]>("Barat & Stage Decor");
  const [newTags, setNewTags] = useState("");

  const categories = [
    "All",
    "Barat & Stage Decor",
    "Walima & Catering",
    "Mehndi & Sangeet",
    "Hall Booking Q&A",
    "Vendor Reviews",
  ];

  const filteredDiscussions = discussions.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleToggleLike = (postId: string) => {
    setDiscussions((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const newLiked = !p.userLiked;
          return {
            ...p,
            userLiked: newLiked,
            likes: newLiked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );
  };

  const handleAddReply = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim() || !replyAuthor.trim()) return;

    const newReplyObj: DiscussionReply = {
      id: `rep-${Date.now()}`,
      author: replyAuthor,
      authorRole: "Bride",
      content: replyInput,
      createdAt: "Just now",
      likes: 0,
    };

    setDiscussions((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            replies: [...p.replies, newReplyObj],
          };
        }
        return p;
      })
    );

    setReplyInput("");
    setReplyAuthor("");
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !newAuthor.trim()) return;

    const postObj: DiscussionPost = {
      id: `disc-${Date.now()}`,
      author: newAuthor,
      authorRole: newRole,
      title: newTitle,
      content: newContent,
      category: newCategory,
      tags: newTags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      likes: 1,
      userLiked: true,
      createdAt: "Just now",
      replies: [
        {
          id: `rep-auto-${Date.now()}`,
          author: "Shiraz Concierge Desk",
          authorRole: "Shiraz Concierge",
          isOfficialPlanner: true,
          content:
            "Thank you for sharing your inquiry with our community! A Senior Shiraz Wedding Consultant has logged this note and our banquet desk can assist directly at +92 91 570 1234.",
          createdAt: "Just now",
          likes: 2,
        },
      ],
    };

    setDiscussions([postObj, ...discussions]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewContent("");
    setNewAuthor("");
    setNewTags("");
  };

  return (
    <section id="discussions" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <MessageSquareIcon className="w-3.5 h-3.5 text-amber-700" />
              <span>Community & Expert Q&A</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              Shiraz Wedding Majlis &{" "}
              <span className="gold-text-gradient">Event Discussions</span>
            </h2>
            <p className="font-serif text-lg text-zinc-700 font-light leading-relaxed">
              Join conversations with real brides, grooms, and Shiraz certified event planners. Discuss menu tastings, stage aesthetics, acoustic setups, and timeline tips.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all flex items-center justify-center gap-2 shrink-0 self-start md:self-auto"
          >
            <PlusIcon className="w-4 h-4 text-amber-950" />
            <span>Start New Discussion</span>
          </button>
        </div>

        {/* Filter Bar & Search (Light Theme) */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-amber-950 shadow-sm"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:bg-amber-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              placeholder="Search discussions, food, decor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-300 rounded-xl pl-9 pr-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 shadow-xs"
            />
            <SearchIcon className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Discussions List (Light Theme) */}
        <div className="space-y-4">
          {filteredDiscussions.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-zinc-200 hover:border-amber-400/80 transition-all shadow-md shadow-amber-900/5"
            >
              {/* Post Author Info & Badges */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shrink-0">
                    {post.authorAvatar ? (
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center font-bold text-xs text-amber-900">
                        {post.author[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-zinc-900">{post.author}</span>
                      <span className="text-[10px] font-mono uppercase bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded border border-zinc-200 font-semibold">
                        {post.authorRole}
                      </span>
                      {post.isPinned && (
                        <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                          📌 Pinned Review
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-zinc-400">{post.createdAt}</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-bold">
                  {post.category}
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="font-display text-base sm:text-lg font-bold text-zinc-900 mb-2">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mb-4">
                {post.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-zinc-100 text-zinc-600 px-2.5 py-0.5 rounded-full border border-zinc-200 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100 text-xs">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggleLike(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      post.userLiked ? "text-amber-800 font-bold" : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <ThumbsUpIcon className="w-4 h-4" />
                    <span>{post.likes} Helpful</span>
                  </button>

                  <button
                    onClick={() =>
                      setActiveReplyPostId(activeReplyPostId === post.id ? null : post.id)
                    }
                    className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <MessageSquareIcon className="w-4 h-4" />
                    <span>{post.replies.length} Responses</span>
                  </button>
                </div>

                <button
                  onClick={() =>
                    setActiveReplyPostId(activeReplyPostId === post.id ? null : post.id)
                  }
                  className="text-amber-800 hover:text-amber-900 font-bold text-xs"
                >
                  {activeReplyPostId === post.id ? "Hide Discussion" : "Join Discussion"}
                </button>
              </div>

              {/* Expanded Replies Section */}
              {activeReplyPostId === post.id && (
                <div className="mt-4 pt-4 border-t border-zinc-100 space-y-3">
                  <div className="space-y-2.5 pl-2 sm:pl-6 border-l-2 border-amber-300">
                    {post.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className={`p-3.5 rounded-2xl text-xs space-y-1.5 ${
                          reply.isOfficialPlanner
                            ? "bg-emerald-50 border border-emerald-300 text-emerald-950"
                            : "bg-zinc-50 border border-zinc-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-zinc-900">{reply.author}</span>
                            {reply.isOfficialPlanner && (
                              <span className="text-[9px] font-mono uppercase bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <CrownIcon className="w-2.5 h-2.5" />
                                <span>Official Shiraz Verified</span>
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-zinc-400">{reply.createdAt}</span>
                        </div>
                        <p className="text-zinc-700 leading-relaxed font-light">{reply.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Reply Input Form */}
                  <form
                    onSubmit={(e) => handleAddReply(post.id, e)}
                    className="pt-2 pl-2 sm:pl-6 space-y-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Asad)"
                        required
                        value={replyAuthor}
                        onChange={(e) => setReplyAuthor(e.target.value)}
                        className="bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 shadow-xs"
                      />
                      <input
                        type="text"
                        placeholder="Share your wedding advice, question or feedback..."
                        required
                        value={replyInput}
                        onChange={(e) => setReplyInput(e.target.value)}
                        className="sm:col-span-3 bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 shadow-xs"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <SendIcon className="w-3.5 h-3.5 text-amber-950" />
                        <span>Post Response</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Start New Discussion Modal (Light Theme) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-white border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                Shiraz Majlis Forum
              </span>
              <h3 className="font-display text-2xl font-bold text-zinc-900 mt-1">
                Start a New Wedding Topic
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Ask other couples or request tips from Shiraz senior banquet consultants.
              </p>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima & Bilal"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                    Your Role
                  </label>
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value as any)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option value="Bride">Bride</option>
                    <option value="Groom">Groom</option>
                    <option value="Event Planner">Event Planner</option>
                    <option value="Guest">Guest</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                >
                  <option value="Barat & Stage Decor">Barat & Stage Decor</option>
                  <option value="Walima & Catering">Walima & Catering</option>
                  <option value="Mehndi & Sangeet">Mehndi & Sangeet</option>
                  <option value="Hall Booking Q&A">Hall Booking Q&A</option>
                  <option value="Vendor Reviews">Vendor Reviews</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                  Discussion Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Best stage lighting colors for red Barat bridal dress?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                  Your Experience or Question *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details, dates, hall preferences or taste test questions..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-bold mb-1">
                  Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lighting, Barat, Stage, Winter2026"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md"
                >
                  Publish Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
