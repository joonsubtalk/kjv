import React, { useState, useCallback, useEffect } from 'react';

function Shard({loc}) {
    const style= {
        transition: 'all ease .2s',
        transform: `translate(${loc.x/50}px,${loc.y/25}px)`
    }
    return (
        <div className="shard" style={style}></div>
    )
}

function Hero() {
    // State for storing mouse coordinates
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ w: 0, h: 0 });

    const mouseHandler = (evt) => {
        setCoords({ x: evt.clientX, y: evt.clientY });
    }

    const resizeHandler = () => {
        const width = window.innerWidth || document.body.clientWidth;
        const height = window.innerHeight || document.body.clientHeight;
        setSize({w: width, h: height });
    }

    const throttle = (callback, interval) => {
        let enableCall = true;

        return function (...args) {
            if (!enableCall) return;

            enableCall = false;
            callback.apply(this, args);
            setTimeout(() => enableCall = true, interval);
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', throttle(mouseHandler, 150));
        window.addEventListener('resize', throttle(resizeHandler, 150));
        resizeHandler();
        return () => {
            window.removeEventListener('mousemove', mouseHandler);
            window.removeEventListener('mousemove', resizeHandler);
        }
    }, [])

    const kickStyle={
        transition: 'all ease .2s',
        transform: `translate(${coords.x/100}px,${coords.y/50}px)`
    }

    return (
        <section className="hero">
            <div className="hero__container">
                this is hero
                The mouse position is ({coords.x}, {coords.y})
                The browser is ({size.w}, {size.h})
                <div className="hero__shards">
                    <Shard loc={coords}/>
                </div>
                <img className="hero__kicker" src="/assets/images/kick.png" style={kickStyle} alt="high kick" />
                <img className="hero__crack" src="/assets/images/crack.png" alt="crack" />
            </div>
        </section>
    );
}
export default Hero;