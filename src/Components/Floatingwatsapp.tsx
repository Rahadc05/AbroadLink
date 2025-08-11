
// WhatsApp SVG Logo (inline)
const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/918606927284?text=Hi%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 transform -translate-y-1/2"
    >
      <div className="bg-blue-900 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.81 11.81 0 0012 0a11.78 11.78 0 00-10 18.29L0 24l6.06-1.9A11.81 11.81 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.03-1.34l-.36-.21-3.6 1.13 1.14-3.52-.23-.37A9.81 9.81 0 1122 12c0 5.51-4.49 10-10 10zm5.28-7.28c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.64.15s-.74.94-.91 1.13c-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.08-.15-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49l-.55-.01c-.2 0-.52.08-.79.37-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.05 2.88 1.2 3.08.15.2 2.06 3.15 4.99 4.42 1.74.75 2.42.81 3.3.68.53-.08 1.7-.69 1.94-1.36.24-.68.24-1.27.17-1.36-.07-.1-.26-.15-.55-.29z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppFloatingButton;
