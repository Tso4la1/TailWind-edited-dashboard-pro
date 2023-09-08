/** @type {import('tailwindcss').Config} */
export default {
  content: [  
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      'colors': {
        'userTabDetails': 'hsl(246, 80%, 60%)',
        'userCalendar' : 'hsl(235, 46%, 20%)',
        'userTimerListDetails': 'hsl(235, 46%, 20%)',
        'smallLetters': 'rgb(182, 172, 245)'
      }
    },
  },
  plugins: [],
}

