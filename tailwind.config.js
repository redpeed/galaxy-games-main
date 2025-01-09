/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '2500px',
      },
      backgroundImage: {
        hero: "url('https://cdn.hauntedspace.io/galaxy-games/generic%20clips_BG_Static.jpg')",
        web3: "url('https://cdn.hauntedspace.io/galaxy-games/space1.png')",
        'game-one': "url('https://cdn.hauntedspace.io/galaxy-games/space4.1_PNG.png')",
        'game-two': "url('https://cdn.hauntedspace.io/galaxy-games/multiplayer_BG_PNG.png')",
        'game-three': "url('https://cdn.hauntedspace.io/galaxy-games/arcade_PNG.png')",
        'galaxy-games': "url('https://cdn.hauntedspace.io/galaxy-games/space3_website_PNG.png')",
        roadmap: "url('https://cdn.hauntedspace.io/galaxy-games/striscia_Roadmap.png')",
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
