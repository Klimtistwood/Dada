import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';


class Animals extends React.Component {

    state = {
        video: "ZMj42AD2I_Y",
        autoplay: 0,
        rel: 0,
        modest: 1,
    }
    // componentDidMount = () => {
    //     this.playVideo();
    // };

    // componentWillUnmount = () => {
    //     this.pauseVideo();
    // };

    playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
        console.log(this.refs.vidRef.play())
    };

    pauseVideo = () => {
        // Pause as well
        // this.refs.vidRef.pause();
    };

    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        // var videoSrc = "https://www.youtube.com/embed/" +
        //     this.state.video + "?autoplay=" +
        //     this.state.autoplay + "&rel=" +
        //     this.state.rel + "&modestbranding=" +
        //     this.state.modest;
        return (
            <div className="container">
                <button onClick={this.playVideo}> PLAY / PAUSE </button>
                <YouTube
                    ref="vidRef"
                    videoId="ZMj42AD2I_Y"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
};

export default Animals;
