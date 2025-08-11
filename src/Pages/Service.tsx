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
    const navigate = useNavigate(); // ✅ now inside component

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
    };
  return (
    <>
    <div className="max-w-7xl mx-auto py-40 space-y-24">
      {services.map((service) => (
        <div
          key={service.number}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b-2 border-gray-200 pb-8"
        >
          <div className="md:w-2/3">
            <span className="text-sm font-semibold text-indigo-700">{service.number}</span>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900">{service.title}</h2>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
          <div className="md:w-1/3 flex md:justify-end">
            <img
              src={service.imgSrc}
              alt={service.alt}
              className="rounded-md object-cover w-[330px] h-[250px] shadow"
            />
          </div>
        </div>
      ))}
    </div>
     <section className="relative flex items-center justify-center py-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/mainpicture.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white">Start Your Journey Today</h2>
          <p className="text-white">Contact Abroadlink now and let us help you turn your study abroad dreams into a thrilling reality!</p>
          <div className="mt-6">
            <button onClick={handleContactClick} className="bg-blue-900 hover:bg-red-700 text-white px-6 py-3 rounded">Explore More</button>
          </div>
        </div>
      </section>
        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Abroad Link
        </p>
    </>
    
  );
};

export default Service;
