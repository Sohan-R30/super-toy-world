import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    offset: 100,
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
    mirror: true,
    disable: false,
    startEvent: 'DOMContentLoaded'
});

export default AOS;