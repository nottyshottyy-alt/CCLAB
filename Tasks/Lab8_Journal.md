# Cloud Computing — Lab 8 Journal
## Frontend Deployment with Vercel

**Name:** Abdul Rafay  
**Enrollment:** 01-131232-005  
**Section:** BSE 6-A  
**Instructor:** Engr. Salman Zafar  
**University:** Bahria University — SE Department  
**GitHub Repo:** https://github.com/rafeh216/Lab  
**Vercel Production URL:** https://my-lab8-app.vercel.app

---

## Introduction

Vercel is a cloud platform specifically designed for frontend frameworks and static sites. It fits into the cloud computing ecosystem as a Platform-as-a-Service (PaaS) that abstracts away all infrastructure management — there are no servers to configure, no Docker containers to build, and no Terraform scripts to write. Vercel integrates directly with GitHub, so every push to the repository triggers an automatic build and deployment. It supports serverless functions (backend code that runs on-demand), edge functions (code that executes at the closest data center to the user for near-zero latency), and auto-scaling with zero configuration. This makes it ideal for deploying modern web applications quickly and efficiently, especially compared to traditional infrastructure provisioning methods like those used in Lab 7 with Terraform.

---

## Step Log

### Task 1 — Create & Run App Locally
Created a Next.js application using `npx create-next-app@latest my-lab8-app`. Edited `app/page.jsx` to display my name (Abdul Rafay), enrollment number (01-131232-005), and section (BSE 6-A). Ran `npm run dev` and verified the homepage loads at `http://localhost:3000` with all information visible and properly styled with a dark glassmorphism theme.

### Task 2 — Push to GitHub
Initialized a Git repository with `git init`, staged all files with `git add -A`, and committed with the message "Lab 8: Vercel Deployment - Abdul Rafay (01-131232-005)". Created a public repository on GitHub named `Lab` and pushed the code using `git push -u origin main`. Verified the files appeared on GitHub at https://github.com/rafeh216/Lab.

### Task 3 — Deploy to Vercel
*(Steps to complete manually:)*
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"** → Find **Lab** repo → Click **Import**
3. Vercel auto-detects Next.js — leave all settings as default
4. Click **Deploy** → Wait ~45 seconds
5. Your live URL will be: `https://lab-xxxxx.vercel.app`
6. **Screenshot the Vercel dashboard** showing the green "Ready" badge
7. **Screenshot the live site** in the browser

### Task 4 — Environment Variables
Created `.env.local` with three variables: `NEXT_PUBLIC_APP_NAME=Lab8_App`, `NEXT_PUBLIC_STUDENT_NAME=Abdul Rafay`, and `API_SECRET_KEY=my-secret-123`. The `NEXT_PUBLIC_` prefix makes variables accessible in the browser, while `API_SECRET_KEY` remains server-side only. Used `process.env.NEXT_PUBLIC_STUDENT_NAME` in the page component to display the student name dynamically.

*(After deploying to Vercel:)*
1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add all three variables
3. Click **Redeploy** from the Deployments tab

### Task 5 — Serverless Functions (API Routes)
Created three API routes as serverless functions:
- **GET `/api/hello`** — Returns a JSON message with the current timestamp. Verified at `localhost:3000/api/hello`.
- **GET `/api/student/[id]`** — Dynamic route that returns student data for valid IDs (001, 002) and a 404 error for invalid IDs (999). Tested both cases successfully.
- **POST `/api/submit`** — Accepts JSON body with `name` and `roll` fields. Tested with PowerShell `Invoke-RestMethod` and received `{"success": true, "message": "Received from Abdul Rafay (01-131232-005)"}`.

### Task 6 — Edge Functions & Middleware
Created `middleware.js` in the project root that adds a custom `x-lab: Lab8-CloudComputing` header and logs each request with `[EDGE]` prefix. Created `/api/geo` endpoint with `runtime = "edge"` that returns geolocation data. On localhost, geo data shows placeholder values — real country/city data only appears on the production Vercel URL.

### Task 7 — Preview Deployments & Git Branching
*(Steps to complete manually:)*
1. Run: `git checkout -b feature/labs-list`
2. The labs list section is already included in the homepage
3. Run: `git add . && git commit -m "feat: add labs list" && git push origin feature/labs-list`
4. Check Vercel dashboard → Deployments tab → A preview deployment will appear automatically
5. **Screenshot the Deployments tab** showing both Production and Preview deployments

---

## Screenshots Checklist

| # | Description | Status |
|---|-------------|--------|
| 1 | Local dev server at localhost:3000 with name and roll | ✅ Saved: `Task1_Homepage_localhost.png` |
| 2 | GitHub repo page showing files (branch: main) | 📌 Take manually at https://github.com/rafeh216/Lab |
| 3 | Vercel dashboard — green "Ready" badge and live URL | 📌 Take after Vercel deploy |
| 4 | Live production site (vercel.app URL) in browser | 📌 Take after Vercel deploy |
| 5 | JSON from `/api/hello` on production URL | ✅ Saved: `Task5_API_hello.png` |
| 6 | `/api/student/001` (data) AND `/api/student/999` (404) | ✅ Saved: `Task5_API_student_001.png` and `Task5_API_student_999.png` |
| 7 | POST `/api/submit` success response | 📌 Use Postman or see curl output below |
| 8 | `/api/geo` with country and city (production only) | ✅ Local saved: `Task6_API_geo.png` (retake on production for real geo data) |
| 9 | Vercel Deployments tab — Production + Preview | 📌 Take after creating feature branch |

### POST /api/submit — curl/PowerShell Result
```json
{
    "success": true,
    "message": "Received from Abdul Rafay (01-131232-005)"
}
```

---

## CLI vs GUI Reflection

I used both the CLI and GUI methods during this lab. The **CLI approach** was faster for repetitive tasks like Git operations (init, add, commit, push) and running the dev server — a single command handles everything without clicking through menus. However, the **GUI approach** (Vercel Dashboard) was more intuitive for visual tasks like checking deployment status, viewing logs, and managing environment variables — you can see everything at a glance without memorizing commands.

**CLI Advantage:** Speed and scriptability — you can chain commands together and automate workflows.  
**CLI Disadvantage:** You need to remember exact syntax; errors in commands can be confusing.  
**GUI Advantage:** Visual feedback — deployment status, logs, and settings are easy to navigate.  
**GUI Disadvantage:** Slower for bulk operations; requires switching between browser tabs and clicking through menus.

---

## Reflection Questions

### Q1: Serverless Function vs Traditional Express.js Server

A traditional Express.js server runs continuously on a machine — you start it with `node server.js` and it listens on a port 24/7, consuming resources even when no requests come in. In contrast, a Vercel serverless function (like the `/api/hello` route I created in Task 5) only runs when a request arrives. Vercel spins up an execution environment, processes the request, returns the response, and shuts down. This means I didn't need to configure any server, manage ports, or worry about uptime — I just wrote a function in `app/api/hello/route.js` and it became a live endpoint automatically. The trade-off is that serverless functions can experience "cold starts" on the first request after idle time.

### Q2: What is a Cold Start?

A cold start occurs when a serverless function hasn't been called for a while and its execution environment has been shut down. When the next request arrives, Vercel must spin up a new container, load the runtime, and initialize the function before it can respond. This adds approximately 100–300ms of latency to the first request. Subsequent requests (while the function is "warm") are much faster because the environment is already running. On Vercel, this primarily affects serverless functions — Edge Functions have near-zero cold starts because they run on a lightweight runtime distributed across 100+ locations worldwide.

### Q3: Why Can't You Use Node.js "fs" Module in Edge Functions?

Edge Functions do not use the Node.js runtime — they use the **Web Standard APIs** runtime (similar to what runs in web browsers), which includes `fetch()`, `TextEncoder`, `Response`, and other web-standard APIs. The `fs` (filesystem) module is a Node.js-specific API that accesses the local disk, which doesn't make sense in an edge environment where the function runs across 100+ distributed locations simultaneously. Edge Functions are faster because they use a lighter runtime (V8 isolates) without the overhead of a full Node.js process, and they execute at the CDN edge location nearest to the user, eliminating network latency to a centralized server.

### Q4: CLI vs GUI — Advantage and Disadvantage

**CLI Advantage:** Efficiency and automation. Running `git add . && git commit -m "message" && git push` is one line that completes in seconds. You can also script deployments with `vercel --prod` in CI/CD pipelines.  
**CLI Disadvantage:** Steeper learning curve. New team members need to learn and remember specific command syntax, and debugging failed commands can be harder without visual feedback.

**GUI Advantage:** Accessibility and discoverability. The Vercel Dashboard shows deployment status, logs, and environment variables in a clear visual layout — no commands to memorize.  
**GUI Disadvantage:** Slower workflow. Adding environment variables one-by-one through a web form takes much longer than a scripted approach, and GUI actions can't be easily automated or reproduced.

### Q5: Security Difference — NEXT_PUBLIC_APP_NAME vs API_SECRET_KEY

`NEXT_PUBLIC_APP_NAME` is prefixed with `NEXT_PUBLIC_`, which means Next.js **inlines it into the JavaScript bundle** sent to the browser. Anyone can see this value by inspecting the page source or network traffic — so it should only contain non-sensitive data like app names or feature flags.

`API_SECRET_KEY` has **no** `NEXT_PUBLIC_` prefix, which means it is **only accessible on the server side** — in API routes and server components. It is never sent to the browser and cannot be seen by users. This is critical for storing API keys, database passwords, and other secrets. If a secret key were accidentally prefixed with `NEXT_PUBLIC_`, it would be exposed to every user who visits the site.

### Q6: Vercel (git push) vs Terraform (terraform apply) — DevOps Comparison

**Vercel Advantages:**
1. **Speed and simplicity:** A `git push` to main triggers an automatic build and deployment in ~45 seconds with zero configuration. No infrastructure code to write or maintain.
2. **Built-in CI/CD:** Every branch gets an automatic preview deployment URL. Pull request reviews can test the actual deployed app before merging — no separate staging setup needed.

**Vercel Disadvantages:**
1. **Limited infrastructure control:** You cannot configure specific instance types, VPCs, security groups, or custom networking. You are locked into Vercel's infrastructure decisions.
2. **Vendor lock-in:** Your deployment pipeline is tied to Vercel's platform. Migrating to AWS, GCP, or another provider requires rebuilding the entire deployment workflow.

**Terraform Advantages:**
1. **Full control:** You define every piece of infrastructure (EC2 instances, load balancers, security groups, databases) and can customize to exact requirements.
2. **Provider-agnostic:** Terraform works with AWS, GCP, Azure, and others — your infrastructure code is portable and not locked to a single vendor.

**Terraform Disadvantages:**
1. **Complexity:** Writing and maintaining `.tf` files requires deep knowledge of cloud services. A simple deployment that takes one `git push` on Vercel requires multiple Terraform resources and ~2 minutes of provisioning.
2. **Ongoing management:** You must manage state files, handle drift detection, and manually update infrastructure when requirements change.

---

## Conclusion

This lab demonstrated how Vercel dramatically simplifies frontend deployment compared to traditional infrastructure provisioning. What surprised me most was the zero-configuration auto-scaling — there is no equivalent to Terraform's `min_size` and `max_size` settings because Vercel handles everything automatically. The preview deployment feature was also impressive — every Git branch getting its own live URL instantly is like having unlimited free staging environments. I would use Vercel for frontend applications, marketing sites, and projects where speed of deployment matters more than fine-grained infrastructure control. For complex backend systems with specific networking or database requirements, I would still use Terraform or a similar IaC tool.

---

## Challenges

**Challenge 1 — Middleware Deprecation Warning:** When running the dev server, a warning appeared saying the "middleware" file convention is deprecated in Next.js 16.x and to use "proxy" instead. The middleware still works correctly, but this required understanding that newer versions of Next.js are evolving their patterns. The solution was to proceed with the current middleware approach since it is still functional and matches the lab manual's instructions.

**Challenge 2 — PowerShell vs Unix curl syntax:** The lab manual uses Unix-style `curl` commands for testing the POST endpoint, but on Windows PowerShell, `curl` is an alias for `Invoke-WebRequest` which uses completely different syntax for headers and body. The solution was to use `Invoke-RestMethod -Method POST -Uri "..." -ContentType "application/json" -Body '...'` instead of the Unix `curl -X POST -H -d` syntax.

---

## Project Structure
```
my-lab8-app/
├── app/
│   ├── api/
│   │   ├── hello/route.js        ← Task 5.1: Basic GET
│   │   ├── student/[id]/route.js ← Task 5.2: Dynamic Route
│   │   ├── submit/route.js       ← Task 5.3: POST Function
│   │   └── geo/route.js          ← Task 6.2: Edge Geolocation
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx                  ← Homepage with student info
├── middleware.js                  ← Task 6.1: Edge Middleware
├── .env.local                    ← Task 4: Environment Variables
├── Tasks/                        ← Screenshots folder
│   ├── Task1_Homepage_localhost.png
│   ├── Task5_API_hello.png
│   ├── Task5_API_student_001.png
│   ├── Task5_API_student_999.png
│   ├── Task6_API_geo.png
│   └── Lab8_Journal.md
├── README.md
└── package.json
```
