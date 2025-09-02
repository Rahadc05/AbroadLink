import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Service Data
const services = [
  {
    title: "Admissions Assistance",
    description: "Personalized support for college applications, scholarship, and visa processes.",
    image: "/images/pexels-photo-518244.jpeg",
  },
  {
    title: "University Selection",
    description: "Guidance in selecting the ideal university based on individual goals and aspirations.",
    image: "/images/pexels-photo-3186386.jpeg",
  },
  {
    title: "Cultural Immersion",
    description: "Facilitate cultural integration through pre-departure orientation and ongoing support.",
    image: "/images/pexels-photo-7972506.jpeg",
  },
];

// Page Animation Variants
const pageVariants = {
  initial: { opacity: 0, y: 900 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};
const pageTransition = { duration: 0.6, 
  ease: "easeOut" as const};

const Home = () => {
  const navigate = useNavigate();

  // Navigate to Contact Page
  const handleBookAppointment = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.main
      className="pt-20 font-libre"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat px-4"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
        aria-label="Hero Section"
      >
        <p className="text-xs sm:text-sm text-gray-600 mb-2">Empowering Dreams Abroad</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
          Unlock Your Global Education
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-gray-900">
          Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-xs sm:text-sm md:text-base">
          Let Abroadlink guide you to top universities worldwide for an enriching academic experience.
        </p>
        <button
          onClick={handleBookAppointment}
          className="bg-indigo-900 text-white px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium rounded hover:bg-red-700 transition-all"
          aria-label="Book Your Appointment"
        >
          Book your appointment
        </button>
      </section>

      {/* Main Feature Image Box */}
      <section className="flex justify-center py-8 sm:py-10 bg-white px-4">
        <div
          className="w-full max-w-6xl h-[250px] sm:h-[400px] md:h-[500px] bg-center bg-cover shadow-lg overflow-hidden rounded-lg"
          style={{ backgroundImage: "url('/images/mainpicture.png')" }}
          aria-label="Main Feature"
        >
          <div className="w-full h-full bg-black/20 flex items-center justify-center"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="border border-gray-300 rounded-xl bg-white p-5 flex flex-col hover:shadow-lg transition-shadow"
                aria-label={service.title}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/pexels-photo-3747474.jpeg"
                alt="Our Journey"
                className="rounded-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                Abroadlink is a leading college admission agency dedicated to assisting students in achieving their study abroad dreams.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Founded with a passion for global education, Abroadlink has helped countless students secure placements in prestigious institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
              <ul>
                {[
                  {
                    title: "Tailored Support",
                    desc: "Our experienced team offers personalized guidance to ensure your success in the application process."
                  },
                  {
                    title: "Global Opportunities",
                    desc: "Gain access to a world of educational opportunities tailored to your unique goals and aspirations."
                  },
                  {
                    title: "Expert Assistance",
                    desc: "Benefit from our expertise in securing scholarships and visas to make your study abroad journey hassle-free."
                  }
                ].map((item, i) => (
                  <li key={i} className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pexels-photo-5553071.jpeg"
                  alt="Students studying outdoors"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="bg-white py-20" aria-label="Student Testimonials">
        <div className="bg-gray-50 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-800 mb-8">Student Testimonials</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div className="text-left">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Thanks to Abroadlink's support, I got accepted into my dream university! Their guidance was invaluable. Highly recommended.
                  </p>
                  <p className="text-gray-500 font-medium">Your student name</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Abroadlink made my study abroad process smooth and stress-free. I'm grateful for their expertise and assistance throughout.
                  </p>
                  <p className="text-gray-500 font-medium">Your student name</p>
                </div>
              </div>
            </div>

            {/* Countries Section */}
            <div className="bg-blue-50 rounded-3xl py-16 px-8">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-800 mb-8">Countries</h2>
                <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
                  {[
                    { src: "/images/Flag_of_United_States_Flat_Round-256x256-1-qlvav4vmwnc7iqks3lg6ritn667fili7oa2knfi86g.png", alt: "USA Flag" },
                    { src: "/images/Flag_of_Australia_Flat_Round-256x256-1-qlvc6ztsvyusnz23ms7c7y1k1gb8fsi795vlbmjld4.png", alt: "Australia Flag" },
                    { src: "/images/Flag_of_United_Kingdom_Flat_Round-256x256-1-qlvc89vw6ulugv775u4244f55c07wyl1rhudu6naw8.png", alt: "UK Flag" },
                    { src: "/images/Flag_of_France_Flat_Round-256x256-1-qlvc3mkmec8t29y8atsgsan3eqwvuu4tshpyexjdns.png", alt: "France Flag" },
                    { src: "/images/Flag_of_Germany_Flat_Round-256x256-1-qlvc4zg89q3ptzz8dex2dyb2as7yz3ivb7n7dbiwo8.png", alt: "Germany Flag" },
                    { src: "/images/Flag_of_Ireland_Flat_Round-256x256-1-qlvc8807t6j9tn9xgtasz4w7yk9hhkdl38jevmq38o.png", alt: "Ireland Flag" },
                  ].map((flag, idx) => (
                    <div key={idx} className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                      <img src={flag.src} alt={flag.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="max-w-4xl mx-auto text-gray-600 text-base leading-relaxed">
                  <p>
                    An item is considered significant in accounting when its impact can affect decisions.
                    According to professionals, <span className="text-blue-600 underline hover:text-blue-800 transition-colors">an item is considered material if</span>{" "}
                    its omission or misstatement could change how users interpret financial statements.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center mt-12">
              <p className="text-gray-500">© 2025 Abroad Link</p>
            </footer>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
