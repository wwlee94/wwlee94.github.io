const variables = {
  colors: {
    base: '#121212',
    background: '#21242d',
    color: '#21242d',
    clearBlack: '#000000',
    black: 'rgba(0, 0, 0, 0.87)',
    blackLight: '#313746',
    transparentBlack: 'rgba(0, 0, 0, 0.08)',
    gray: '#727d86',
    silver: '#969fa7',
    whitesmoke: '#f1f4f7',
    clearWhite: '#ffffff',
    highlight: '#20a8ea',
    blue: '#3B71DA',
    red: '#f7615f',
    orange: '#ffa22b',
    gradient: 'linear-gradient(-45deg,#ffa649,#f7645b,#805ed4)',
    transparent: 'transparent',
  },
  sizes: {
    bioWidth: '290px',
    maxWidth: '1200px',
  },
  sideSpace: {
    small: '20px',
    large: '1.5em',
    contentSmall: '20px',
    contentLarge: '2.5em',
  },
  responsive: {
    small: '500px',
    medium: '768px',
    large: '950px',
  },
};

export const darkTheme = {
  ...variables,
  colors: {
    ...variables.colors,
  },
  header: {
    background: variables.colors.blue,
  },
  bio: {
    background: variables.colors.blackLight,
    color: variables.colors.clearWhite,
    highlight: variables.colors.clearWhite,
  },
  category: {
    header: variables.colors.clearWhite,
    color: variables.colors.gray,
    image: variables.colors.blackLight,
  },
  postCard: {
    color: variables.colors.clearWhite,
    highlight: variables.colors.blackLight,
    emoji: variables.colors.blackLight,
  },
};

export const lightTheme = {
  ...variables,
  colors: {
    ...variables.colors,
    base: '#ffffff',
    background: '#f5f5f5', // homepage color
    color: '#21242d',
  },
  header: {
    background: variables.colors.clearWhite,
  },
  bio: {
    background: variables.colors.clearWhite,
    color: variables.colors.black,
    highlight: variables.colors.clearBlack,
  },
  category: {
    header: variables.colors.black,
    color: variables.colors.black,
    image: variables.colors.gradient,
  },
  postCard: {
    color: variables.colors.black,
    highlight: variables.colors.transparentBlack,
    emoji: variables.colors.clearWhite,
  },
};
