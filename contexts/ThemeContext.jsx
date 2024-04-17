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
});``

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children ,theme }) => {
  const [screenWidth, setScreenWidth] = useState(null); // تهيئة بقيمة null
 
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth); // يطبع قيمة window.innerWidth بعد تحميل المكون أو تغيير حجم النافذة
      setScreenWidth(window.innerWidth);
    };
  
    handleResize(); // نداء الدالة مباشرة لتعيين القيمة الأولية
    window.addEventListener('resize', handleResize); // استماع لحدث تغيير حجم النافذة
  
    return () => {
      window.removeEventListener('resize', handleResize); // تنظيف الحدث عند تغيير المكون
    };
  }, []);



  return (
    <ThemeContext.Provider value={{
      theme, 
      screenWidth, 
      phoneScreenWidth, 
      tabletScreenWidth, 
      desktopScreenWidth
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
