import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 100, fontSize: '20px' },
            {
                opacity: 1,
                y: 0,
                fontSize: '50px', // Target font size on scroll
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    scrub: true,
                },
                duration: 1,
            }
        );
    }, []);

    return (
        <section ref={sectionRef} style={styles.section}>
            Scroll to animate this section
        </section>
    );
};

const styles = {
    section: {
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        fontSize: '20px', // Initial font size
        transition: 'font-size 0.3s ease',
    },
};

export default ScrollAnimation;