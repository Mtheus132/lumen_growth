/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html"
    ],
  
    darkMode: "class",
  
    theme: {
      extend: {
        colors: {
          "tertiary": "#fdf9f9",
          "surface-dim": "#111415",
          "on-primary-fixed": "#022100",
          "surface-container-high": "#282a2b",
          "inverse-primary": "#106e00",
          "on-primary-fixed-variant": "#095300",
          "primary-fixed-dim": "#2ae500",
          "on-secondary-fixed": "#1c1b1b",
          "surface-variant": "#323536",
          "on-error-container": "#ffdad6",
          "secondary-fixed": "#e5e2e1",
          "primary-fixed": "#79ff5b",
          "on-error": "#690005",
          "surface-container-highest": "#323536",
          "primary": "#efffe3",
          "inverse-surface": "#e1e3e4",
          "surface": "#111415",
          "tertiary-fixed": "#e5e2e1",
          "error": "#ffb4ab",
          "secondary-fixed-dim": "#c9c6c5",
          "on-primary": "#053900",
          "on-secondary": "#313030",
          "error-container": "#93000a",
          "background": "#111415",
          "surface-tint": "#2ae500",
          "on-primary-container": "#107100",
          "surface-container": "#1d2021",
          "on-tertiary": "#313030",
          "tertiary-fixed-dim": "#c8c6c5",
          "on-surface": "#e1e3e4",
          "on-secondary-container": "#bab8b7",
          "surface-bright": "#373a3b",
          "primary-container": "#39ff14",
          "on-tertiary-fixed": "#1c1b1b",
          "tertiary-container": "#e0dddc",
          "inverse-on-surface": "#2e3132",
          "on-secondary-fixed-variant": "#474646",
          "on-tertiary-fixed-variant": "#474746",
          "outline-variant": "#3c4b35",
          "secondary": "#c9c6c5",
          "on-background": "#e1e3e4",
          "on-surface-variant": "#baccb0",
          "surface-container-low": "#191c1d",
          "outline": "#85967c",
          "surface-container-lowest": "#0c0f10",
          "on-tertiary-container": "#626161",
          "secondary-container": "#4a4949"
        },
  
        borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
  
        spacing: {
          "margin-desktop": "64px",
          "margin-mobile": "24px",
          "container-max": "1280px",
          "gutter": "24px",
          "unit": "8px"
        },
  
        fontFamily: {
          "headline-lg": ["Montserrat"],
          "display-lg-mobile": ["Montserrat"],
          "label-md": ["Inter"],
          "body-md": ["Inter"],
          "headline-md": ["Montserrat"],
          "display-lg": ["Montserrat"],
          "body-lg": ["Inter"]
        },
  
        fontSize: {
          "headline-lg": [
            "32px",
            {
              lineHeight: "1.3",
              fontWeight: "700"
            }
          ],
  
          "display-lg-mobile": [
            "40px",
            {
              lineHeight: "1.2",
              fontWeight: "800"
            }
          ],
  
          "label-md": [
            "14px",
            {
              lineHeight: "1.2",
              letterSpacing: "0.05em",
              fontWeight: "600"
            }
          ],
  
          "body-md": [
            "16px",
            {
              lineHeight: "1.6",
              fontWeight: "400"
            }
          ],
  
          "headline-md": [
            "24px",
            {
              lineHeight: "1.4",
              fontWeight: "600"
            }
          ],
  
          "display-lg": [
            "64px",
            {
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              fontWeight: "800"
            }
          ],
  
          "body-lg": [
            "18px",
            {
              lineHeight: "1.6",
              fontWeight: "400"
            }
          ]
        }
      }
    },
  
    plugins: []
  };