import React from 'react';
import { Check } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const checks = [
    { label: 'At least 8 characters', regex: /.{8,}/ },
    { label: 'One uppercase letter', regex: /[A-Z]/ },
    { label: 'One lowercase letter', regex: /[a-z]/ },
    { label: 'One number', regex: /\d/ },
    { label: 'One special character', regex: /[@$!%*?&]/ },
  ];

  return (
    <div className="space-y-2">
      {checks.map((check, index) => {
        const isValid = check.regex.test(password);
        return (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${
              isValid ? 'border-green-500 bg-green-500' : 'border-slate-600'
            }`}>
              {isValid && <Check size={10} className="text-white" />}
            </div>
            <span className={isValid ? 'text-green-400' : 'text-slate-400'}>
              {check.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PasswordStrength;