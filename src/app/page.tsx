"use client";
import Image from "next/image";
import styles from "./styles/Romance.module.css";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [now, setNow] = useState(new Date());
  const [showLove, setShowLove] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleThankYouClick = () => {
    setShowLove(true);
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ffd700", "#00ff00", "#00b7eb"],
    });
  };

  return (
    <div
      className={`${styles.container} bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center min-h-screen p-4`}
    >
      <div
        className={`${styles.card} bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105`}
      >
        <div className="text-center text-gray-600 font-semibold mb-4">
          {now.toLocaleString()}
        </div>
        {showLove && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm w-full animate-bounce-in">
              <h2 className="text-3xl font-bold text-pink-600 mb-2">
                🎉 Happy Birthday! 🎉
              </h2>
              <p className="text-xl font-bold text-pink-600 mb-4">
                💖 Will you date me! 💖
              </p>
              <p className="text-gray-600 text-lg">
                You make my heart skip a beat!
              </p>
              <button
                onClick={() => setShowLove(false)}
                className="mt-6 bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 transition-colors shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-center mb-6">
          <Image
            src="/494860477_1587470365251878_7451835860150161203_n.jpg"
            alt="Hello Kitty couple with hearts"
            className={`${styles.image} rounded-full shadow-md`}
            width={200}
            height={200}
            priority
          />
        </div>
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">
          Happy Birth <span className="text-purple-600">Day!</span>
        </h2>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg px-8 py-3 font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
            onClick={handleThankYouClick}
          >
            Thank you!
          </button>
        </div>
      </div>
    </div>
  );
}
