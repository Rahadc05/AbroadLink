// Home.tsx
import { useNavigate } from "react-router-dom";

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student - UK",
    feedback: "Abroadlink made my university application process seamless. Their team was supportive and knowledgeable.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "James Anderson",
    role: "Student - Canada",
    feedback: "Thanks to Abroadlink, I received a scholarship and admission to my dream university.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Aisha Khan",
    role: "Student - Australia",
    feedback: "From application to visa, Abroadlink handled everything professionally.",
    image: "/images/testimonial3.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="pt-20 font-libre">

      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
      >
        <p className="text-sm text-gray-600 mb-2">Empowering Dreams Abroad</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Unlock Your Global Education
        </h1>
        <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-gray-900">
          Journey
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto mb-6 text-sm md:text-base">
          Let Abroadlink guide you to top universities worldwide for an enriching academic experience.
        </p>
        <button
          onClick={handleBookAppointment}
          className="bg-indigo-900 text-white px-6 py-4 text-sm font-medium rounded hover:bg-red-700 transition-all"
        >
          Book your appointment
        </button>
      </section>

      {/* Fixed Background Box Section */}
      <section className="flex justify-center py-10 bg-white">
        <div
          className="w-full max-w-6xl h-[500px] bg-center bg-cover shadow-lg overflow-hidden bg-scroll md:bg-fixed"
          style={{
            backgroundImage: "url('/images/mainpicture.png')",
          }}
        >
          <div className="w-full h-full bg-black/20 flex items-center justify-center">
            {/* Optional overlay content */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl bg-white p-7 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="images/pexels-photo-3747474.jpeg"
                alt="Our Journey"
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Abroadlink is a leading college admission agency dedicated to assisting
                students in achieving their study abroad dreams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for global education, Abroadlink has helped countless
                students secure placements in prestigious institutions.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 pt-10">
            <div className="pr-8 md:border-r border-gray-200">
              <p className="text-sm text-gray-500 mb-3">01</p>
              <h3 className="text-lg font-semibold text-gray-900">
                Personalized Guidance
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Receive tailored support at every step of your application process for a
                seamless experience.
              </p>
            </div>
            <div className="px-8 md:border-r border-gray-200">
              <p className="text-sm text-gray-500 mb-3">02</p>
              <h3 className="text-lg font-semibold text-gray-900">
                Global Network
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Access top-tier education opportunities through our extensive network of
                partner universities worldwide.
              </p>
            </div>
            <div className="pl-8">
              <p className="text-sm text-gray-500 mb-3">03</p>
              <h3 className="text-lg font-semibold text-gray-900">
                Scholarship Assistance
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Let us help you secure scholarships and visas to ease your financial burden
                while studying abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-wight-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Why Choose Us?
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tailored Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced team offers personalized guidance to ensure your success in the application process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Global Opportunities
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gain access to a world of educational opportunities tailored to your unique goals and aspirations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Expert Assistance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Benefit from our expertise in securing scholarships and visas to make your study abroad journey hassle-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pexels-photo-5553071.jpeg"
                  alt="Students studying outdoors with laptops and books"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="bg-white py-20">
        <div className="min-h-screen bg-gray-50 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-800 mb-16">Student Testimonials</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
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
                <h2 className="text-5xl font-bold text-gray-800 mb-16">Countries</h2>
                <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
                  <div className="w-24 h-20 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_United_States_Flat_Round-256x256-1-qlvav4vmwnc7iqks3lg6ritn667fili7oa2knfi86g.png" alt="USA Flag" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_Australia_Flat_Round-256x256-1-qlvc6ztsvyusnz23ms7c7y1k1gb8fsi795vlbmjld4.png" alt="Australia Flag" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_United_Kingdom_Flat_Round-256x256-1-qlvc89vw6ulugv775u4244f55c07wyl1rhudu6naw8.png" alt="UK Flag" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_France_Flat_Round-256x256-1-qlvc3mkmec8t29y8atsgsan3eqwvuu4tshpyexjdns.png" alt="Canada Flag" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_Germany_Flat_Round-256x256-1-qlvc4zg89q3ptzz8dex2dyb2as7yz3ivb7n7dbiwo8.png" alt="Germany Flag" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/Flag_of_Ireland_Flat_Round-256x256-1-qlvc8807t6j9tn9xgtasz4w7yk9hhkdl38jevmq38o.png" alt="France Flag" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="max-w-4xl mx-auto text-gray-600 text-base leading-relaxed">
                  <p>
                    An item is considered significant in accounting when its impact can affect decisions. According to professionals,{' '}
                    <button className="text-blue-600 underline hover:text-blue-800 transition-colors">
                      an item is considered material if
                    </button>{' '}
                    its omission or misstatement could change how users interpret financial statements.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-12">
              <p className="text-gray-500">© 2025 Abroad Link</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
