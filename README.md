# STEP — Academia–Industry Collaboration Portal

**STEP** (Skill, Training & Engagement Portal) is a Smart India Hackathon (SIH) project — a centralized platform connecting **Students**, **Industry Partners**, **Academicians**, and **Institutions**.

## Core Features

| Feature | Description |
|---|---|
| **Skill Assessment** | Multi-step domain questionnaire generating a verified skill profile and gap analysis |
| **Internships & Live Projects** | Industry posts skill-tagged opportunities; students get matched recommendations |
| **Industry Learning Programs** | Certifications, workshops, FDPs, and mentorship initiatives by industry partners |
| **Academician Portal** | Faculty browse FDPs, industrial training, consultancy, and research collaboration |
| **Institution Dashboard** | Analytics on student skill development, internship participation, placement readiness |
| **Digital Portfolio** | Verified student record of skills, certifications, projects, and internship history |
| **STEP AI** | AI assistant for students (skill gaps), academicians (FDPs), and industry (postings) |

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Auth**: Firebase Authentication
- **AI**: Groq (LLM chat assistant)
- **Styling**: Vanilla CSS with glassmorphism design system

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # add your Firebase + Groq keys
npm run dev
```

## Routes

| Route | Page |
|---|---|
| `/` | Home — three-audience landing |
| `/students` | Student portal |
| `/academicians` | Academician portal (FDPs, research) |
| `/industry` | Industry Partner portal |
| `/institution` | Institution analytics dashboard |
| `/skill-assessment` | Skill Assessment flow |
| `/learning-programs` | Industry Learning Programs listing |
| `/ai` | STEP AI assistant |

## Environment Variables

Copy `.env.local` and set:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_GROQ_API_KEY=...
```

