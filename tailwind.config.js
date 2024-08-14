/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"488px",
      md:"760px",
      lg:"1024px"
    },
    extend: {
      colors: {
        primaryColor: "#010A5E",
        primaryColorLight: "#010D78",
        secondaryColor: "#FFCC00",
        pargraphColor:"#C0C0C0",
        whiteColor:"#FFFFFF",
        blackColor:"#000000",
        greenColor:"#007936",
        redColor: "#CC3433",
        darkColor:"#000",
        darkColorLight: "#171717"
        
      },
      keyframes: {
        move:{
          "50%": {transform: "translateY(-1rem)"}
        }
      },
      animation:{
        "movingY":"move 2s linear infinite"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT:"1rem",
        sm:"1.5rem"
      }
    },
    fontFamily:{
      oswald:["Oswald", "sans-serrif"],
      dmsans: ["DM Sans", "sans-seriff"]
    },
  },
  plugins: [],
}

