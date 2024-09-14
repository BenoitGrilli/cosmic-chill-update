import React from 'react';
import Typewriter from 'typewriter-effect';

function HeroTextAnimation() {
    return (
        <>
            <div className="flex justify-center pt-8 sm:text-8xl text-3xl mb-0 font-medium text-white">
                Welcome to
            </div>
            <h1 className="flex justify-center sm:text-8xl text-3xl mb-4 font-medium text-white" style={{ fontFamily: "'Anton', sans-serif" }}>
                {/* <Typewriter
                    options={{
                        strings: [
                            "COSMIC CHILL",
                            "SPACE",
                            "THE METAVERSE",
                            "YOUR HOME",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                /> */}
            </h1>
        </>
    );
}

export default HeroTextAnimation;
