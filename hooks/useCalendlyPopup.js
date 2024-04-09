// CalendlyPopup.js
import { useEffect } from 'react';
import './index.styles.scss'
const useCalendlyPopup = (url) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    const adjustZIndex = () => {
      const calendlyPopup = document.querySelector('.calendly-popup-content');
      if (calendlyPopup) {
        calendlyPopup.style.zIndex = '9999';
      }
    };

    script.onload = () => {
      adjustZIndex();
      // Here you can bind to events or do any other setup required after loading the script
      script.addEventListener('Calendly.event_scheduled', adjustZIndex);
    };

    // Append the Calendly script to the body
    document.body.appendChild(script);

    // This function will be called to clean up when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const showCalendlyPopup = () => {
    // This is the function that can be called to show the Calendly popup
    window.Calendly.initPopupWidget({ url });
    return false;
  };

  // Return the function from the hook so it can be called by the component
  return showCalendlyPopup;
};

export default useCalendlyPopup;
