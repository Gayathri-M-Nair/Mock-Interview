<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>
# AI Mock Interview Coach 🎯

---

## Basic Details

**Team Name:** Broc9de

### Team Members
- Gayathri M Nair – Adi Shankara Institute of Engineering and Technology

---

## Hosted Project Link

Frontend (Vercel): https://mock-interview-alpha-wine.vercel.app  
Backend (Render): https://mock-interview-54xa.onrender.com  

---

## Project Description

AI Mock Interview Coach is a web-based application that simulates real interview scenarios.  
It asks dynamic interview questions, records user responses using speech-to-text, analyzes confidence and tone, and provides structured feedback with a performance score.

---

## The Problem Statement

Many students struggle with interview preparation due to:
- Lack of realistic practice environments  
- No structured feedback on speaking confidence  
- Difficulty tracking improvement over time  

---

## The Solution

Our system:
- Asks curated interview questions
- Converts speech to text in real-time
- Analyzes confidence using custom scoring logic
- Provides structured AI feedback
- Stores history and shows performance trends on a dashboard

---

## Technical Details

### Technologies Used

**Frontend**
- JavaScript
- React (Create React App)
- Recharts (for performance graphs)
- Material Icons

**Backend**
- Node.js
- Express.js
- Custom confidence scoring logic
- Render deployment

**Tools**
- VS Code
- Git & GitHub
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

## Features

- 🎤 Speech-to-text interview responses
- 📹 Optional camera preview mode
- 🤖 AI-based confidence scoring
- 📊 Dashboard with score history graph
- 🧑 Profile section
- 🔁 Multiple interview questions
- ☁️ Cloud deployment (Frontend + Backend)

---

## Implementation

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/mock-interview.git
cd mock-interview
```

### Install Dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd backend
npm install
```

---

### Run the Application

Frontend:

```bash
npm start
```

Backend:

```bash
node server.js
```

---

## Project Documentation

### Screenshots

#### 1️⃣ Interview Interface
![Screenshot1][(screenshot-link)](https://drive.google.com/file/d/1rmjNO7ne2-XRJrnToQ37YqAQNeK0IU1W/view?usp=drive_link)
Shows question box, video preview, and mic/camera controls.

#### 2️⃣ AI Feedback Card
![Screenshot2][(screenshot-link)](https://drive.google.com/file/d/1BM0q4Hc4gOd3_flVII8eX1bgAEV_yTmr/view?usp=drive_link)
Displays confidence score, tone detection, and improvement suggestions.

#### 3️⃣ Dashboard
![Screenshot3][(screenshot-link)](https://drive.google.com/file/d/1rE4SF41pDxT6P2994mbJPIMuLB3sUo8U/view?usp=drive_link)
Shows score history and performance trend graph.

---

## System Architecture

Frontend (React)  
↓  
Speech Recognition (Browser API)  
↓  
Backend (Express Server)  
↓  
Confidence Scoring Logic  
↓  
Response sent back to frontend  
↓  
Dashboard & History Update  

---

## Application Workflow

1. User selects interview question  
2. User records response  
3. Speech converted to text  
4. Transcript sent to backend  
5. Backend calculates confidence score  
6. Feedback displayed  
7. Score stored in history  
8. Dashboard graph updated  

---

## API Documentation

### Base URL

```
https://mock-interview-54xa.onrender.com
```

### POST /analyze

**Description:** Analyzes interview transcript and returns feedback.

**Request Body:**

```json
{
  "transcript": "Tell me about yourself..."
}
```

**Response:**

```json
{
  "analysis": "Confidence Score: 85/100 ..."
}
```

---

## Project Demo

### Demo Video
[[ Drive link ]](https://drive.google.com/file/d/1F5mKlkfoMKesSgi-8TZsSpSdtDXf9jVB/view?usp=drive_link)

This video demonstrates:
- Interview flow
- Speech-to-text functionality
- AI scoring system
- Dashboard visualization

---

## AI Tools Used (For Transparency)

Tool Used: ChatGPT  
Purpose:
- UI refinement suggestions
- Deployment troubleshooting
- Documentation structuring

Human Contributions:
- Architecture design
- Backend scoring logic
- React component structure
- Deployment configuration
- UI styling & interaction logic

---

## Team Contributions

**Gayathri M Nair**
- Frontend Development
- Backend Integration
- AI Scoring Logic
- Deployment (Vercel + Render)
- Documentation
- UI Enhancements
- Testing & Debugging
- Presentation & Demo

---

## License

This project is licensed under the MIT License.
