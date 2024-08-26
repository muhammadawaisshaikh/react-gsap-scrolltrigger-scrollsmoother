import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StaggerBoxes = () => {
    const boxesRef = useRef([]);
    boxesRef.current = [];

    const addToRefs = (el) => {
        if (el && !boxesRef.current.includes(el)) {
            boxesRef.current.push(el);
        }
    };

    useEffect(() => {
        gsap.fromTo(
            boxesRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
        );
    }, []);

    return (
        <div style={styles.container}>
            <h2>Stagger Boxes</h2>
            {[...Array(5)].map((_, i) => (
                <div key={i} ref={addToRefs} style={styles.box}>
                    Box {i + 1}
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '100px',
    },
    box: {
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default StaggerBoxes;
