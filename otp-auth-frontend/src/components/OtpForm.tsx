import React, { useState } from 'react';
import { verifyOtp } from '../services/authService';
import { toast } from 'react-toastify';
import './OtpForm.module.css';

interface Props {
  email: string;
}

const OtpForm: React.FC<Props> = ({ email }) => {
  const [otpInput, setOtpInput] = useState('');

  const handleVerifyOtp = async () => {
    try {
      const { token } = await verifyOtp(email, otpInput);
      localStorage.setItem('token', token); // Store JWT token
      toast.success('OTP verified, logged in successfully!');
    } catch (error) {
      toast.error('Invalid OTP');
    }
  };

  return (
    <div className="otp-form">
      <h2>Enter OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otpInput}
        onChange={(e) => setOtpInput(e.target.value)}
        required
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OtpForm;
