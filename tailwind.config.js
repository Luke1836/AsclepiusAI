const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        basic: ["Basic", sans-serif],
        roboto: ["Roboto Flex", sans-serif],
        noto: ["Noto Sans", sans-serif],
        dmSerif: ["DM Serif Text", serif],
      },
    },
  },
  plugins: [],
};

export default config;