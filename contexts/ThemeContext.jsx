import React, { createContext, useContext, useState, useEffect } from 'react';

// تعريف القيم الافتراضية لأحجام الشاشات
const phoneScreenWidth = 768;
const tabletScreenWidth = 1024;
const desktopScreenWidth = 1440;

const ThemeContext = createContext({
  theme: 'light', // القيمة الافتراضية للثيم
  toggleTheme: () => {}, // وظيفة تغيير الثيم
  screenWidth: null, // القيمة الابتدائية لعرض الشاشة
  phoneScreenWidth, // عرض الهاتف
  tabletScreenWidth, // عرض الجهاز اللوحي
  desktopScreenWidth, // عرض سطح المكتب
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [screenWidth, setScreenWidth] = useState(null); // تهيئة بقيمة null

  useEffect(() => {
    // تحديث عرض الشاشة بعد تحميل الصفحة
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth); // تحديث عرض الشاشة عند تغيير حجم النافذة
    };

    window.addEventListener('resize', handleResize); // استماع لحدث تغيير حجم النافذة

    return () => {
      window.removeEventListener('resize', handleResize); // تنظيف الحدث عند تغيير المكون
    };
  }, []); // فارغة لضمان التنفيذ مرة واحدة فقط

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{
      theme, 
      screenWidth, 
      toggleTheme, 
      phoneScreenWidth, 
      tabletScreenWidth, 
      desktopScreenWidth
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
