import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RotateBox = () => {
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.to(boxRef.current, {
            rotation: 360,
            duration: 2,
            repeat: -1, // Repeat indefinitely
            ease: 'linear'
        });
    }, []);

    return (
        <div style={styles.container}>
            <h1>Rotate Box</h1>
            <div ref={boxRef} style={styles.box}>Rotate Me!</div>
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
        backgroundColor: 'tomato',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '100px auto',
    },
};

export default RotateBox;
