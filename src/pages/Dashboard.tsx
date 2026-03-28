import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import {
  BookOpen, CheckCircle2, Clock,
  TrendingUp, LogOut, Upload,
  Award, Bell, Home
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [user, setUser] = useState<any>({});
  const [performanceData, setPerformanceData] = useState<any>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [progress, setProgress] = useState(25);

  const API = 'http://localhost:5000';

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      window.location.href = "/login";
      return;
    }

    fetch(`${API}/api/user/dashboard?email=${email}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.user || {});
        setPerformanceData(data.performanceData || []);
      });

    const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");

    const userCourses = savedCourses.filter(
      (course: any) => course.userEmail === email
    );

    setEnrolledCourses(userCourses);

    const savedProgress = localStorage.getItem("courseProgress");

    if (savedProgress) {
      setProgress(Number(savedProgress));
    }

  }, []);

  const progressData = [
    { name: 'Completed', value: progress },
    { name: 'Remaining', value: 100 - progress },
  ];

  const COLORS = ['#2563eb', '#60a5fa'];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("email", localStorage.getItem("email") || "");

    await fetch(`${API}/api/user/upload-photo`, {
      method: "POST",
      body: formData,
    });

    window.location.reload();
  };

  const completeLesson = () => {
    const newProgress = Math.min(progress + 25, 100);

    setProgress(newProgress);

    localStorage.setItem("courseProgress", newProgress.toString());

    if (newProgress === 100) {
      localStorage.setItem("certificateUnlocked", "true");
      alert("🎉 Certificate Unlocked");
    }
  };

  const handleCertificate = () => {
    const unlocked = localStorage.getItem("certificateUnlocked");

    if (unlocked === "true") {
      window.location.href = "/certificate";
    } else {
      alert("Complete course to unlock certificate");
    }
  };

  const handleMenuClick = (label: string) => {
    if (label === "Dashboard") window.location.href = "/dashboard";
    if (label === "Courses") window.location.href = "/courses";
    if (label === "Certificates") handleCertificate();
    if (label === "Notifications") window.location.href = "/notifications";
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      <div className="w-72 bg-slate-900 p-6 hidden md:block">

        <h1 className="text-3xl font-bold text-cyan-400 mb-10">
          Tech Routes
        </h1>

        <nav className="space-y-4">

          {[
            { icon: Home, label: "Dashboard" },
            { icon: BookOpen, label: "Courses" },
            { icon: Award, label: "Certificates" },
            { icon: Bell, label: "Notifications" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              onClick={() => handleMenuClick(item.label)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800 cursor-pointer hover:bg-slate-700 transition"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </motion.div>
          ))}

          <div
            onClick={handleLogout}
            className="flex items-center gap-3 p-4 rounded-2xl text-red-400 cursor-pointer mt-10 hover:bg-red-900 transition"
          >
            <LogOut size={20} />
            Logout
          </div>

        </nav>
      </div>

      <div className="flex-1 p-8">

        <div className="bg-slate-900 rounded-3xl p-8 flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome back, {user?.name || "Student"} 👋
            </h1>

            <p className="text-slate-400 mt-2">
              Logged in as {user?.email || "No email"}
            </p>
          </div>

          <div className="flex items-center gap-4">

            {user?.photo ? (
              <img
                src={`${API}/uploads/${user.photo}`}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-slate-700"></div>
            )}

            <label className="cursor-pointer bg-cyan-600 p-3 rounded-xl hover:bg-cyan-500">
              <Upload size={18} />
              <input hidden type="file" onChange={handleUpload} />
            </label>

          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          {[
            { title: "Courses", value: enrolledCourses.length, icon: BookOpen },
            { title: "Topics", value: 48, icon: CheckCircle2 },
            { title: "Hours", value: 124, icon: Clock },
            { title: "Score", value: `${progress}%`, icon: TrendingUp },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 rounded-3xl p-6">
              <item.icon className="mb-4" size={28} />
              <div className="text-4xl font-bold">{item.value}</div>
              <div className="text-slate-400 mt-2">{item.title}</div>
            </div>
          ))}

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Completion</h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={progressData} dataKey="value" innerRadius={85} outerRadius={110}>
                  {progressData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <button
              onClick={completeLesson}
              className="mt-6 w-full bg-blue-600 py-3 rounded-xl font-bold"
            >
              Complete Lesson
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Weekly Performance</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;