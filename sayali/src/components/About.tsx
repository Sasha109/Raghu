import { useState } from "react";
import {
  Code,
  BarChart3,
  Users,
  Calendar,
  Zap,
  Database,
  Globe,
  BookOpen,
  Heart,
  Award,
} from "lucide-react";

const About = () => {
  const [imageError, setImageError] = useState(false);

  const productManagement = [
    { name: "SDLC / SDLC Management", icon: Code },
    { name: "GTM Strategy & Roadmapping", icon: BarChart3 },
    { name: "Agile, Scrum & Sprint Planning", icon: Users },
    { name: "Feature Prioritization & Roadmaps", icon: Calendar },
    { name: "JIRA (Issue & Sprint Tracking)", icon: Database },
    { name: "API Testing (Postman)", icon: Code },
  ];

  const businessAnalytics = [
    { name: "KPI Definition & Metrics", icon: BarChart3 },
    { name: "MySQL / Data Analysis", icon: Database },
    { name: "Market Research & Competitive Analysis", icon: Globe },
    { name: "PRD / BRD / Business Case Creation", icon: BookOpen },
    { name: "A/B Testing & Experimentation", icon: Zap },
    { name: "Client & Stakeholder Communication", icon: Users },
  ];

  const domainExpertise = [
    { name: "Payments: Issuing, Acquiring, Processing", icon: Code },
    { name: "E‑commerce & Digital Payments (wallets)", icon: Globe },
    { name: "Telecom / Telco Solutions", icon: Database },
    { name: "Graphics & Multimedia Processing", icon: Zap },
    { name: "Consumer Products & SaaS", icon: Heart },
    { name: "AI / ML & Emerging Tech", icon: Award },
  ];

  const programOperations = [
    "Program & Project Management",
    "Stakeholder & Vendor Management",
    "Operational Process Improvements",
    "Risk & Change Management",
    "ISO / Six Sigma / TBEM practices",
    "Vendor Onboarding, BAU & Contracts",
    "Metrics, Reporting & Operational Dashboards",
  ];

  const certifications = [
    "PMP (Contact Hours) - IIM Kozhikode",
    "Six Sigma Foundation",
    "ISO Standards Awareness",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-purple-400/20 animate-pulse"></div>

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-3/5 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-0 left-4/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-500"></div>

          <div className="absolute top-1/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-2/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse delay-2500"></div>
          <div className="absolute top-3/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-700"></div>
          <div className="absolute top-4/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse delay-1700"></div>
        </div>

        {/* Energy orbs */}
        <div className="absolute top-32 right-1/3 w-6 h-6 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-purple-400/20 rounded-full animate-float delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Profile Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-12 h-0.5 bg-gradient-to-r from-indigo-400/40 to-transparent animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-4 w-0.5 h-8 bg-gradient-to-b from-purple-400/40 to-transparent animate-pulse delay-500"></div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 shadow-2xl animate-gradient-shift">
                      <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {!imageError ? (
                          <img
                            src="/profile-photo.jpg"
                            alt="Raghunandan Bayes "
                            className="w-full h-full object-cover rounded-full"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                            <svg
                              className="w-16 h-16 mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span className="text-sm text-center">
                              Add your photo to
                              <br />
                              public/profile-photo.jpg
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Multiple animated rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border border-indigo-400/30 animate-pulse delay-500"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Raghunandan Bayes
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Sr. Product Manager & Strategic Leader
                    </h4>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>
                        Versatile and seasoned leader with over 8.5 years of business, product and program management experience. Functional expertise in strategy planning, new business development, tactical partnerships, operations, product & program management. Cross-industry experience in payments (issuing, acquiring, processing), e-commerce, digital payments, e-wallet, telco, graphics processing and consumer products. Well versed with Six-Sigma, ISO and TBEM methodologies. My journey spans from foundational work in telecom infrastructure to leading cutting-edge product innovation in payments, OTT streaming, and emerging technologies.
                      </p>
                      <p>
                        My professional journey has been defined by delivering complex, cross-functional initiatives in fast-paced, dynamic environments. At Amazon, I drove operational excellence in the payments ecosystem, managing relationships with partners and banks to resolve payment frictions for millions of transactions. Previously at SonyLIV, I scaled OTT products across 38+ geographies and led a team of 20+ product managers through rapid growth phases.
                      </p>
                      <p>
                        What drives me is the ability to blend strategic vision with hands-on execution. I excel at identifying customer pain points, building data-driven business cases, and implementing solutions that have measurable business impact. From launching products in regulated markets to scaling partnerships with global OEMs, I bring both strategic thinking and operational excellence to every initiative.
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        8.5+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        20+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                       Team Members Led
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Expertise (Business + Technical) */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Business & product capabilities, analytics, and domain expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10">Product Management</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {productManagement.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.name} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{p.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10">Business Analytics</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {businessAnalytics.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.name} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{b.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10">Domain Expertise</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {domainExpertise.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.name} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{d.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10">Program & Operations</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {programOperations.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-500">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
