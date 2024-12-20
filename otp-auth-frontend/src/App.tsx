import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import OtpForm from './components/OtpForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="app">
      {step === 1 && <LoginForm setEmail={setEmail} setStep={setStep} />}
      {step === 2 && <OtpForm email={email} />}
      <ToastContainer />
    </div>
  );
};

export default App;
