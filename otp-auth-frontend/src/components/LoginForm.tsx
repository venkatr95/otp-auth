import React, { useState } from "react";
import { requestOtp } from "../services/authService";
import { toast } from "react-toastify";
import "./LoginForm.module.css";

interface Props {
  setEmail: (email: string) => void;
  setStep: (step: number) => void;
}

const LoginForm: React.FC<Props> = ({ setEmail, setStep }) => {
  const [emailInput, setEmailInput] = useState("");

  const handleRequestOtp = async () => {
    try {
      await requestOtp(emailInput);
      toast.success("OTP sent to your email");
      setEmail(emailInput);
      setStep(2); // Move to OTP form step
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  return (
    <div className="login-form">
      <h2>Login with OTP</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
      />
      <button onClick={handleRequestOtp}>Request OTP</button>
    </div>
  );
};

export default LoginForm;
