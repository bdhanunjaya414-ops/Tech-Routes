import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const API = 'https://tech-routes.onrender.com';

const Login = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password: string) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[@$!%*?&]/.test(password)
    );
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!validatePassword(formData.password)) {
      setMessage('Password must be strong');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${API}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });

      setPendingEmail(formData.email);
      setShowOTP(true);
      setMessage(res.data.message);

      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }

    setLoading(false);
  };

  const handleVerifyOTP = async () => {
    setLoading(true);

    try {
      const res = await axios.post(`${API}/api/auth/verify`, {
        email: pendingEmail,
        otp: otp.trim()
      });

      setMessage(res.data.message);

      if (res.data.message === 'Verification successful') {
        localStorage.setItem('email', pendingEmail);
        window.location.href = '/dashboard';
      }

    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Invalid OTP');
    }

    setLoading(false);
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email: formData.email,
        password: formData.password
      });

      setMessage(res.data.message);

      if (res.data.message === 'Login successful') {
        localStorage.setItem('email', formData.email);
        window.location.href = '/dashboard';
      }

    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Login failed');
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl bg-slate-900 p-8 shadow-2xl border border-slate-700"
      >
        <div className="mb-6 flex rounded-xl bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('signup')}
            className={`flex-1 rounded-lg py-2 transition ${
              activeTab === 'signup' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('signin')}
            className={`flex-1 rounded-lg py-2 transition ${
              activeTab === 'signin' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            Sign In
          </button>
        </div>

        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
        </h2>

        {!showOTP ? (
          <form onSubmit={activeTab === 'signup' ? handleSignup : handleSignin} className="space-y-4">

            {activeTab === 'signup' && (
              <>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {activeTab === 'signup' && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white disabled:opacity-50"
            >
              {loading ? 'Please wait...' : activeTab === 'signup' ? 'Create Account' : 'Sign In'}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
            />

            <button
              type="button"
              disabled={loading}
              onClick={handleVerifyOTP}
              className="w-full rounded-xl bg-green-600 py-3 font-bold text-white disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        {message && (
          <p className="mt-4 text-center text-sm text-yellow-400">
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Login;