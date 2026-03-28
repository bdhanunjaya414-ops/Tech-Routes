import React from 'react';
import { motion } from 'motion/react';
import { Palette, Check, Sun, Moon, Waves, TreePine, Sunset } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Themes = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', name: 'Light Mode', icon: Sun, color: 'bg-white', text: 'text-gray-900', border: 'border-gray-200' },
    { id: 'dark', name: 'Dark Mode', icon: Moon, color: 'bg-[#0f172a]', text: 'text-white', border: 'border-slate-700' },
    { id: 'ocean', name: 'Ocean Breeze', icon: Waves, color: 'bg-[#0c4a6e]', text: 'text-sky-50', border: 'border-sky-800' },
    { id: 'forest', name: 'Deep Forest', icon: TreePine, color: 'bg-[#064e3b]', text: 'text-emerald-50', border: 'border-emerald-800' },
    { id: 'sunset', name: 'Sunset Glow', icon: Sunset, color: 'bg-[#450a0a]', text: 'text-red-50', border: 'border-red-900' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl">
          <Palette size={32} />
        </div>
        <h1 className="mb-4 text-4xl font-bold">Personalize Your Experience</h1>
        <p className="text-[var(--text-primary)]/60">Choose a theme that matches your style and makes learning comfortable.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {themes.map((t) => (
          <motion.button
            key={t.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setTheme(t.id as any)}
            className={`relative flex items-center gap-6 rounded-3xl border-2 p-6 transition-all ${
              theme === t.id ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-[var(--border-color)] bg-[var(--card-bg)]'
            }`}
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${t.color} ${t.text} border ${t.border} shadow-lg`}>
              <t.icon size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-[var(--text-primary)]/60">Switch to {t.name} interface</p>
            </div>
            {theme === t.id && (
              <div className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-blue-500 p-1 text-white">
                <Check size={16} />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-[var(--card-bg)] p-10 border border-[var(--border-color)] text-center">
        <h3 className="mb-4 text-2xl font-bold">Preview Mode</h3>
        <p className="mb-8 text-[var(--text-primary)]/70">The selected theme will be applied across all pages of the Tech Routes platform instantly.</p>
        <div className="flex justify-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-500 animate-bounce" />
          <div className="h-12 w-12 rounded-full bg-purple-500 animate-bounce delay-100" />
          <div className="h-12 w-12 rounded-full bg-emerald-500 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
