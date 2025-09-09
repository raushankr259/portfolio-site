import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

/* --- Personal Info --- */
const PROFILE = {
  name: "Raushan Kumar",
  title: "Data Analyst — Gaming Analytics",
  location: "Bengaluru, India",
  summary:
    "Data Analyst with 2+ years of experience turning player telemetry into actionable insights. Skilled in SQL, Python, Power BI, and Mixpanel. Experienced in cohort analysis, funnel optimization, and building BI dashboards for live games.",
  github: "https://github.com/raushankr259",
  linkedin: "https://www.linkedin.com/in/raushan-kumar-4516251b9",
  resume:
    "https://drive.google.com/file/d/1ZtJtarTbc4Nu6o8bdxi7CKIE2Sg1oWUa/view?usp=sharing",
  contactEmail: "raushankr259@gmail.com",
};

/* --- Projects (keep 2–3 max) --- */
const projects = [
  {
    title: "Retention Recovery Dashboard",
    description:
      "Identified early player churn points using Mixpanel cohort analysis. Recommended level rebalancing that improved D7 retention by 18%.",
    link: "https://github.com/raushankr259/retention-dashboard",
    skills: ["SQL", "Mixpanel", "BigQuery", "Power BI"],
  },
  {
    title: "Player Segmentation & LTV Model",
    description:
      "Built predictive LTV model and segmented players into cohorts. Helped product team target promos to top 5% players driving 48% revenue.",
    link: "https://github.com/raushankr259/ltv-model",
    skills: ["Python", "Pandas", "Scikit-learn"],
  },
];

/* --- Skills --- */
const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "Mixpanel",
  "BigQuery",
  "A/B Testing",
  "Git",
];

/* --- Experience --- */
const experience = [
  {
    role: "Data Analyst",
    company: "Terrabyte Technologies (Gaming)",
    period: "Jul 2024 — Present",
    bullets: [
      "Deliver analytics for 3 live titles — retention, funnels, revenue.",
      "Improved first-time user experience by 20% through data-driven changes.",
    ],
  },
  {
    role: "Power BI Developer",
    company: "Cognizant Technology Solutions",
    period: "Feb 2023 — Mar 2024",
    bullets: [
      "Developed dashboards with DAX & Power Query used by leadership.",
      "Integrated GPT API to auto-generate insights, reducing manual effort.",
    ],
  },
];

/* --- Component --- */
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{PROFILE.name}</h1>
          <p className="text-lg text-slate-300">
            {PROFILE.title} • {PROFILE.location}
          </p>
          <p className="max-w-2xl text-slate-400">{PROFILE.summary}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded hover:bg-slate-800"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded hover:bg-slate-800"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.contactEmail}`}
              className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded hover:bg-slate-800"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
          <div className="grid gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-slate-800 hover:scale-[1.01] transition"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2">{p.description}</p>
                <div className="mt-2 text-sm text-slate-400">
                  Skills: {p.skills.join(", ")}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 text-sm underline mt-2 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((e, i) => (
              <div key={i}>
                <h3 className="font-semibold">
                  {e.role} • {e.company}
                </h3>
                <p className="text-sm text-slate-400">{e.period}</p>
                <ul className="list-disc list-inside mt-2 text-slate-300 text-sm space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-2">
            I’m open to Data Analyst roles in gaming & tech (9–14 LPA). Let’s
            connect.
          </p>
          <a
            href={`mailto:${PROFILE.contactEmail}`}
            className="text-indigo-400 underline"
          >
            {PROFILE.contactEmail}
          </a>
        </section>

        <footer className="text-center text-sm text-slate-500 pt-6">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </div>
    </main>
  );
}
