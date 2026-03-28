import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onVerify: (otp: string) => Promise<void>;
}

const OTPModal: React.FC<OTPModalProps> = ({ isOpen, onClose, email, onVerify }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setOtp('');
      setError('');
      setSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;

    setLoading(true);
    setError('');
    try {
      await onVerify(otp);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl border border-slate-700"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
              <CheckCircle className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Verify Your Email</h3>
            <p className="mt-2 text-slate-300">
              We've sent a 6-digit code to <br />
              <span className="font-medium text-blue-400">{email}</span>
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-400" />
              <p className="text-green-400 font-medium">Email verified successfully!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 6) setOtp(value);
                  }}
                  placeholder="000000"
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 py-4 text-center text-2xl font-bold text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  maxLength={6}
                />
              </div>

              {error && (
                <p className="text-center text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={otp.length !== 6 || loading}
                className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>

              <p className="text-center text-xs text-slate-400">
                Didn't receive the code? Check your spam folder or try again later.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OTPModal;