AI Mock Interview Coach 🎯
Basic Details

Team Name: Broc9de

Team Members:

Gayathri M Nair – [Your College]

Hosted Project Link:
Frontend: https://mock-interview-alpha-wine.vercel.app

Backend API: https://mock-interview-54xa.onrender.com

Project Description

AI Mock Interview Coach is a web-based interview practice platform that simulates real interview scenarios.
It asks structured questions, records user responses via microphone and optional video, analyzes speech clarity and confidence, and tracks performance over time.

The Problem Statement

Many students struggle with interview preparation due to:

Lack of real-time feedback

No structured mock practice

No way to measure improvement

Nervousness during actual interviews

Traditional preparation methods do not simulate real interview pressure or provide objective performance insights.

The Solution

AI Mock Interview Coach creates a simulated interview environment where:

The system asks real interview questions

User responds via voice

Speech is converted to text

Backend analyzes clarity, repetition, filler words, and confidence

A score and structured feedback are generated

Performance history is stored and visualized

This helps users track improvement and practice confidently.

Technical Details
Technologies / Components Used

For Software

Languages used: JavaScript

Frameworks used: React (Frontend), Express.js (Backend)

Libraries used:

recharts (performance graph)

cors

dotenv

Tools used:

VS Code

Git & GitHub

Render (Backend Hosting)

Vercel (Frontend Hosting)

Features

🎤 Real-time speech recognition (browser-based)

📹 Optional video preview mode

🤖 AI-style feedback generation

📊 Confidence score calculation

📈 Performance dashboard with history graph

❓ Structured interview question flow

🧑 Profile summary page

Implementation
Installation

Clone the repository:

git clone https://github.com/Gayathri-M-Nair/Mock-Interview.git
cd Mock-Interview
Install Frontend
npm install
Install Backend
cd backend
npm install
Run Locally

Start Backend

cd backend
node server.js

Start Frontend

npm start
Project Documentation
Screenshots

Add at least 3 screenshots here:

![Interview Page]https://drive.google.com/file/d/1rmjNO7ne2-XRJrnToQ37YqAQNeK0IU1W/view?usp=drive_link
AI interview interface with question box and video preview

![AI Feedback]https://drive.google.com/file/d/1BM0q4Hc4gOd3_flVII8eX1bgAEV_yTmr/view?usp=drive_link
Confidence score and structured feedback

![Dashboard]https://drive.google.com/file/d/1rE4SF41pDxT6P2994mbJPIMuLB3sUo8U/view?usp=drive_link)
Performance history graph and previous interview scores
System Architecture

Frontend (React)
⬇
Speech Recognition API (Browser)
⬇
Transcript sent to Backend (Express API)
⬇
Confidence Score Calculation
⬇
Feedback Response
⬇
Dashboard Storage & Graph Visualization

Application Workflow

User opens interview page

Question is displayed

User records response

Transcript is generated

Backend analyzes response

Confidence score and feedback shown

Result stored in history

Dashboard updates performance graph

API Documentation
Base URL
https://mock-interview-54xa.onrender.com
Endpoint
POST /analyze

Description: Analyzes interview transcript and returns confidence feedback.

Request Body:

{
  "transcript": "Tell me about yourself..."
}

Response:

{
  "analysis": "Confidence Score: 82/100..."
}
Project Demo
Live Demo

Frontend: https://mock-interview-alpha-wine.vercel.app

Demo Video

https://drive.google.com/file/d/1F5mKlkfoMKesSgi-8TZsSpSdtDXf9jVB/view?usp=drive_link

The demo shows:

Question flow

Voice recording

AI feedback generation

Dashboard performance tracking

AI Tools Used (Transparency Section)

Tool Used: ChatGPT

Purpose:

Debugging assistance

API structuring

UI logic refinement

Documentation formatting

Approximate AI-assisted code: ~25–30%
Core architecture, logic, integration, deployment: Implemented manually.

Team Contributions

Gayathri M Nair

Frontend development (React UI)

Speech recognition integration

Backend API implementation

Deployment (Render + Vercel)

Documentation

License

This project is licensed under the MIT License.