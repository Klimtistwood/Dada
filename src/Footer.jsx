import React from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

class Footer extends React.Component {
    state = {
        toggleSearchBar: false,
        ytLink : "https://www.youtube.com/watch?v=ZMj42AD2I_Y"
    }

    render() {
        return (
            <footer className="App-Footer">
                {/* <div className="Player">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/OOjs_UI_icon_play-ltr.svg/1024px-OOjs_UI_icon_play-ltr.svg.png" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Heart-icon-PNG-715x715.png" alt="" />
                </div> */}
                {/* <Player ytLink ={this.state.ytLink}/> */}
                <div className="Foot">
                    <Link to="/">
                        <img className="Img-Footer" src={"https://image.flaticon.com/icons/png/512/61/61689.png"} alt="" />
                    </Link>
                    <img className="Img-Footer" src={"https://cdn3.iconfinder.com/data/icons/watchify-v1-0-32px/32/magnifying-glass-search-512.png"}
                        alt="" />
                    <img className="Img-Footer" src={"https://image.flaticon.com/icons/png/512/212/212807.png"} alt="" />
                
                </div>
                
            </footer>)
    }
}

export default Footer;
