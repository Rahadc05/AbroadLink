import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate(); // ✅ now inside component

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/offerings");
  };

  return (
    <>
      <main
        className="min-h-screen bg-white text-slate-900"
        style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      >
        <section className="max-w-6xl mx-auto px-6 py-40">
          {/* Hero section */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Your Gateway to Global Education
            </h1>
          </header>

          <header className="mb-10">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-semibold mb-6 leading-tight text-slate-900">
              Abroadlink is a leading college admission agency specializing in study abroad opportunities.
            </h1>

            <div className="mt-6 grid md:grid-cols-2 gap-6 text-slate-600">
              <p>
                With years of experience, our team provides personalized guidance and support to students throughout the application process. We excel in selecting the perfect institution, securing scholarships, and facilitating visa applications.
              </p>
              <p>
                Abroadlink has successfully served thousands of students, helping them achieve academic excellence and cultural enrichment through studying abroad.
              </p>
            </div>
          </header>

          {/* Hero image */}
          <div className="w-full flex justify-center mb-10">
            <div className="w-full md:w-[900px] lg:w-[1100px]">
              <img
                src="/images/pexels-photo-1708988.jpeg"
                alt="Students listening in seminar"
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Features row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-10">
            <article className="flex flex-col">
              <div className="text-sm text-slate-400 font-medium mb-3">01</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
              <p className="text-slate-600">
                Receive tailored support at every step of your application process for a seamless experience.
              </p>
            </article>

            <article className="flex flex-col">
              <div className="text-sm text-slate-400 font-medium mb-3">02</div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-slate-600">
                Access top-tier education opportunities through our extensive network of partner universities worldwide.
              </p>
            </article>

            <article className="flex flex-col">
              <div className="text-sm text-slate-400 font-medium mb-3">03</div>
              <h3 className="text-xl font-semibold mb-2">Scholarship Assistance</h3>
              <p className="text-slate-600">
                Let us help you secure scholarships and visas to ease your financial burden while studying abroad.
              </p>
            </article>
          </div>
        </section>
      
      

      {/* Call-to-action section */}
      <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-1 space-y-16">
        
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <h3 className="md:w-1/4 text-xl font-semibold text-gray-900">Our Vision</h3>
          <p className="md:w-3/4 text-gray-600 text-lg">
            To be the premier global education gateway, connecting students with top universities worldwide.
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <h3 className="md:w-1/4 text-xl font-semibold text-gray-900">Our Mission</h3>
          <p className="md:w-3/4 text-gray-600 text-lg">
            Our mission is to empower students to pursue their academic goals by providing personalized support 
            and guidance in their journey towards studying abroad.
          </p>
        </div>

      </div>
    </section>
    </main>
      <section
        className="relative flex items-center justify-center py-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mainpicture.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white">Start Your Journey Today</h2>
          <p className="text-white">
            Contact Abroadlink now and let us help you turn your study abroad dreams into a thrilling reality!
          </p>
          <div className="mt-6">
            <button
              onClick={handleContactClick}
              className="bg-blue-900 hover:bg-red-700 text-white px-6 py-3 rounded"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      <p className="text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Abroad Link
      </p>
    </>
  );
};

export default AboutPage;
