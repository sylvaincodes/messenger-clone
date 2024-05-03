const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        xs: '0rem',
        sm: '0rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        'xs': '320px', // => @media (min-width: 320px){ ... }
        'sm': '575px', // => @media (min-width: 575px){ ... }
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "2xl": "1440px",
      },
    },

    colors: {

      // default colors 
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      sky: colors.sky,
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      blue: colors.blue,
      neutral: colors.neutral,

      primary: "#448aff",
      dark: "rgb(30 41 59 / 1)",


    },

    // fonts 
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',

      '4xl': ['2.441rem', {
        fontWeight: '700',
        letterSpacing: '-0.1em',
        lineHeight: '1.3',
      }],

      '5xl': ['3.052rem', {
        fontWeight: '700',
        letterSpacing: '-0.1em',
        lineHeight: '1.2'
      }],
      '6xl': ['5rem', {
        fontWeight: '700',
        letterSpacing: '-0.1em',
        lineHeight: '1'
      }

      ]
    },
    lineHeight: {
      'extra-loose': '2',
    },

    extend: {


      keyframes: {

        "wave": {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

        "updown": {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.2)' },
        }

      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'updown': 'updown 1s linear infinite',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
