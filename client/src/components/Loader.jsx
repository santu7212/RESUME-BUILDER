 import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <HeroLoader>
      {/* Clouds */}
      <span className="cloud cloud-1" />
      <span className="cloud cloud-2" />
      <span className="cloud cloud-3" />

      <div className="content">
        {/* Parachute */}
        <div className="parachute">
          <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="40" x2="45" y2="80" stroke="#6366f1" strokeWidth="2" />
            <line x1="90" y1="40" x2="55" y2="80" stroke="#6366f1" strokeWidth="2" />
            <line x1="50" y1="35" x2="50" y2="80" stroke="#6366f1" strokeWidth="2" />

            <path d="M10 40 Q50 -10 90 40 Z" fill="#6366f1" />
            <path d="M30 28 Q50 0 70 28 L50 35 Z" fill="#ffffff" opacity="0.3" />

            <circle cx="50" cy="85" r="8" fill="#111827" />
            <rect x="42" y="93" width="16" height="20" rx="5" fill="#3b82f6" />

            <path d="M42 95 L30 85" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <path d="M58 95 L70 85" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <path d="M45 113 L40 120" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 113 L60 120" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text */}
        <h2>
          Preparing your <span>AI Resume</span>
        </h2>
        <p>This will only take a moment</p>
      </div>
    </HeroLoader>
  );
};

const HeroLoader = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle at top, #eef2ff, #ffffff 65%);

  /* Clouds */
  .cloud {
    position: absolute;
    bottom: -140px;
    background: #d1d5db; /* gray-300 */
    border-radius: 50%;
    opacity: 0.85;
    animation: cloudsUp linear infinite;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .cloud::before,
  .cloud::after {
    content: "";
    position: absolute;
    background: #9ca3af; /* gray-400 */
    border-radius: 50%;
  }

  .cloud-1 {
    width: 90px;
    height: 90px;
    left: 12%;
    animation-duration: 7s;
  }

  .cloud-1::before {
    width: 60px;
    height: 60px;
    top: -25px;
    left: 10px;
    background: #e5e7eb;
  }

  .cloud-1::after {
    width: 70px;
    height: 70px;
    top: -15px;
    left: 35px;
  }

  .cloud-2 {
    width: 120px;
    height: 120px;
    right: 15%;
    opacity: 0.7;
    animation-duration: 9s;
    animation-delay: 1.4s;
  }

  .cloud-2::before {
    width: 70px;
    height: 70px;
    top: -30px;
    left: 15px;
    background: #e5e7eb;
  }

  .cloud-2::after {
    width: 90px;
    height: 90px;
    top: -20px;
    left: 45px;
  }

  .cloud-3 {
    width: 70px;
    height: 70px;
    left: 52%;
    opacity: 0.6;
    animation-duration: 8s;
    animation-delay: 0.8s;
  }

  .cloud-3::before {
    width: 45px;
    height: 45px;
    top: -20px;
    left: 8px;
    background: #e5e7eb;
  }

  .cloud-3::after {
    width: 55px;
    height: 55px;
    top: -10px;
    left: 28px;
  }

  /* Content */
  .content {
    text-align: center;
    z-index: 10;
    animation: fadeIn 0.6s ease-out both;
  }

  .parachute {
    width: 140px;
    height: 160px;
    margin: 0 auto 24px;
    animation: float 3s ease-in-out infinite;
  }

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 12px 22px rgba(99, 102, 241, 0.3));
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 10px;
  }

  h2 span {
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1rem;
    color: #6b7280;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes cloudsUp {
    0% {
      bottom: -140px;
      opacity: 0;
    }
    15% {
      opacity: 0.85;
    }
    100% {
      bottom: 110%;
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Loader;
