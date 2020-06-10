import { useState } from 'react';

export const useTheme = () => {
  const setMode = (mode: any) => {
    // 테마정보 변경하면 localstorage 에 저장해 다음에도 지정한 값으로 테마가 보이도록 설정
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  let initTheme!: string;
  if (typeof window !== 'undefined') {
    // 브라우저 테마 정보 확인
    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 사용자가 테마 설정을 직접 지정한 테마가 있는지 확인
    const localSettingTheme = localStorage.getItem('theme');

    // 지정한 테마가 존재한다면 해당 테마로 설정 없으면 브라우저 기본 설정 테마로 세팅
    if (isBrowserDarkMode && !localSettingTheme) {
      initTheme = 'dark';
    } else if (localSettingTheme) {
      initTheme = localSettingTheme;
    } else {
      initTheme = 'dark';
    }
  }
  const [theme, setTheme] = useState(initTheme);

  return { themeMode: theme, toggleTheme };
};
