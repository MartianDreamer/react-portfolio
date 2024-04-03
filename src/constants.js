export const Theme = {
  LIGHT: {
    color1: "#99C2FF",
    color2: "#E6EFFF",
    color3: "#CCDFFF",
    textColor: "#0E0113",
    themeIcon: "\uf185",
    buttonColor: "#0E0113",
  },
  DARK: {
    color1: "#0E0113",
    color2: "#252336",
    color3: "#454266",
    textColor: "#E6EFFF",
    themeIcon: "\uf186",
    buttonColor: "#E6EFFF",
  },
  switch(theme) {
    if (theme === Theme.DARK) {
      return Theme.LIGHT;
    } else {
      return Theme.DARK;
    }
  },
};
