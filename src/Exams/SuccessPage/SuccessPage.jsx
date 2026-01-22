import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  // Optional: auto redirect after 10 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/"); // uncomment if needed
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-wrapper">
      {/* Confetti */}
      <div className="confetti"></div>

      {/* Card */}
      <div className="success-card">
        <div className="checkmark">
          ✓
        </div>

        <h1>Exam Submitted Successfully</h1>

        <p className="subtitle">
          🎉 Congratulations! Your examination has been completed.
        </p>

        <div className="message-box">
          <p>
            Your responses have been securely recorded and submitted.
          </p>
          <p>
            📩 The results will be shared with your organization and sent to
            your registered email address once evaluation is completed.
          </p>
          <p className="thankyou">
            Thank you for connecting with  
            <strong> Talent & Skill Assessment Team</strong>.
          </p>
        </div>

        <p className="close-text">
          You may safely close this window now.
        </p>
      </div>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .success-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981, #059669);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Confetti */
        .confetti::before,
        .confetti::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(circle, #fff 2px, transparent 2px),
            radial-gradient(circle, #fde68a 2px, transparent 2px),
            radial-gradient(circle, #fca5a5 2px, transparent 2px);
          background-size: 20px 20px;
          animation: confetti 6s linear infinite;
          opacity: 0.5;
        }

        @keyframes confetti {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }

        .success-card {
          background: white;
          padding: 50px 40px;
          border-radius: 22px;
          text-align: center;
          max-width: 520px;
          width: 100%;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          animation: scaleIn 0.6s ease;
          z-index: 1;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .checkmark {
          width: 90px;
          height: 90px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #10b981;
          color: white;
          font-size: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pop 0.5s ease-out;
        }

        @keyframes pop {
          0% { transform: scale(0); }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        h1 {
          font-size: 28px;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 16px;
          color: #065f46;
          margin-bottom: 24px;
        }

        .message-box {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 14px;
          font-size: 14px;
          color: #065f46;
          line-height: 1.7;
        }

        .message-box p {
          margin-bottom: 10px;
        }

        .thankyou {
          margin-top: 12px;
          font-weight: 600;
        }

        .close-text {
          margin-top: 25px;
          font-size: 13px;
          color: #475569;
          font-style: italic;
        }

        @media (max-width: 480px) {
          .success-card {
            padding: 35px 25px;
          }

          h1 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;
