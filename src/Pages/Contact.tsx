import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Landmark,
  Facebook,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+91 8590258119'],
      action: 'Call us directly',
      link: 'tel:+918590258119',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['theabroadlink@gmail.com'],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address 1 (Head office)',
      details: ['62/5011, Iyyattil Junction, Hospital Road, Ernakulam-682011'],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address 2 (Hilite business park)',
      details: ['Phase1, 3rd floor, Calicut-Pin.673014'],
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: 'Landmark',
      details: ['Calicut, Abacus tower, First floor'],
    },
  ];

  return (
    <div style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      {/* Contact Form & Info */}
      <section className="py-40 bg-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10">
            Get in Touch
            <span className="bg-gradient-to-r text-red-800 bg-clip-text">
              Today
            </span>
          </h1>

          <p className="text-xl bg-gradient-to-r to-blue-400 bg-clip-text">
            Reach out to our friendly team for all your study abroad queries and assistance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect with Us</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below
                </p>

                <form
                  action="https://formsubmit.co/theabroadlink@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900"
                        placeholder="your@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900"
                      placeholder="Tell us about your study abroad needs and how we can assist you"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-blue-900 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    Submit
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        {info.link && info.action && (
                          <a
                            href={info.link}
                            className="text-sm text-blue-900 font-semibold mt-2 hover:text-blue-700 transition-colors duration-300"
                          >
                            {info.action}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
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
          <div className="mt-8">
             <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-800 text-white rounded-full hover:bg-pink-700 transition-all duration-300"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
          </div>
        </div>
      </section>
        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Abroad Link
        </p>
      </div>
  );
};

export default Contact;
