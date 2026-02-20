require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==============================
// AI ANALYSIS ROUTE
// ==============================
app.post("/analyze", async (req, res) => {
  const { transcript } = req.body;

  if (!transcript || transcript.trim().length === 0) {
    return res.json({
      analysis: `
Confidence Score: 40/100
Tone: Hesitant

Strengths:
- Attempted to respond

Improvements:
- Provide a clearer answer
- Speak in complete sentences
`
    });
  }

  const text = transcript.toLowerCase().trim();
  const words = text.split(/\s+/);
  const wordCount = words.length;

  // Filler word detection
  const fillerWords = ["um", "uh", "like", "actually", "basically"];
  const fillerCount = words.filter(word =>
    fillerWords.includes(word)
  ).length;

  // Repetition detection
  let repetitionPenalty = 0;
  for (let i = 1; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      repetitionPenalty += 5;
    }
  }

  // Base score
  let confidenceScore = 85;

  if (wordCount < 10) confidenceScore -= 15;
  if (fillerCount > 0) confidenceScore -= fillerCount * 3;
  confidenceScore -= repetitionPenalty;

  if (confidenceScore > 100) confidenceScore = 100;
  if (confidenceScore < 0) confidenceScore = 0;

  // Tone classification
  let tone = "Neutral";
  if (confidenceScore >= 80) tone = "Confident";
  if (confidenceScore < 60) tone = "Hesitant";

  const analysis = `
Confidence Score: ${confidenceScore}/100
Tone: ${tone}

Strengths:
- Clear introduction
- Good pacing
- Understandable structure

Improvements:
- Reduce repetition
- Avoid filler words
- Add specific achievements or measurable impact
`;

  res.json({ analysis });
});

// ==============================
// PORT CONFIG (IMPORTANT FOR RENDER)
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});