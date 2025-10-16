import React from "react";
import { TrendingUp } from "lucide-react";

import {
  Github,
  Linkedin,
  Mail,
  Download,
  BarChart3,
  Gamepad2,
  Award,
  GraduationCap,
  CheckCircle2,
  Phone,
} from "lucide-react";

/* --- Personal Info --- */
const PROFILE = {
  name: "Raushan Kumar",
  title: "Data Analyst",
  location: "Bengaluru, India",
  summary:
    "I deliver real product impact by transforming raw product data into actionable insights. My expertise spans SQL, Python, Excel, Power BI, and Mixpanel — helping teams improve retention, optimize funnels, and make smarter product decisions.",
  github: "https://github.com/raushankr259",
  linkedin: "https://www.linkedin.com/in/raushan-kumar-4516251b9",
  resume:
    "https://drive.google.com/file/d/1ZtJtarTbc4Nu6o8bdxi7CKIE2Sg1oWUa/view?usp=sharing",
  contactEmail: "raushankr259@gmail.com",
  contactPhone: "9631010333",
};

/* --- Skills --- */
const skills = [
  { name: "SQL", icon: BarChart3 },
  { name: "Python", icon: BarChart3 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Mixpanel", icon: Gamepad2 },
  { name: "Advanced Excel", icon: BarChart3 },
  { name: "Data Analytics", icon: CheckCircle2 },
  { name: "A/B Testing", icon: CheckCircle2 },
  { name: "BigQuery", icon: CheckCircle2 },
];

/* --- Case Studies --- */
const caseStudies = [
  {
    title: "User Journey Tracking & MIS Dashboards",
    description:
      "Implemented end-to-end user journey tracking and built MIS dashboards for founders, driving product strategy with clear insights.",
    impact:
      "Improved visibility into player behavior and accelerated data-driven decision-making.",
    icon: BarChart3,
  },
  {
    title: "Game Performance Ranking Algorithm",
    description:
      "Created a point-based ranking algorithm to score and compare game performance across titles.",
    impact:
      "Boosted user engagement by 15% and strengthened long-term retention.",
    icon: Gamepad2,
  },
  {
  title: "Increasing D7 Retention from 10% to 15% at Terra",
  description: `
    Led a project that boosted Day-7 retention from 10% to 15% by analyzing user behavior, promoting high-engagement games, and optimizing game placement with A/B testing. Implemented complementary game design, personalized suggestions, and competitive features like leaderboards and challenges to enhance engagement and reduce churn.
  `,
  impact: `
    Boosted D7 retention from 10% to 15%, balanced motivation, reduced cannibalization, and enhanced long-term user engagement.
  `,
  icon: TrendingUp,
}

];

/* --- Experience --- */
const experience = [
  {
    role: "Data Analyst",
    company: "Terrabyte Technologies",
    period: "Jul 2024 — Present",
    bullets: [
      "Deliver analytics for 3 live titles — retention, funnels, monetization.",
      "Improved first-time user experience by 20% through data-backed experiments.",
    ],
  },
  {
    role: "Power BI Developer",
    company: "Cognizant Technology Solutions",
    period: "Feb 2023 — Mar 2024",
    bullets: [
      "Built interactive dashboards with DAX & Power Query for leadership.",
      "Integrated GPT API to auto-generate insights, reducing manual effort.",
    ],
  },
];

/* --- Certifications --- */
const certifications = [
  {
    name: "Data Science using Python",
    link: "https://www.mygreatlearning.com/certificate/FXJIZFNE",
  },
  {
    name: "Power BI from Beginner to Advance",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-28eb535f-b0b4-4f58-8f7e-d977ab685dd3.jpg",
  },
  {
    name: "Microsoft SQL from A to Z",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3c6aaf44-6cf1-4a34-9b97-6fe49e98a5df.jpg?v=1687259529000",
  },
  {
    name: "Data Science Math Skills",
    link: "https://www.coursera.org/account/accomplishments/certificate/X85BLDR5Z5BW",
  },
];

/* --- Achievements --- */
const achievements = [
  "Improved FTUE by 20% at Terrabyte through funnel optimization.",
  "Designed retention-focused dashboards adopted by founders & CEO.",
];

/* --- Education --- */
const education = {
  degree: "B.Tech in Electronics & Communication",
  institution:
    "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai, India",
  period: "2018 — 2022",
};

/* --- Component --- */
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">{PROFILE.name}</h1>
          <p className="text-xl text-indigo-400">
            {PROFILE.title} • {PROFILE.location}
          </p>
          <p className="max-w-3xl mx-auto text-slate-300">{PROFILE.summary}</p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-slate-600 rounded-xl hover:bg-slate-800"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-slate-600 rounded-xl hover:bg-slate-800"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.contactEmail}`}
              className="flex items-center gap-2 px-5 py-2 border border-slate-600 rounded-xl hover:bg-slate-800"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </header>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg hover:scale-[1.02] transition"
              >
                <s.icon size={18} className="text-indigo-400" />
                <span className="text-slate-200 text-sm font-medium">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
{/* Key Projects */}
<section>
  <h2 className="text-3xl font-semibold mb-6 text-center">
    Key Projects
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    {caseStudies.map((p, i) => (
      <div
        key={i}
        className={`rounded-xl bg-slate-800 hover:scale-[1.02] transition shadow-lg ${
          i === 2 ? "col-span-1 md:col-span-2 p-6 md:p-8" : "p-5"
        }`}
      >
        {i === 2 ? (
          <>
            {/* Third project: icon above title */}
            <p.icon size={36} className="text-indigo-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-center mb-4">{p.title}</h3>
            {p.description.split("\n").map((line, idx) => (
              <p key={idx} className="text-slate-300 mt-2 text-center">
                {line.trim()}
              </p>
            ))}
            <p className="text-sm text-indigo-400 mt-4 font-medium text-center">
              Impact: {p.impact}
            </p>
          </>
        ) : (
          <>
            {/* First two projects: left-aligned */}
            <p.icon size={28} className="text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2">{p.description}</p>
            <p className="text-sm text-indigo-400 mt-3 font-medium">
              Impact: {p.impact}
            </p>
          </>
        )}
      </div>
    ))}
  </div>
</section>



        {/* Experience Timeline */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
          <div className="relative border-l border-slate-700 space-y-10 pl-6">
            {experience.map((e, i) => (
              <div key={i} className="relative ml-2">
                <div className="absolute -left-[22px] top-2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-900"></div>
                <h3 className="font-semibold text-lg">
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

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
              >
                <Award size={18} className="text-indigo-400" />
                <span className="text-slate-200 text-sm underline">{c.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Achievements</h2>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-3 bg-slate-800 rounded-lg"
              >
                <CheckCircle2 size={18} className="text-indigo-400 mt-1" />
                <span className="text-slate-200 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
          <div className="p-5 bg-slate-800 rounded-lg flex items-center gap-3">
            <GraduationCap size={24} className="text-indigo-400" />
            <div>
              <h3 className="font-semibold">{education.degree}</h3>
              <p className="text-sm text-slate-400">{education.institution}</p>
              <p className="text-xs text-slate-500">{education.period}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-4">
            Passionate about driving product decisions through data. Exploring
            Data Analyst opportunities in tech—let’s connect!
          </p>
          <div className="flex flex-col items-center gap-2">
            <a
              href={`mailto:${PROFILE.contactEmail}`}
              className="flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <Mail size={18} /> {PROFILE.contactEmail}
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone size={18} /> {PROFILE.contactPhone}
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500 pt-6">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </div>
    </main>
  );
}
