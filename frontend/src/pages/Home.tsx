"use client";

import type React from "react";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate("/builder", { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-xl w-full z-10">
        <header className="pt-6 md:pt-8 text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent inline-block">
            Bilt AI
          </h1>

          <div className="mt-5 flex justify-center space-x-3">
            <span className="px-4 py-1.5 bg-slate-800/80 text-purple-300 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm">
              Easy
            </span>
            <span className="px-4 py-1.5 bg-slate-800/80 text-teal-300 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm">
              Efficient
            </span>
            <span className="px-4 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm">
              Professional
            </span>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-xl"
        >
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h2 className="font-medium text-slate-200 text-lg">
                  Describe your vision
                </h2>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to build..."
                className="w-full h-40 p-4 bg-slate-900/70 text-slate-200 border border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none placeholder-slate-500 transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span>Generate Website Plan</span>
            </button>
          </div>
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-4 text-center">
            <p className="text-sm text-slate-400">
              Powered by advanced AI to create beautiful, functional websites
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
