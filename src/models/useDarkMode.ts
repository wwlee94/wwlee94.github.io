import { useState } from 'react';

// 초기화 작업
const getInitTheme = () => {
  let initTheme = 'light';

  if (typeof window !== 'undefined') {
    // 브라우저 테마 정보 확인
    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 사용자가 테마 설정을 직접 지정한 테마가 있는지 확인
    const localSettingTheme = localStorage.getItem('theme');

    // 브라우저 다크 테마가 있다면 다크 테마로 지정
    if (isBrowserDarkMode && !localSettingTheme) initTheme = 'dark';
    // 지정한 테마가 존재한다면 해당 테마로 설정
    else if (localSettingTheme) initTheme = localSettingTheme;
  }

  return initTheme;
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState(getInitTheme());

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler: () => void = () => {
    const isDark = theme === 'light' ? false : true;
    if (isDark) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }

    theme === 'light' ? setMode('dark') : setMode('light');
  };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const localTheme = window.localStorage.getItem('theme');
  //     localTheme ? setTheme(localTheme) : setMode('light');

  //     const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     if (isBrowserDarkMode) {
  //       const color = isBrowserDarkMode ? 'dark' : 'light';
  //       window.localStorage.setItem('theme', color);
  //     }
  //   }
  // }, []);
  return { theme, themeToggler };
};
