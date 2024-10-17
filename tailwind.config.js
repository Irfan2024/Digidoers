/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,php}",
    "./templates/*.{html,js,php}",
    "./templates-parts/*.{html,js,php}",
    "functions.php",
    "header.php",
    "footer.php",
    "single-project.php",
    "single-team-member.php"
  ],
  theme: {
    extend: {
      fontFamily: {
        verb: 'verb, san-serif',
        minion: 'verb, serif',
      },
      colors: {
        kpgrey: '#231f20',
        kpblue: '#0063a3',
        kphoverblue: '#1857a6',
        'kp-light-blue': '#80c5eb',
        'transparent-black': 'rgba(0,0,0,.0001)',
      },
      backgroundImage: {
        'arrow': "url('images/icon-bluearrow.svg')",
        'arrow-white': "url('images/link-static-arrow-white.svg')",
        'arrow-blue': "url('images/link-static-arrow-blue.svg')",
        'listing-checkmark': "url('images/listing-checkmark.svg')",
      },
      width: {
        '30\%': '30%',
        '70\%': '70%',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1650px',
      // => @media (min-width: 1650px) { ... }

      '4xl': '1921px',
      // => @media (min-width: 1921px) { ... }
    }
  },
  plugins: [],
}