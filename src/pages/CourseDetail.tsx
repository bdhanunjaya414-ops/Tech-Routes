import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, BookOpen, CheckCircle2, ChevronDown, 
  ChevronUp, Play, Clock, Users, Star,
  Layout, Server, Database, Terminal, Code,
  Info, ListChecks, FileCode
} from 'lucide-react';
import { courseContentData, Topic } from '../data/courseContent';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const course = id ? courseContentData[id] : null;

  useEffect(() => {
    if (course && course.modules.length > 0 && course.modules[0].topics.length > 0) {
      setExpandedModule(course.modules[0].id);
      setSelectedTopic(course.modules[0].topics[0]);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Course Not Found</h2>
        <p className="mb-8 text-[var(--text-primary)]/60">The course you are looking for does not exist or has been moved.</p>
        <button 
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-all hover:bg-blue-700"
        >
          <ArrowLeft size={20} /> Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <button 
          onClick={() => navigate('/courses')}
          className="mb-8 flex items-center gap-2 text-sm font-bold text-blue-500 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Courses
        </button>
        
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{course.title}</h1>
            <p className="mb-8 text-lg text-[var(--text-primary)]/70 leading-relaxed max-w-3xl">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[var(--text-primary)]/60">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-500" />
                <span>40+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-purple-500" />
                <span>1,200+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-500 fill-yellow-500" />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-bold">Course Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-primary)]/60">Modules</span>
                <span className="font-bold">{course.modules.length}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-primary)]/60">Language</span>
                <span className="font-bold">English</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-primary)]/60">Access</span>
                <span className="font-bold">Lifetime</span>
              </div>
            </div>
            <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - W3Schools Style */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Left Sidebar - Modules */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
            <BookOpen size={20} className="text-blue-500" /> Curriculum
          </h2>
          <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {course.modules.map((module) => (
              <div key={module.id} className="rounded-xl border border-[var(--border-color)] overflow-hidden">
                <button 
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className={`flex w-full items-center justify-between p-4 text-left transition-colors ${expandedModule === module.id ? 'bg-blue-500/10 text-blue-500' : 'hover:bg-[var(--border-color)]/20'}`}
                >
                  <span className="font-bold text-sm">{module.title}</span>
                  {expandedModule === module.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                <AnimatePresence>
                  {expandedModule === module.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="bg-[var(--bg-primary)]/30 p-2 space-y-1">
                        {module.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic)}
                            className={`flex w-full items-center gap-3 p-3 text-left text-xs rounded-lg transition-all ${selectedTopic?.id === topic.id ? 'bg-blue-600 text-white shadow-md' : 'text-[var(--text-primary)]/70 hover:bg-[var(--border-color)]/30'}`}
                          >
                            <Play size={12} fill={selectedTopic?.id === topic.id ? "white" : "currentColor"} />
                            {topic.title}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Topic Details */}
        <div className="lg:col-span-3">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-sm"
            >
              <div className="mb-8">
                <div className="mb-2 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-xs font-bold text-blue-500">
                  Topic Details
                </div>
                <h2 className="text-3xl font-bold">{selectedTopic.title}</h2>
              </div>

              <div className="space-y-8">
                {/* Definition */}
                  {/* Definition */}
                  <section>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-500">
                  <Info size={20} /> Definition
                  </h3>

                 <div className="space-y-3 text-[var(--text-primary)]/80 leading-8">
                 {selectedTopic.definition.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                  ))}
                  </div>
                  </section>
               

                {/* Key Points */}
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-purple-500">
                    <ListChecks size={20} /> Key Points
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {selectedTopic.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-xl bg-[var(--bg-primary)]/50 p-4 border border-[var(--border-color)]">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Example */}
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-orange-500">
                    <FileCode size={20} /> Example
                  </h3>
                  <div className="relative overflow-hidden rounded-2xl bg-[#1e1e1e] p-6 font-mono text-sm text-gray-300">
                    <div className="absolute right-4 top-4 text-xs text-gray-500">Code Snippet</div>
                    <pre className="whitespace-pre-wrap">{selectedTopic.example}</pre>
                  </div>
                </section>

                {/* Real-time Example */}
                {selectedTopic.realTimeExample && (
                  <section>
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-emerald-500">
                      <Terminal size={20} /> Real-time Application
                    </h3>
                    <div className="rounded-2xl bg-emerald-500/5 p-6 border border-emerald-500/20">
                      <p className="text-sm text-[var(--text-primary)]/80 italic">
                        "{selectedTopic.realTimeExample}"
                      </p>
                    </div>
                  </section>
                )}
              </div>

              {/* Navigation Buttons */}
              {/* Navigation Buttons */}
<div className="mt-12 flex justify-between pt-8 border-t border-[var(--border-color)]">
  <button
    onClick={() => {
      const currentModuleIndex = course.modules.findIndex((m) =>
        m.topics.some((t) => t.id === selectedTopic.id)
      );

      const currentTopicIndex =
        course.modules[currentModuleIndex].topics.findIndex(
          (t) => t.id === selectedTopic.id
        );

      if (currentTopicIndex > 0) {
        setSelectedTopic(
          course.modules[currentModuleIndex].topics[currentTopicIndex - 1]
        );
      } else if (currentModuleIndex > 0) {
        const prevModule = course.modules[currentModuleIndex - 1];
        setExpandedModule(prevModule.id);
        setSelectedTopic(
          prevModule.topics[prevModule.topics.length - 1]
        );
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }}
    disabled={course.modules[0].topics[0].id === selectedTopic.id}
    className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]/40 hover:text-blue-500 transition-colors disabled:opacity-30"
  >
    <ArrowLeft size={16} /> Previous Topic
  </button>

  <button
    onClick={() => {
      const currentModuleIndex = course.modules.findIndex((m) =>
        m.topics.some((t) => t.id === selectedTopic.id)
      );

      const currentTopicIndex =
        course.modules[currentModuleIndex].topics.findIndex(
          (t) => t.id === selectedTopic.id
        );

      if (
        currentTopicIndex <
        course.modules[currentModuleIndex].topics.length - 1
      ) {
        setSelectedTopic(
          course.modules[currentModuleIndex].topics[currentTopicIndex + 1]
        );
      } else if (currentModuleIndex < course.modules.length - 1) {
        const nextModule = course.modules[currentModuleIndex + 1];
        setExpandedModule(nextModule.id);
        setSelectedTopic(nextModule.topics[0]);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }}
    disabled={
      course.modules[course.modules.length - 1].topics[
        course.modules[course.modules.length - 1].topics.length - 1
      ].id === selectedTopic.id
    }
    className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:underline disabled:opacity-30"
  >
    Next Topic <Play size={16} fill="currentColor" />
  </button>
</div>

</motion.div>
) : (
  <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[var(--border-color)] p-12 text-center">
    <BookOpen size={48} className="mb-4 text-[var(--text-primary)]/20" />

    <h3 className="text-xl font-bold">
      Select a topic to start learning
    </h3>

    <p className="text-[var(--text-primary)]/60">
      Choose a module and topic from the sidebar to view the content.
    </p>
  </div>
)}
</div>
</div>
</div>
);
};

export default CourseDetail;
