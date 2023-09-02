/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js.ts}"],
  theme: {
    // screens:{
    //   'xl':{'max': '992px'},
    //   'lg':{'max': '892px'},
    //   'md':{'max': '768px'},
    //   'sm':{'max': '650px'},
    //   'xs':{'max': '480px'},
    //   'xxs':{'max': '380px'},
    // },
    extend: {
      colors: {
        "basic-black": "#1d2024",
        "bright-basic-black": "#1f2326",
        "basic-orange": "#f37515",
      },
    },
  },
  plugins: [],
};
