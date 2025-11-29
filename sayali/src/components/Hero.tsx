import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Raghunandan.Bayes_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 leading-tight px-4 max-w-4xl mx-auto">
            <span className="block">Raghunandan</span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transform scale-[0.75] sm:scale-[0.85] origin-center antialiased font-extrabold">
            Bayes
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8 font-medium">
            VP &amp; Head of Product
          </p>
.
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Seasoned product and program leader with 16+ years of experience driving strategy, business growth, and large-scale product delivery across OTT, Payments, Telco, E-commerce, and Graphics. Currently VP &amp; Head of Product at <span className="font-semibold text-blue-600 dark:text-blue-400">SonyLIV</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "SDLC",
              "Payments",
              "Vendor Management",
              "Service Delivery",
              "Customer Service",
            ].map((highlight) => (
              <span
                key={highlight}
                className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="tel:+919223588466" className="text-gray-700 dark:text-gray-300 font-medium">
              +91-9223588466
            </a>

            <a href="mailto:raghunandan.bayes@gmail.com" className="text-gray-700 dark:text-gray-300 font-medium">
              raghunandan.bayes@gmail.com
            </a>

            <a href="http://in.linkedin.com/in/raghunandanbayes" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 font-medium">
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDownloadResume}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
