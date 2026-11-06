/**
 * LeadZam — Tailwind Configuration (js/tailwind-config.js)
 * External configuration for Tailwind CDN.
 */
if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        },
        colors: {
          brand: {
            DEFAULT: '#1264F5',
            hover: '#0B52D4',
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            500: '#1264F5',
            600: '#0F52CC',
            700: '#0B3E9E',
          },
          "brand-hover": '#0B52D4',
          slate: {
            850: '#0F172A',
            900: '#0B132B',
          }
        }
      }
    }
  };
  var tailwind = window.tailwind;
}
