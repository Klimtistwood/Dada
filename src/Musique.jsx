import React from 'react';
import AudioSpectrum from 'react-audio-spectrum';

function Music() {

    const audio = <audio id="audio-element" src="https://www.youtube.com/embed/gB_Y4dUp9kk" autoPlay></audio>


    return ( 
        <div>
       <AudioSpectrum
        id="audio-canvas"
        height={200}
        width={300}
        audioId={'audio-element'}
        capColor={'red'}
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
            { stop: 0, color: '#f00' },
            { stop: 0.5, color: '#0CD7FD' },
            { stop: 1, color: 'red' }
        ]}
        gap={4}     />
            </div>
    )

}

export default Music;