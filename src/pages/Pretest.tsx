import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, Code, CheckCircle2, 
  HelpCircle, ArrowRight, Trophy, Timer 
} from 'lucide-react';

const Pretest = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'coding' | 'mcq' | 'fill'>('quiz');
  const [score, setScore] = useState(0);

  const tabs = [
    { id: 'quiz', name: 'General Quiz', icon: HelpCircle },
    { id: 'mcq', name: 'Multiple Choice', icon: ClipboardCheck },
    { id: 'fill', name: 'Fill in Blanks', icon: CheckCircle2 },
    { id: 'coding', name: 'Coding Challenge', icon: Code },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Skill Assessment</h1>
        <p className="text-[var(--text-primary)]/60">Test your knowledge before you start your journey.</p>
      </div>

      {/* Stats Bar */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 rounded-2xl bg-blue-500/10 px-6 py-3 text-blue-500">
          <Trophy size={20} />
          <span className="font-bold">Score: {score}/100</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-purple-500/10 px-6 py-3 text-purple-500">
          <Timer size={20} />
          <span className="font-bold">Time Left: 14:59</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-3xl bg-[var(--card-bg)] p-2 border border-[var(--border-color)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3 font-bold transition-all ${
              activeTab === tab.id 
                ? "bg-blue-600 text-white shadow-lg" 
                : "text-[var(--text-primary)]/60 hover:bg-blue-500/10 hover:text-blue-500"
            }`}
          >
            <tab.icon size={18} />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div
        layout
        className="min-h-[400px] rounded-3xl bg-[var(--card-bg)] p-10 border border-[var(--border-color)] shadow-xl"
      >
        <AnimatePresence mode="wait">
          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">Question 1 of 10</span>
                <h2 className="text-2xl font-bold">What is the primary purpose of React's virtual DOM?</h2>
              </div>
              <div className="grid gap-4">
                {[
                  "To directly manipulate the browser's DOM for better performance",
                  "To create a lightweight copy of the real DOM for efficient updates",
                  "To provide a way to write HTML in JavaScript",
                  "To handle server-side rendering exclusively"
                ].map((option, i) => (
                  <button 
                    key={i}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border-color)] p-5 text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
                  >
                    <span className="font-medium">{option}</span>
                    <div className="h-6 w-6 rounded-full border-2 border-[var(--border-color)] group-hover:border-blue-500" />
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition-all hover:bg-blue-700">
                  Next Question <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'coding' && (
            <motion.div
              key="coding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Challenge: Reverse a String</h2>
              <p className="text-[var(--text-primary)]/70">Write a function that takes a string and returns it reversed.</p>
              <div className="rounded-2xl bg-black/10 p-6 font-mono">
                <textarea 
                  className="w-full bg-transparent outline-none"
                  rows={8}
                  defaultValue={`function reverseString(str) {\n  // Your code here\n}`}
                />
              </div>
              <button className="rounded-xl bg-emerald-600 px-8 py-3 font-bold text-white transition-all hover:bg-emerald-700">
                Submit Solution
              </button>
            </motion.div>
          )}

          {/* Add more tab contents as needed */}
          {(activeTab === 'mcq' || activeTab === 'fill') && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-full items-center justify-center text-[var(--text-primary)]/40 italic"
            >
              Assessment content for {activeTab} is loading...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Pretest;
