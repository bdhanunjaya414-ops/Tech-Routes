import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, Cloud, Cpu, BarChart3, 
  Terminal, Layers, Atom, PieChart,
  CheckCircle2, Play, Zap, Layout, Server, Database,
  X, Check, Code
} from 'lucide-react';

const Courses = () => {
  const [enrolledCourse, setEnrolledCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: "python-fs",
      title: "Python Full Stack",
      description: "Complete web development path using Python and modern frontend tools.",
      icon: Terminal,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      domains: {
        frontend: ["HTML", "CSS", "JavaScript", "React JS"],
        backend: ["Python Basics", "Variables & Data Types", "OOPs Concepts", "File Handling", "Modules & Packages"],
        database: ["MySQL"]
      },
      technologies: ["Python", "React", "MySQL", "Tailwind"]
    },
    {
      id: "java-fs",
      title: "Java Full Stack",
      description: "Enterprise-level development with Java and modern frontend frameworks.",
      icon: Code,
      color: "text-red-500",
      bg: "bg-red-500/10",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      domains: {
        frontend: ["HTML", "CSS", "JavaScript", "React JS"],
        backend: ["Java Core", "OOPs Concepts", "Collections Framework", "Exception Handling", "JDBC"],
        database: ["MySQL"]
      },
      technologies: ["Java", "React", "MySQL", "Spring Boot"]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Dive into the world of artificial intelligence. Learn neural networks, deep learning, and predictive modeling.",
      icon: Brain,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Neural Networks", "Natural Language Processing", "Computer Vision"],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      id: "devops",
      title: "DevOps Engineering",
      description: "Master the bridge between development and operations. Automate workflows and manage infrastructure at scale.",
      icon: Layers,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["CI/CD Pipelines", "Containerization", "Infrastructure as Code"],
      technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      id: "quantum",
      title: "Quantum Computing",
      description: "Explore the next frontier of computation. Understand qubits, superposition, and quantum algorithms.",
      icon: Cpu,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Quantum Gates", "Shor's Algorithm", "Quantum Cryptography"],
      technologies: ["Qiskit", "Cirq", "Python", "Quantum Simulators"]
    },
    {
      id: "nanotech",
      title: "Nanotechnology",
      description: "Study matter at the atomic and molecular scale. Design innovative materials and microscopic systems.",
      icon: Atom,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      image: "https://images.unsplash.com/photo-1532187863486-abf9d39d99f5?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Nanomaterials", "Molecular Engineering", "Nano-electronics"],
      technologies: ["Scanning Electron Microscopy", "Molecular Modeling", "Nanofabrication"]
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      description: "Build and deploy scalable applications on the world's most powerful cloud platforms.",
      icon: Cloud,
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Serverless Architecture", "Cloud Security", "Multi-cloud Strategy"],
      technologies: ["AWS", "Azure", "Google Cloud", "Serverless"]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights. Master statistical analysis and data visualization.",
      icon: BarChart3,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Statistical Modeling", "Data Cleaning", "Business Intelligence"],
      technologies: ["SQL", "Python", "Tableau", "Excel"]
    },
    {
      id: "power-bi",
      title: "Power BI Mastery",
      description: "Become a data visualization expert. Create stunning dashboards and reports for business decision making.",
      icon: PieChart,
      color: "text-yellow-600",
      bg: "bg-yellow-500/10",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["DAX Formulas", "Data Modeling", "Interactive Dashboards"],
      technologies: ["Power BI Desktop", "Power Query", "DAX", "SQL"]
    },
    {
      id: "c-lang",
      title: "C Language Mastery",
      description: "Learn the foundation of modern programming. Master memory management and low-level system design.",
      icon: Terminal,
      color: "text-gray-500",
      bg: "bg-gray-500/10",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
      keyPoints: ["Pointers & Memory", "Data Structures", "System Programming"],
      technologies: ["GCC", "Makefiles", "GDB", "Standard Library"]
    }
  ];

 const handleEnroll = (course: any) => {
  const email = localStorage.getItem("email");

  if (!email) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");

  const alreadyEnrolled = enrolledCourses.find(
    (item: any) => item.userEmail === email && item.courseId === course.id
  );

  if (!alreadyEnrolled) {
    enrolledCourses.push({
      userEmail: email,
      courseId: course.id,
      courseTitle: course.title
    });

    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }

  setEnrolledCourse(course.title);

  setTimeout(() => {
    setEnrolledCourse(null);
    navigate(`/course/${course.id}`);
  }, 2000);
};
  

  

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      {/* Success Toast */}
      <AnimatePresence>
        {enrolledCourse && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-2xl bg-emerald-500 p-4 text-white shadow-2xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Check size={20} />
            </div>
            <div>
              <p className="font-bold">Enrollment Successful!</p>
              <p className="text-xs opacity-90">You are now enrolled in {enrolledCourse}</p>
            </div>
            <button onClick={() => setEnrolledCourse(null)} className="ml-4 opacity-50 hover:opacity-100">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-500 mb-6"
        >
          <Zap size={16} />
          <span>Future-Ready Curriculum</span>
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Our Expert Courses</h1>
        <p className="mx-auto max-w-2xl text-[var(--text-primary)]/60">
          We've updated our curriculum to focus on the most cutting-edge technologies. 
          Choose your path and start your journey today.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
          >
            {/* Course Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg`}>
                <course.icon size={24} />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <h2 className="mb-4 text-2xl font-bold">{course.title}</h2>
              <p className="mb-6 text-[var(--text-primary)]/70 leading-relaxed">
                {course.description}
              </p>

              {/* Domains (Frontend, Backend, Database) */}
              {course.domains ? (
                <div className="mb-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                      <Layout size={14} /> Frontend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.domains.frontend.map((item, idx) => (
                        <span key={idx} className="text-sm text-[var(--text-primary)]/60 flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-500" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-500">
                      <Server size={14} /> Backend
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.domains.backend.map((item, idx) => (
                        <span key={idx} className="text-sm text-[var(--text-primary)]/60 flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-500" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
                      <Database size={14} /> Database
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.domains.database.map((item, idx) => (
                        <span key={idx} className="text-sm text-[var(--text-primary)]/60 flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-500" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]/40">Key Points</h3>
                  <ul className="space-y-2">
                    {course.keyPoints?.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto">
                <div className="mb-8">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]/40">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="rounded-lg bg-[var(--border-color)]/30 px-3 py-1 text-xs font-bold text-[var(--text-primary)]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleEnroll(course)}
                    className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={() => navigate(`/course/${course.id}`)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] transition-all hover:bg-[var(--border-color)]"
                  >
                    <Play size={18} className="text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Courses
