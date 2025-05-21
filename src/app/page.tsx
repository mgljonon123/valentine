"use client";
import Image from "next/image";
import styles from "./styles/Romance.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [now, setNow] = useState(new Date());
  const [showLove, setShowLove] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ top: 50, left: 50 });

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNoClick = () => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const btnHeight = 48; // approximate button height
    const btnWidth = 100; // approximate button width
    const top = Math.random() * (vh - btnHeight);
    const left = Math.random() * (vw - btnWidth);
    setNoBtnPos({ top, left });
  };

  return (
    <div
      className={styles.container}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <button
        className={styles.no}
        onClick={handleNoClick}
        style={{
          position: "absolute",
          top: noBtnPos.top,
          left: noBtnPos.left,
          transition: "top 0.3s, left 0.3s",
          zIndex: 2000,
        }}
      >
        No
      </button>
      <div className={styles.card}>
        <div
          style={{ marginBottom: "1rem", fontWeight: "bold", color: "#555" }}
        >
          {now.toLocaleString()}
        </div>
        {showLove && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "2rem 3rem",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                color: "#d72660",
                fontSize: "2rem",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              💖 I love you! 💖
              <br />
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "#555",
                  fontWeight: "normal",
                }}
              >
                You make my heart skip a beat!
              </span>
              <button
                onClick={() => setShowLove(false)}
                style={{
                  marginTop: "2rem",
                  background: "#d72660",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem 2rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <Image
          src="/494860477_1587470365251878_7451835860150161203_n.jpg"
          alt="Hello Kitty couple with hearts"
          className={styles.image}
          width={200}
          height={200}
          priority
        />
        <h2 className={styles.question}>
          Will you <span>Date me?</span>
        </h2>
        <div className={styles.buttons}>
          <button className={styles.yes} onClick={() => setShowLove(true)}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
