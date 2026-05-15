export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Lab8_App";
  const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME || "Muhammad Awais";

  return (
    <>
      <div className="gradient-bg" />
      <div className="grid-pattern" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Hero Badge */}
        <div className="fade-in-up">
          <span className="glow-badge pulse-glow">Cloud Computing  Lab 8</span>
        </div>

        {/* Main Title */}
        <h1
          className="fade-in-up fade-in-up-delay-1 mt-8 text-5xl sm:text-6xl font-extrabold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #f0fdf4 0%, #10b981 50%, #0ea5e9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.15,
          }}
        >
          Vercel Deployment
        </h1>

        <p className="fade-in-up fade-in-up-delay-2 mt-4 text-lg text-gray-400 max-w-xl">
          Frontend deployment with serverless computing, edge functions &amp; auto-scaling, powered by{" "}
          <span className="text-[var(--accent-light)] font-semibold">Vercel</span>.
        </p>

        {/* Student Card */}
        <div className="fade-in-up fade-in-up-delay-3 mt-10 glass-card p-8 w-full max-w-md">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ background: "linear-gradient(135deg, #10b981, #0ea5e9)" }}
            >
              MA
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white">{studentName}</h2>
              <p className="text-sm text-gray-400">BSE 6-A</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 px-4 rounded-lg" style={{ background: "rgba(16,185,129,0.06)" }}>
              <span className="text-sm text-gray-400">Enrollment</span>
              <span className="font-mono font-semibold text-[var(--accent-light)]">01-131232-051</span>
            </div>
            <div className="flex justify-between items-center py-2 px-4 rounded-lg" style={{ background: "rgba(16,185,129,0.06)" }}>
              <span className="text-sm text-gray-400">App Name</span>
              <span className="font-mono font-semibold text-[var(--info)]">{appName}</span>
            </div>
            <div className="flex justify-between items-center py-2 px-4 rounded-lg" style={{ background: "rgba(16,185,129,0.06)" }}>
              <span className="text-sm text-gray-400">Instructor</span>
              <span className="font-semibold text-white">Engr. Salman Zafar</span>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="fade-in-up fade-in-up-delay-4 mt-8 glass-card p-6 w-full max-w-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            API Endpoints
          </h3>
          <div className="space-y-2 text-left font-mono text-sm">
            <a href="/api/hello" className="block py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-green-400 mr-2">GET</span>
              <span className="text-gray-300">/api/hello</span>
            </a>
            <a href="/api/student/001" className="block py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-green-400 mr-2">GET</span>
              <span className="text-gray-300">/api/student/[id]</span>
            </a>
            <a href="/api/submit" className="block py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-yellow-400 mr-2">POST</span>
              <span className="text-gray-300">/api/submit</span>
            </a>
            <a href="/api/geo" className="block py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-blue-400 mr-2">EDGE</span>
              <span className="text-gray-300">/api/geo</span>
            </a>
          </div>
        </div>

        {/* Labs List - for Task 7 feature branch */}
        <div className="fade-in-up fade-in-up-delay-4 mt-8 glass-card p-6 w-full max-w-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Completed Labs
          </h3>
          <div className="space-y-2">
            {[
              { num: "Lab 4", title: "Docker Containers" },
              { num: "Lab 5", title: "LocalStack (AWS)" },
              { num: "Lab 7", title: "Terraform IaC" },
              { num: "Lab 8", title: "Vercel Deployment" },
            ].map((lab) => (
              <div
                key={lab.num}
                className="flex items-center gap-3 py-2 px-4 rounded-lg"
                style={{ background: "rgba(108,99,255,0.06)" }}
              >
                <span className="text-lg">{lab.icon}</span>
                <span className="text-sm text-gray-400 w-12">{lab.num}</span>
                <span className="text-sm font-medium text-white">{lab.title}</span>
                <span className="ml-auto text-xs text-[var(--accent-light)]">✓</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-500 border-t border-white/5">
        Cloud Computing Lab 8 — Bahria University — SE Department — {new Date().getFullYear()}
      </footer>
    </>
  );
}
