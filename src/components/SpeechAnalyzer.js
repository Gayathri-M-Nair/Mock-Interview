import React, { useState, useRef } from "react";

const SpeechAnalyzer = ({ history, setHistory }) => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const recognitionRef = useRef(null);
  const videoRef = useRef(null);

  const questions = [
    "Tell me about yourself.",
    "Describe a challenge you faced and how you solved it.",
    "Why should we hire you?",
    "What is your biggest strength?",
    "Where do you see yourself in 5 years?"
  ];

  // 🎤 Start Recording
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
      }
      setTranscript(text);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
    setAnalysis(null);
  };

  // 🛑 Stop Recording & Send to AI
  const stopListening = async () => {
    recognitionRef.current?.stop();
    setIsListening(false);
    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const response = await fetch("https://mock-interview-54xa.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ transcript })
      });

      const data = await response.json();

      setTimeout(() => {
        const extractedScore =
          parseInt(
            data.analysis.match(/Confidence Score:\s*(\d+)/)?.[1]
          ) || 0;

        setAnalysis(data.analysis);
        setIsAnalyzing(false);

        // ✅ Store in History
        setHistory((prev) => [
          ...prev,
          {
            question: questions[currentQuestionIndex],
            transcript,
            score: extractedScore,
            date: new Date().toLocaleString()
          }
        ]);
      }, 800);
    } catch (error) {
      console.error("AI analysis failed:", error);
      setAnalysis("Error analyzing response. Please try again.");
      setIsAnalyzing(false);
    }
  };

  // 📹 Toggle Camera
  const toggleCamera = async () => {
    if (!isCameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
      } catch (err) {
        alert("Camera access denied.");
      }
    } else {
      const tracks = videoRef.current?.srcObject?.getTracks();
      tracks?.forEach((track) => track.stop());
      setIsCameraOn(false);
    }
  };

  // ➡️ Next Question
  const nextQuestion = () => {
    setTranscript("");
    setAnalysis(null);
    setCurrentQuestionIndex((prev) =>
      (prev + 1) % questions.length
    );
  };

  return (
    <div className="container">
      <h1 className="title">AI Mock Interview Coach</h1>

      {/* ❓ Question Section */}
      <div className="question-container">
        <div className="question-text">
          {questions[currentQuestionIndex]}
        </div>
        <button className="next-btn" onClick={nextQuestion}>
          Next →
        </button>
      </div>

      {/* 📹 Video Section */}
      <div className="video-section">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="video-preview"
        />

        <div className="control-buttons">
          <button
            className={`icon-btn ${isCameraOn ? "active" : ""}`}
            onClick={toggleCamera}
          >
            <span className="material-icons">videocam</span>
          </button>

          <button
            className={`icon-btn ${isListening ? "active" : ""}`}
            onClick={isListening ? stopListening : startListening}
          >
            <span className="material-icons">
              {isListening ? "mic_off" : "mic"}
            </span>
          </button>
        </div>
      </div>

      {/* 📝 Transcript */}
      <div className="transcript-box">
        {transcript || "Your speech will appear here..."}
      </div>

      {/* 🤖 AI Thinking */}
      {isAnalyzing && (
        <p className="analyzing-text">
          AI is analyzing your response...
        </p>
      )}

      {/* 📊 Feedback */}
      {analysis && (
        <div className="feedback-card">
          <h2>AI Interview Feedback</h2>

          <div className="score">
            {analysis.match(/Confidence Score:\s*(\d+)/)?.[1] || 0}/100
          </div>

          <div className="analysis-text">
            {analysis}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechAnalyzer;