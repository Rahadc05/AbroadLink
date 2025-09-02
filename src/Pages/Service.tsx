import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Admissions Assistance",
    description:
      "Our team offers expert guidance and assistance in navigating college admissions, securing scholarships, and acquiring visas to ensure a seamless process for our clients.",
    imgSrc: "/images/pexels-photo-5555113.jpeg",
    alt: "Student with files outside university",
  },
  {
    number: "02",
    title: "University Selection",
    description:
      "We help students choose the right university from our global network of institutions that align with their academic and personal ambitions, ensuring a rewarding educational experience.",
    imgSrc: "/images/pexels-photo-9158362.jpeg",
    alt: "Student holding stack of books in library",
  },
  {
    number: "03",
    title: "Cultural Immersion",
    description:
      "We provide pre-departure orientation sessions and continuous assistance to help students adapt to their new environment, ensuring a smooth transition and enriching cultural immersion.",
    imgSrc: "/images/pexels-photo-9158767.jpeg",
    alt: "Student holding stack of books in library",
  },
  {
    number: "04",
    title: "Career Development",
    description:
      "Offering career counseling and networking opportunities, we ensure students are well-equipped for post-study career opportunities through personalized guidance and support.",
    imgSrc: "/images/pexels-photo-3186386.jpeg",
    alt: "Student holding stack of books in library",
  },
];

const Service: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <>
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-40 sm:py-40 space-y-16">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } md:items-center md:justify-between gap-6 border-b border-gray-200 pb-8`}
          >
            {/* Text Section */}
            <div className="md:w-2/3">
              <span className="text-sm font-semibold text-indigo-700">
                {service.number}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
                {service.title}
              </h2>
              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img
                src={service.imgSrc}
                alt={service.alt}
                className="rounded-md object-cover w-full sm:w-[330px] h-[220px] sm:h-[250px] shadow"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section
        className="relative flex items-center justify-center py-20 sm:py-28 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mainpicture.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Start Your Journey Today
          </h2>
          <p className="mt-3 sm:mt-4 text-white text-sm sm:text-base">
            Contact Abroadlink now and let us help you turn your study abroad
            dreams into a thrilling reality!
          </p>
          <div className="mt-6">
            <button
              onClick={handleContactClick}
              className="bg-blue-900 hover:bg-red-700 transition-colors text-white px-5 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Abroad Link
      </p>
    </>
  );
};

export default Service;
