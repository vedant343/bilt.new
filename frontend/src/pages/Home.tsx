"use client";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <header className="pt-3 md:pt-5">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 text-purple-600 mr-2 animate-pulse" />
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                Bilt AI
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 max-w-lg mx-auto leading-tight">
              Create Your <span className="text-teal-600">Website Vision</span>{" "}
              in Minutes
            </h2>

            <div className="mt-4 mb-4 flex justify-center space-x-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                Fast
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                Intuitive
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-full">
                Professional
              </span>
            </div>
          </div>
        </header>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl"
        >
          <div className="p-6">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h2 className="font-medium text-slate-700">
                  Describe your vision
                </h2>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to build..."
                className="w-full h-40 p-4 bg-slate-50 text-slate-800 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none placeholder-slate-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span>Generate Website Plan</span>
            </button>
          </div>
          <div className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 p-4 text-center">
            <p className="text-sm text-slate-600">
              Powered by advanced AI to create beautiful, functional websites
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
