import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Custom Hook
const useAos = (options = {}) => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            delay: 500, // default delay
            duration: 1200, // default duration
            once: false, // default behavior
            ...options, // override with custom options
        });

        // Function to handle page load
        const handleLoad = () => {
            // Reinitialize AOS after page load
            setTimeout(() => {
                AOS.refresh();
            }, 500);
        };

        // Add event listener for page load
        window.addEventListener('load', handleLoad);

        // Clean up function
        return () => window.removeEventListener('load', handleLoad);
    }, [options]); // Depend on options to re-run if they change
};

export default useAos;
