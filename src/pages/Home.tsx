import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  Code,
  Users,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-24 flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b]" />

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-700" />
        </div>

        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 mb-6">
              Empowering Future Developers
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
              Build Your Future with <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Tech Routes
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
              A modern learning platform designed to take students from beginner level
              to advanced full-stack development through real projects, mentorship,
              and career-focused training.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/courses"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
              >
                Explore Courses <ArrowRight size={20} />
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/5 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl">
              {["50+ Courses", "10K+ Students", "95% Success"].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg py-4 text-center text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              alt="coding"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Why Choose Tech Routes?</h2>
          <p className="text-gray-400 mt-4">
            Learn with practical exposure and career-oriented guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Practical Exposure",
              desc: "Hands-on projects and live coding experience.",
              icon: Code,
              color: "bg-blue-500"
            },
            {
              title: "Expert Mentorship",
              desc: "Learn under experienced mentors.",
              icon: Users,
              color: "bg-purple-500"
            },
            {
              title: "Career Ready",
              desc: "Build strong professional skills.",
              icon: Rocket,
              color: "bg-emerald-500"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${feature.color}`}>
                <feature.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold mt-6">{feature.title}</h3>
              <p className="text-gray-400 mt-4">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-14 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>

          <p className="mt-4 text-lg text-blue-100">
            Join Tech Routes and become industry ready.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link
              to="/login"
              className="rounded-xl bg-white text-blue-600 px-8 py-4 font-bold hover:scale-105 transition-all"
            >
              Get Started
            </Link>

            <Link
              to="/courses"
              className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white/10 transition-all"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;