/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '2500px',
      },
      backgroundImage: {
        hero: "url('/desktop/generic clips_BG_Static.jpg')",
        web3: "url('/desktop/space1.png')",
        'game-one': "url('/desktop/optimized/space4.1_PNG.png')",
        'game-two': "url('/desktop/optimized/multiplayer_BG_PNG.png')",
        'game-three': "url('/desktop/optimized/arcade_PNG.png')",
        'galaxy-games': "url('/desktop/optimized/space3_website_PNG.png')",
        roadmap: "url('/desktop/optimized/striscia_Roadmap.png')",
      },
      backgroundColor: {
        primary: '#01001e',
      },
      backgroundPosition: {
        'bottom-custom': 'center 90%', // Adjust '80%' to your desired value
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
        'exo-bold': ['Exo', 'sans-serif'],
        'exo-extraBold': ['Exo', 'sans-serif'],
        'exo-semiBold': ['Exo', 'sans-serif'],
        'exo-medium': ['Exo', 'sans-serif'],
        'chakra-medium': ['ChakraPetch', 'sans-serif'],
        'exo-regular': ['Exo', 'sans-serif'],
        'myRiad-regular': ['MyriadPro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
