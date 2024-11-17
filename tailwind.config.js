/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7d2ae8', // Custom purple color for the button
      },
      animation: {
        greentopBubbles: 'greentopBubbles 0.6s ease', // Top bubbles animation
        greenbottomBubbles: 'greenbottomBubbles 0.6s ease', // Bottom bubbles animation
      },
      keyframes: {
        greentopBubbles: {
          '0%': {
            backgroundPosition: `5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%`,
          },
          '50%': {
            backgroundPosition: `0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%`,
          },
          '100%': {
            backgroundPosition: `0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%`,
            backgroundSize: `0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
          },
        },
        greenbottomBubbles: {
          '0%': {
            backgroundPosition: `10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%`,
          },
          '50%': {
            backgroundPosition: `0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%`,
          },
          '100%': {
            backgroundPosition: `0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%`,
            backgroundSize: `0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
          },
        },
      },
    },
  },
  plugins: [],
};
