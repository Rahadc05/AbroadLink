import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicySections = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // change route if needed
  };

  const sections = [
    {
      icon: (
        <svg className="w-8 h-8 mx-auto fill-black" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      title: 'Information we Collect',
      description:
        'We collect personal information such as your name, email, phone number, date of birth, academic records, passport details, preferred study destination, and any other information submitted through forms or consultations. We also automatically collect data like IP address, browser type and version, device type, pages visited, time spent, cookies, and tracking data.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'How We Use Your Information',
      description:
        'We use your information to offer admission guidance, respond to inquiries, process applications, improve our services, send updates and offers (if opted-in), and comply with legal requirements.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Sharing and Disclosure',
      description:
        'We may share your data with partner institutions, service providers, legal authorities, and internal staff, but we do not sell your personal information to third parties.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 12l2 2 4-4m5-6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h1V4a3 3 0 116 0v2h1z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Data Security',
      description:
        'We protect your data using SSL, access controls, passwords, and encryption where applicable.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Your Rights',
      description:
        'You may access, correct, delete, or withdraw consent for your data at any time by contacting us at admin@theabroadlink.com.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Cookies Policy',
      description:
        'We use cookies to enhance user experience and track traffic, which you can disable via browser settings at your discretion.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Links to Third-Party Sites',
      description:
        'We are not responsible for the content or privacy practices of external sites linked from our website.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2l-7 7-3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Children's Privacy",
      description:
        'Our services are not intended for children under 13, and we do not knowingly collect their data without parental consent.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 mx-auto fill-black"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M22 6l-10 7L2 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: 'Contact Us',
      description:
        'For questions, contact The AbroadLink at admin@abroadlink.com, Hilite Business Park, Phase 1, 3rd Floor, Calicut, Pin: 673014.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Libre Franklin", sans-serif' }}>
      {/* Header with 5 Stars */}
      <div className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 space-x-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 fill-black" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Privacy 
             <span className="bg-gradient-to-r text-red-800 bg-clip-text">
              Policy
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect and handle your information.
          </p>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">{section.icon}</div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{section.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">{section.description}</p>
          </div>
        </div>
      ))}

      {/* Footer Section */}
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
    </div>
  );
};

export default PrivacyPolicySections;
