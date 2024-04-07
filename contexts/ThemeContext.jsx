import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light', // القيمة الافتراضية
  toggleTheme: () => {},
  phoneScreenWidth: 768, // قيمة افتراضية لعرض الهاتف
  tabletScreenWidth: 1024, // قيمة افتراضية لعرض الجهاز اللوحي
  desktopScreenWidth: 1440, // قيمة افتراضية لعرض سطح المكتب
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // حالة لتخزين عرض الشاشة

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // تحديث حالة عرض الشاشة عند تغيير حجم النافذة
    };

    window.addEventListener('resize', handleResize); // استماع لحدث تغيير حجم النافذة

    return () => {
      window.removeEventListener('resize', handleResize); // تنظيف الحدث عند تغيير المكون
    };
  }, []); // للتأكد من تثبيت وإزالة المستمع مرة واحدة فقط

  // تحديد قيم الشاشة بناءً على عرض النافذة الحالي
  const phoneScreenWidth = 768;
  const tabletScreenWidth = 1024;

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, phoneScreenWidth, tabletScreenWidth, screenWidth, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
