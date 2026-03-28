import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

import member1 from "../assets/team/member1.jpg";
import member2 from "../assets/team/member2.jpg";
import member3 from "../assets/team/member3.jpg";
import member4 from "../assets/team/member4.jpg";
import member5 from "../assets/team/member5.jpg";
import member6 from "../assets/team/member6.jpg";
import member7 from "../assets/team/member7.jpg";
import member8 from "../assets/team/member8.jpg";



const About = () => {
  const team = [
    { name: "M Ashok Reddy", role: "Founder & Lead Developer", image: member1 },
    { name: "B Dhanunjaya", role: "Senior Developer", image: member2 },
    { name: "B Rajesh", role: "Technical Mentor", image: member3 },
    { name: "Lakshmi kanth", role: "Frontend Developer", image: member4 },
    { name: "B Nagamani", role: "Backend Developer", image: member5 },
    { name: "vasudha", role: "UI Designer", image: member6 },
    { name: "yashu", role: "Content Creator", image: member7 },
    { name: "Roopa", role: "Support Specialist", image: member8 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-20">

      {/* Vision & Mission */}
      <div className="mb-20 grid gap-12 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-blue-600 p-10 text-white shadow-2xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Eye size={32} />
          </div>

          <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>

          <p className="text-lg leading-relaxed text-blue-50">
            To empower students through practical learning and transform beginners into confident developers ready for real-world challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[var(--card-bg)] p-10 border border-[var(--border-color)] shadow-xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white">
            <Target size={32} />
          </div>

          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>

          <p className="text-lg leading-relaxed text-[var(--text-primary)]/70">
            Tech Roots aims to create future-ready developers with practical knowledge, coding confidence, and strong industry skills.
          </p>
        </motion.div>

      </div>

      {/* Team Section */}
      <div className="mb-20">

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Meet Our Dedicated Team</h2>
          <p className="text-[var(--text-primary)]/60">
            Passionate professionals behind Tech Roots innovation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:scale-105 transition-all duration-300 p-6 text-center"
            >
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-40 w-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Values Section */}
      <div className="rounded-3xl bg-[var(--card-bg)] p-12 border border-[var(--border-color)]">

        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Practical First Approach",
            "Advanced Curriculum",
            "Continuous Support",
            "Industry Recognition",
            "Student-Centric Learning",
            "Future-Ready Skills"
          ].map((value, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" />
              <span className="text-lg font-medium">{value}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default About;