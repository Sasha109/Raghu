type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  role?: string;
  description?: string;
  responsibilities?: string[];
  keyProjects?: string[];
};

const experience: ExperienceItem[] = [
  {
    title: "Vice President - Head of Product",
    company: "SONYLIV",
    period: "SEPT 2020 – Present",
    role: "Product Strategy & Subscription Growth",
    description:
      "Overseeing product strategy and subscription growth for SonyLIV OTT across 38+ geographies.",
    responsibilities: [
      "Overseeing product strategy & subscription growth for SonyLIV OTT across 38+ geographies",
      "Part of SonyLIV 2.0 product launch with 20x business growth in 2 years",
      "Propelled 10x user growth on subscriptions in India and International",
      "Defined and articulated clear product roadmaps and goals",
      "Hired, coached and empowered a customer-centric team of 20+ elite product managers",
      "Spearheaded 52+ partnerships on B2B2C engagements with diverse integrations",
    ],
    keyProjects: [
      "Launched OTT products in 28+ countries including highly regulated geographies",
      "Improved PlayStore rating from 3.9 to 4.3",
      "Partnerships with OEMs like Sony, Samsung, MI, Vidaa for affiliate services",
    ],
  },
  {
    title: "Senior Program Manager",
    company: "AMAZON INDIA",
    period: "JUN 2015 – SEPT 2020",
    role: "Payment Partner Engagement",
    description:
      "As a Program Manager ensuring smooth processing of billions of secure online transactions via multiple payment mechanisms.",
    responsibilities: [
      "Responsible for driving operational excellence in payment model. Partner with internal customers to identify points of friction and advocate for customer experience improvement projects",
      "Relationship management with external payment partners to drive business excellence",
      "Serve as a hands-on analyst, resolving escalations, gathering data and driving projects to completion",
      "Draft Business cases, BRDs/ORDs, project plans, define schedules & milestones and project closure documents",
      "Work with team across the globe to drive business projects and get them delivered on time",
      "Vendor management taking care of on-boarding, BAU, invoicing and contractual commitments",
    ],
    keyProjects: [
      "Enabled smooth processing of 1B+ secure online transactions with 99.9%+ reliability",
      "Built Amazon Pay ecosystem with 5Mn+ early adoption",
      "Improved refund success rate to 99.5%+ with improved TAT (T+7 to T+2)",
      "Facilitated ISO certifications and developed internal lead auditor team",
    ],
  },
  {
    title: "Program Manager",
    company: "NVIDIA CORPORATION",
    period: "MAR 2013 – JUN 2015",
    role: "Mobile & GPU Units - Tegra Business",
    description:
      "Technical Program Manager, leading NVIDIA business in mobile & GPU units and managing multiple market, customer & partner driven projects.",
    responsibilities: [
      "Oversee Project Coordination to manage the portfolio of projects",
      "Requirements gathering, evaluate project needs & define projects",
      "Draft project plans, schedules, milestones and deliverables in accordance with delivery/production timelines",
      "Work closely with cross functional teams across the globe",
      "Continual risk evaluation & implement risk management plans",
    ],
    keyProjects: [
      "Shipped early Tegra devices on Android I, J and K versions on consumer handheld and connected TVs",
      "Managed complete SDLC & end to end responsibility of software product delivery",
    ],
  },
  {
    title: "Program Manager (Enterprise Business)",
    company: "TATA TELE SERVICES",
    period: "AUG 2009 – FEB 2013",
    role: "Project Planning & Deployment",
    description:
      "End to end responsibility of project planning & deployment for telecom solutions especially for Enterprise customers.",
    responsibilities: [
      "Responsible for end to end rollout of all terrestrial Voice and Data projects",
      "Gather project requirements from customers and Business Managers",
      "Craft feasible solutions with available infrastructure & resources",
      "Work on discrete schedules, project costing & project plans",
      "Analyze customer feedbacks & device project improvement plans",
    ],
    keyProjects: [
      "Deployed wireless desk phones, V-Data, CMO, BRIs, PRIs, EPABX solutions",
      "Implemented MPLS, NPLS, P2P links for enterprise customers",
    ],
  },
];
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                  {exp.role && (
                    <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                  )}
                </div>
                <div>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {exp.description && (
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>
              )}

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Responsibilities</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((r, i) => (
                      <li className="flex items-start" key={i}>
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Projects</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.keyProjects.map((k, i) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
