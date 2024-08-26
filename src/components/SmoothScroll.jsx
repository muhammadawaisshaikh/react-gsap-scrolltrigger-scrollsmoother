import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = () => {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.5,
            effects: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" style={styles.wrapper}>
            <div id="smooth-content" style={styles.content}>
                {[...Array(10)].map((_, index) => (
                    <div key={index} style={styles.card}>
                        <h2>Card {index + 1}</h2>
                        <p>This is card number {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        height: '100vh',
        overflow: 'hidden',
        marginTop: '30px'
    },
    content: {
        height: '200vh', // Adjust this height to add space for scrolling
        padding: '50px 0',
    },
    card: {
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '0 auto 50px',
        padding: '20px',
        width: '80%',
        maxWidth: '600px',
    },
};

export default SmoothScroll;
