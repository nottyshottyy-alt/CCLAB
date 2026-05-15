# Lab 8 — Frontend Deployment with Vercel

## Student Information
- **Name:** Abdul Rafay
- **Enrollment:** 01-131232-005
- **Lab:** 8 — Frontend Deployment with Vercel
- **University:** Bahria University
- **Instructor:** Engr. Salman Zafar (SE Department)

## Vercel Production URL
> **https://my-lab8-app.vercel.app**

## About This Project
This is a Next.js application deployed on Vercel as part of Cloud Computing Lab 8. It demonstrates:
- **Serverless Functions** — API routes that run on-demand without a persistent server
- **Edge Functions** — Functions running at the edge for low-latency responses
- **Auto-Scaling** — Zero-config scaling handled by Vercel's infrastructure
- **Preview Deployments** — Automatic staging environments per Git branch

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Basic serverless function returning message + timestamp |
| GET | `/api/student/[id]` | Dynamic route — returns student data by ID |
| POST | `/api/submit` | Accepts JSON body with `name` and `roll` fields |
| GET | `/api/geo` | Edge function — returns geolocation data (production only) |

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Runtime:** Node.js (Serverless) + Edge Runtime

## Getting Started
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel --prod
```
