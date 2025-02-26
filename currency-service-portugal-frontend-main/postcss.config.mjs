/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
     "postcss-import": {},
     "tailwindcss/nesting": {},
     tailwindcss: {},
     autoprefixer: {},
  },
  // normalizeUrl: false,
};

export default config;