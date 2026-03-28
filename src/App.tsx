import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Courses from './pages/Courses';
import DevLab from './pages/DevLab';
import Pretest from './pages/Pretest';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import Themes from './pages/Themes';
import CourseDetail from './pages/CourseDetail';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/devlab" element={<DevLab />} />
              <Route path="/pretest" element={<Pretest />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/themes" element={<Themes />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
