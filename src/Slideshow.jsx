import React from "react";
import { Slide } from 'react-slideshow-image';
import "./Content.css";

class Slideshow extends React.Component {

    state = {
        top: this.props.data
    }

    render() {
        const proprietes = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }

        const elements = this.state.top.map((content) =>
            <div className="each-slide" key={content.id}>
                <div className="Display-Articles Slide" style={{ backgroundImage: content.background }}>
                    <div className="Slide-Block">
                        <div className="Flex-Slide">
                            <div className="Style-Name">
                                {content.name}
                            </div>
                            <div className="Style-Comment">
                                {content.comment}
                            </div>
                        </div>
                        <img className="Img-Slideshow" src={content.img} alt="" />
                    </div>
                </div>
            </div>
        )

        return (
            <div className="containerSlide">
                <p>Les plus aimés !</p>
                <Slide
                    {...proprietes}>
                    {elements}
                </Slide>
            </div>
        )
    }
}
export default Slideshow;