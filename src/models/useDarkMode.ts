import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler: () => void = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setMode('light');
      setMountedComponent(true);
    }
    // const mql = window.matchMedia('(prefers-color-scheme: dark)');
    // const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    // if (hasMediaQueryPreference) {
    //   const color = mql.matches ? 'dark' : 'light';
    //   console.log('브라우저 색상 OK : ' + color);
    //   window.localStorage.setItem('color-mode', color);
    //   return color;
    // }
  }, []);
  return { theme, themeToggler, mountedComponent };
};
