type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  details?: string;
  highlights?: string[];
};

const education: EducationItem[] = [
  {
    degree: "B.Tech (Electronics & Telecommunication)",
    institution: "College of Engineering, Pune (COEP)",
    year: "2009",
    details: "CGPA: 8.81/10 (88.10%), Ranked 4th in university",
    highlights: [
      "Sponsored projects on Parallel Computing on Cryptanalysis and Cryptography on renowned supercomputer",
      "Low cost prototype of MIMIO - Digi-Sketching Framework by MIT, USA",
      "Training & Placement Student Associate for 2008-2009",
    ],
  },
  {
    degree: "Diploma (Electronics & Communication)",
    institution: "MSBTE",
    year: "2007",
    details: "Secured 88.64%, Ranked 3rd in state merit list",
    highlights: [],
  },
  {
    degree: "PMP Contact Hours",
    institution: "Indian Institute of Management, Kozhikode (IIMK)",
    year: "2014",
    details: "Project Management Professional Contact Hours",
    highlights: [],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational background and qualifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div
              key={`${edu.institution}-${edu.year}`}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.details}</p>
                  )}
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Highlights</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
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

export default Education;
