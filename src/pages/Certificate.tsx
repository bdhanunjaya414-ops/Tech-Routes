import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Download, Share2, CheckCircle2, Calendar, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const Certificate = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('AI & Machine Learning');
  const [isGenerated, setIsGenerated] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setIsGenerated(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#60a5fa', '#ffffff']
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Claim Your Certification</h1>
        <p className="text-[var(--text-primary)]/60">Enter your details to generate your official Tech Routes certificate.</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-[var(--card-bg)] p-8 border border-[var(--border-color)] shadow-xl"
        >
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]/60">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[var(--border-color)] bg-transparent py-3 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]/60">Course Completed</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-xl border border-[var(--border-color)] bg-transparent py-3 px-4 outline-none focus:border-blue-500"
              >
                <option value="Python Full Stack">Python Full Stack</option>
                <option value="Java Full Stack">Java Full Stack</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="DevOps Engineering">DevOps Engineering</option>
                <option value="Quantum Computing">Quantum Computing</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="C Language Mastery">C Language Mastery</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]/60">Completion Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  required
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-xl border border-[var(--border-color)] bg-transparent py-3 pl-10 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
            >
              Generate Certificate
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-[var(--text-primary)]/70">
              <CheckCircle2 className="text-emerald-500" size={18} />
              <span>Verified by Tech Routes instructors</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--text-primary)]/70">
              <CheckCircle2 className="text-emerald-500" size={18} />
              <span>Industry-recognized certification</span>
            </div>
          </div>
        </motion.div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div 
            ref={certificateRef}
            className={`aspect-[1.414/1] w-full overflow-hidden rounded-xl border-8 border-blue-600 bg-white p-12 text-center text-gray-900 shadow-2xl transition-all ${!isGenerated ? 'blur-sm grayscale opacity-50' : ''}`}
          >
            <div className="absolute inset-0 border-[20px] border-double border-blue-100/50 m-4 pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="mb-4 flex justify-center">
                  <Award size={64} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-blue-900">Certificate of Completion</h2>
                <p className="mt-2 text-gray-500 italic">This is to certify that</p>
              </div>

              <div>
                <h3 className="text-4xl font-serif font-bold text-gray-900 border-b-2 border-gray-200 pb-2 inline-block px-8">
                  {name || "Your Name Here"}
                </h3>
                <p className="mt-4 text-gray-600">has successfully completed the professional course in</p>
                <h4 className="mt-2 text-2xl font-bold text-blue-700">{course}</h4>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-left">
                  <div className="h-px w-32 bg-gray-300 mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Date Issued</p>
                  <p className="text-sm font-bold">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-xl font-bold text-blue-600">Tech Routes</div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Learning Hub</p>
                </div>
                <div className="text-right">
                  <div className="h-px w-32 bg-gray-300 mb-2" />
                  <p className="text-xs font-bold uppercase text-gray-400">Authorized Signature</p>
                  <p className="text-sm font-serif italic">Tech Routes Team</p>
                </div>
              </div>
            </div>
          </div>

          {isGenerated && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-center gap-4"
            >
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-all hover:bg-blue-700">
                <Download size={20} /> Download PDF
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-[var(--border-color)] px-6 py-3 font-bold transition-all hover:bg-[var(--border-color)]">
                <Share2 size={20} /> Share
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;
